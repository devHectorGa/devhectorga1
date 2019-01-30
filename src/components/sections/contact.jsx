import React from 'react';
import './css/contact.scss';

const Contact = (...props)=>(
  <section id="contact" className="contact">
    <h2>Contact Me</h2>
    <h3>Get Your Data</h3>
    <form className="contact_form">
      <input type="text" name="name" placeholder="Name" required />
      <input type="email" name="email"placeholder="Email" required />
      <input type="tel" name="phone" placeholder="Phone Number" required />
      <textarea name="message" cols="30" rows="10" placeholder="Message" required></textarea>
      <input type="submit" value="Send" />
    </form>
  </section>
);

export default Contact;