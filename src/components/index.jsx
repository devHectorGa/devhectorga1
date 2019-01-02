import React, { Component } from 'react';
import './index.scss';
import PropTypes from 'prop-types';

import Header from './header';
import Home from './home';
import About from './about';
import Skills from './skills';
import Services from './services';
import Projects from './projects';
import Contact from './contact';
// import 

class App extends Component {
  constructor(...props){
    super(...props);
    this.state = {};
  }
  render() {
    return (
      <main>
        <Header />
        <Home />        
        <About />
        <Skills />
        <Services />  
        <Projects />
        <Contact />
        <footer>
          <p>&copy; 2018. All rights reserved </p>
        </footer>
      </main>
    );
  }
}

App.propTypes = {  };
App.defaultProps = {  };

export default App;