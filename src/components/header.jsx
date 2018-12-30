import React from 'react'
import './header.scss'

const Header = () =>(
  <header className="header">
    <a href="void:javascript()" className="logo"><img src="imagotipo.svg" alt="imagotipo devHectorGa"/></a>
    <button className="nav_toggle"><i className="fas fa-bars fa-2x"></i></button>
    <nav className="header_nav">
      <ul className="nav">
        <li className="nav_list"><a href="void:javascript()" className="nav_link">Home</a></li>
        <li className="nav_list"><a href="void:javascript()" className="nav_link">About Me</a></li>
        <li className="nav_list"><a href="void:javascript()" className="nav_link">My Skills</a></li>
        <li className="nav_list"><a href="void:javascript()" className="nav_link">My Services</a></li>
        <li className="nav_list"><a href="void:javascript()" className="nav_link">My Projects</a></li>
        <li className="nav_list"><a href="void:javascript()" className="nav_link">Contact Me</a></li>
      </ul>
    </nav>
  </header>
)

export default Header