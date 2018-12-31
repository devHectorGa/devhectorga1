import React, { Component } from 'react';
import './index.scss';
import PropTypes from 'prop-types';

import Header from './header'
import Home from './home'
import About from './about'
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
        <section id="skills" className="skills">
          <h2>My Skills</h2>
          <div className="skill">
            <h3>HTML5, CSS3, JS</h3>
            <progress value="85" max="100">Hola</progress>
          </div>
          <div className="skill">
            <h3>PHP</h3>
            <progress value="40" max="100">Hola</progress>
          </div>
          <div className="skill">
            <h3>React JS</h3>
            <progress value="15" max="100">Hola</progress>
          </div>
          <div className="skill">
            <h3>Firebase</h3>
            <progress value="50" max="100">Hola</progress>
          </div>
        </section>
        <section id="services" className="services">
          <h2>My Services</h2>
          <a href="#web" className="service">Web Design</a>
          <a href="#creative" className="service">Creative Design</a>
          <a href="#coding" className="service">Coding</a>
        </section>  
        <section id="projects" className="projects">
          <h2>My Projects</h2>
          <div className="project">
            <img src="" alt="" />
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="project">
            <img src="" alt="" />
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="project">
            <img src="" alt="" />
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="project">
            <img src="" alt="" />
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="project">
            <img src="" alt="" />
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="project">
            <img src="" alt="" />
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="project">
            <img src="" alt="" />
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="project">
            <img src="" alt="" />
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </section>
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