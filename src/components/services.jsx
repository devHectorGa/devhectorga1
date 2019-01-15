import React from 'react';
import './services.scss';

const Services = (...props) => (
  <section id="services" className="services">
    <h2>My Services</h2>
    <a href="#web" className="service">
      <i className="fas fa-globe"></i>
      Web Developer
    </a>
    <a href="#creative" className="service">
      <i className="fas fa-pencil-ruler"></i>
      Creative Design
    </a>
    <a href="#coding" className="service">
      <i className="fas fa-code"></i>
      Coding
    </a>
  </section>
);

export default Services;