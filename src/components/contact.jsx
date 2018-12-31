import React from 'react'

const Contact = (...props)=>(
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
)

export default Contact