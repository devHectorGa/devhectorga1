import React, { Component } from 'react';
import './index.scss';

import Header from './header';
import Home from './home';
import About from './about';
import Skills from './skills';
import Services from './services';
import Projects from './projects';
import Contact from './contact';
import Footer from './footer';

class Sections extends Component {
  constructor(...props){
    super(...props);
    this.state = {
      nav: false
    };
    this.handleOnNav = this.handleOnNav.bind(this);
  }
  handleOnNav(e){
    this.setState({nav: !this.state.nav});
  }
  render() {
    return (
      <main>
        <Header nav={this.state.nav} handleOnNav={this.handleOnNav} />
        <Home />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </main>
    );
  }
}

export default Sections;
export {
  Header,
  Home,
  About,
  Skills,
  Services,
  Projects,
  Contact,
  Footer
};