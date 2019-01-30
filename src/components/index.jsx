import React, { Component } from 'react';
import './index.scss';

import Header from './sections/header';
import Home from './sections/home';
import About from './sections/about';
import Skills from './sections/skills';
import Services from './sections/services';
import Projects from './sections/projects';
import Contact from './sections/contact';
import Footer from './sections/footer';

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
        <Footer />
      </main>
    );
  }
}

App.propTypes = {  };
App.defaultProps = {  };

export default App;