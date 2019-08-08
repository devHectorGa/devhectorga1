import React from 'react';
import './css/about.scss';
import photo from '../img/photo.png';

const About = (...props) => (
    <section id="about" className="about">
      <h2 className="aboutTitle">About Me</h2>
      <p className="aboutText">My name is Hector Garzón, I’m web developer. Over the past 2 years I’ve learning to created and implemented different technologies and frameworks to improve me know about the Web developer.</p>
      <div className="aboutData">
        <div className="data">
          <h3>Name</h3>

          <p>Hector Garzon</p>
        </div>
        <div className="data">
          <h3>Gender</h3>
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
      <img className="aboutPicture" src={photo} alt="Fotografia Hector Garzón"/>
    </section>
);

export default About;