import React, { Component } from 'react';
import './index.scss';

import Header from './header'

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <section id="home" className="home">
          <h1>Lorem Ipsum</h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <button>Contact Me</button>
        </section>
        <section id="about" className="about">
          <h2>About Me</h2>
          <div className="slidePictures"></div>
          <div className="about_data">
            <div className="about_name">
              <h3>Name</h3>
              <p>Hector Garzon</p>
            </div>
            <div className="about_sex">
              <h3>Sex</h3>
              <p>Male</p>
            </div>
            <div className="about_address">
              <h3>Address</h3>
              <p>Bogotá DC, Colombia</p>
            </div>
            <div className="about_phone">
              <h3>Phone Number</h3>
              <p>+57 310 123 4567</p>
            </div>
            <div className="about_email">
              <h3>Email</h3>
              <p><a href="mailto:contact@devHector.Ga">contacto@devHector.Ga</a></p>
            </div>
          </div>
        </section>
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

export default App;