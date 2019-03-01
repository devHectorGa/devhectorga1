import firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDe-8xVkrc75YepY4vZ0GtdqNQFkOgAcXY",
    authDomain: "devhectorga.firebaseapp.com",
    databaseURL: "https://devhectorga.firebaseio.com",
    projectId: "devhectorga",
    storageBucket: "devhectorga.appspot.com",
    messagingSenderId: "701704682698"
  };

firebase.initializeApp(config);
const database = firebase.firestore();




// const saveUser = user => (
//   ref
//     .child(`users/${user.uid}/info`)
//     .set({
//       email: user.email,
//       uid: user.uid
//     })
//     .then( () => user )
// );
// const auth = (email, password) => (
//   firebase.auth()
//     .createUserWithEmailAndPassword(email, password)
//       .then(saveUser)
// );
const login = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);
const logout = () => firebase.auth().signOut();
const resetPassword = email => firebase.auth().sendPasswordResetEmail(email);

const designCollection = database.collection('design');

const readLinks = () => {
  return (designCollection.onSnapshot(snapshot => (snapshot)));
};

export {
  // saveUser,
  // auth,
  login,
  logout,
  resetPassword,
  readLinks
};