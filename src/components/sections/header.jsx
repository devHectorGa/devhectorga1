import React from 'react';
import Nav from './component/nav';
import './css/header.scss';
import './css/home.scss';

const links = [
  {href: "#home", name: "Home"},
  {href: "#about",name: "About"},
  {href: "#skills",name: "Skills"},
  {href: "#services",name: "Services"},
  {href: "#projects",name: "Projects"},
  {href: "#contact",name: "Contact"}
];

const Header = (props) =>(
  <header className={setClass(props.nav)}>
    <a href="./" className="logo"><img src="imagotipo.svg" alt="imagotipo devHectorGa"/></a>
    <button className="navToggle" onClick={props.handleOnNav}><i className="fas fa-bars fa-2x"></i></button>
    <Nav links={links} handleOnNav={props.handleOnNav}/>    
  </header>
);

const setClass = (state)=>(
  (state)
    ? "header is-active"
    : "header"
);

export default Header;