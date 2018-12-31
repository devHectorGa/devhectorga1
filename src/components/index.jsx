import React, { Component } from 'react';
import './index.scss';
import PropTypes from 'prop-types';

import Header from './header'
import Home from './home'
import About from './about'
import Skills from './skills'
import Services from './services'
import Projects from './projects'
// import 

class App extends Component {
  constructor(...props){
    super(...props)
    this.state = {

    }
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
        <section id="contact" className="contact">
          <h2>Contact Me</h2>
          <div className="contact_form">
            <h3>Get Your Data</h3>
            <form>
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email"placeholder="Email" required />
              <input type="tel" name="phone" placeholder="Phone Number" required />
              <textarea name="message" cols="30" rows="10" required></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>
        </section>
        <footer>
          <p>&copy; 2018. All rights reserved </p>
        </footer>
      </main>
    );
  }
}

App.propTypes = {  }
App.defaultProps = {  }

export default App;