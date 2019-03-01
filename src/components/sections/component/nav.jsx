import React from 'react';

const Nav = (props)=> (
  <nav className="headerNav">    
    <NavLink links={props.links} handleOnNav={props.handleOnNav} />
  </nav>
);
const NavLink = ( props )=>(
  <ul className="nav">
    {props.links.map(link => (
      <li key={link.name} className="navList" onClick={props.handleOnNav}>
        <a href={link.href} className="navLink">{link.name}</a>
      </li>
    ))}
  </ul>
);

export default Nav;