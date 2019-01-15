import React from 'react';
import './services.scss';

const Services = (...props) => (
  <section id="services" className="services">
    <h2>My Services</h2>
    <a href="#web" className="service">
      <i className="fab fa-react"></i>
      Web Design
    </a>
    <a href="#creative" className="service">
      <i className="fab fa-react"></i>
      Creative Design
    </a>
    <a href="#coding" className="service">
      <i className="fab fa-react"></i>
      Coding
    </a>
  </section>
);

export default Services;