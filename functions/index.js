const functions = require('firebase-functions');
const admin = require('firebase-admin');
const app = require('express')();

admin.initializeApp();

const firebaseConfig = {
  apiKey: "AIzaSyDe-8xVkrc75YepY4vZ0GtdqNQFkOgAcXY",
  authDomain: "devhectorga.firebaseapp.com",
  databaseURL: "https://devhectorga.firebaseio.com",
  projectId: "devhectorga",
  storageBucket: "devhectorga.appspot.com",
  messagingSenderId: "701704682698",
  appId: "1:701704682698:web:fbfacf968344fb4c"
};

const firebase = require('firebase');
firebase.initializeApp(firebaseConfig);

const db = admin.firestore();

app.get('/screams', (req, res) => {
  db
    .collection('screams')
    .orderBy('createdAt', 'desc')
    .get()
    .then( data => {
      let screams = [];
      data.forEach( doc => {
        screams.push({
          screamId: doc.id,
          body: doc.data().body,
          userHandle: doc.data().userHandle,
          createdAt: doc.data().createdAt
        });
      });
      return res.json(screams);
    })
    .catch(err => console.error(err));
});

const FBAuth = (req, res, next) => {
  let idToken;
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
    idToken = req.headers.authorization.split('Bearer ')[1];
  }else{
    console.error('No token found');
    return res.status(403).json({ error: 'Unauthorized' });
  }

  admin.auth().verifyIdToken(idToken)
    .then(decodedToken => {
      req.user = decodedToken;
      return db.collection('users')
        .where('userId', '==', req.user.uid)
        .limit(1)
        .get();
    })
    .then(data => {
      req.user.handle = data.docs[0].data().handle;
      return next();
    })
    .catch(err => {
      console.error('Error while verifying token ', err);
      return res.status(403).json({err});
    });
};
// Post one scream
app.post('/scream', FBAuth, (req,res) => {

  if(req.body.body.trim() === '') { return res.status(400).json({ Body: 'Must not be empty' }) };

  const newScream = {
    body: req.body.body,
    userHandle: req.body.userHandle,
    createdAt: new Date().toISOString()
  };
  db.collection('screams').add(newScream)
    .then(doc => {
      res.json({ message: `document ${doc.id} created successfully` });
    })
    .catch(err=>{
      res.status(500).json({error: "Someting went wrong"});
      console.error(err);
    });
});

const isEmail = email => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.match(regEx) ? true : false;
};

const isEmpty = string => ( string.trim() === '' ? true : false );

// Signup route
app.post('/signup', (req,res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    handle: req.body.handle
  };


  let errors = {};
  if(isEmpty(newUser.email)){
    errors.email = 'Must not be empty';
  }else if(!isEmail(newUser.email)){
    errors.email = 'Must be a valid email address';
  };

  if(isEmpty(newUser.password)) errors.password = 'Must not be empty';
  if(newUser.password !== newUser.confirmPassword) errors.confirmPassword = 'Passwords must match';
  if(isEmpty(newUser.handle)) errors.handle = 'Must not be empty';

  if (Object.keys(errors).length>0) return res.status(400).json({errors});

  // TODO: validate data
  let token, userId;
  db.doc(`/users/${newUser.handle}`).get().then(doc => {
    if(doc.exists){
      return res.status(400).json({ handle: 'This handle is already taken' });
    }else{
      return firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
    }
  })
    .then(data => {
      userId = data.user.uid;
      return data.user.getIdToken();
    })
    .then(idToken => {
      token = idToken;
      const userCredentials = {
        handle: newUser.handle,
        email: newUser.email,
        createdAt: new Date().toISOString(),
        userId
      };
      return db.doc(`/users/${newUser.handle}`).set(userCredentials);
    })
    .then( () => {
      return res.status(201).json({ token });
    })
    .catch(err => {
      console.error(err);
      if(err.code === 'auth/email.already-in-use'){
        return res.status(400).json({ email: 'Email is already in use' });
      }else {
        return res.status(500).json({ error: err.code });
      }
    });
});

app.post('/login', (req, res) =>{
  const user = {
    email: req.body.email,
    password: req.body.password
  };
  let errors = {};
  if(isEmpty(user.email)) errors.email = 'Must not be empty';
  if(isEmpty(user.email)) errors.email ='Must not be empty';

  if(Object.keys(errors).length > 0) return res.status(400).json(errors);

  firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then( data => data.user.getIdToken() )
    .then( token => res.json({ token }) )
    .catch( err => {
      console.error(err);
      return (err.code === 'auth/wrong-password')
        ? res.status(403).json({ general: 'Wrong credentials, please try again' })
        : res.status(500).json({error: err.code});
    } );

});

exports.api = functions.https.onRequest(app);