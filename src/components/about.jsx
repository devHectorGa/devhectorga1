import React from 'react'

const About = (...props) => (
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
)

export default About