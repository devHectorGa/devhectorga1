import React from 'react';
import './about.scss';
import Logo from './img/imagotipo.svg';

const About = (...props) => (
    <section id="about" className="about">
      <h2 className="about_title">About Me</h2>
      <div className="about_data">
        <div className="data">
          <h3>Name</h3>
          <p>Hector Garzon</p>
        </div>
        <div className="data">
          <h3>Sex</h3>
          <p>Male</p>
        </div>
        <div className="data">
          <h3>Address</h3>
          <p>Bogotá DC, Colombia</p>
        </div>
        <div className="data">
          <h3>Email</h3>
          <p><a href="mailto:contact@devHector.Ga">contacto@devHector.Ga</a></p>
        </div>
      </div>
      <img className="about_picture" src={Logo} alt="Imagotipo devHector.Ga"/>
    </section>
);

export default About;