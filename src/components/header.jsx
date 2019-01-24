import React from 'react';
import './header.scss';

const Header = (...props) =>(
  <header className="header">
    <a href="./" className="logo"><img src="imagotipo.svg" alt="imagotipo devHectorGa"/></a>
    <button className="nav_toggle"><i className="fas fa-bars fa-2x"></i></button>
    <nav className="header_nav">
      <ul className="nav">
        <li className="nav_list"><a href="#home" className="nav_link">Home</a></li>
        <li className="nav_list"><a href="#about" className="nav_link">About</a></li>
        <li className="nav_list"><a href="#skills" className="nav_link">Skills</a></li>
        <li className="nav_list"><a href="#services" className="nav_link">Services</a></li>
        <li className="nav_list"><a href="#projects" className="nav_link">Projects</a></li>
        <li className="nav_list"><a href="#contact" className="nav_link">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;