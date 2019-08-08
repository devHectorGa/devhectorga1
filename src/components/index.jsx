import React, { Component } from 'react';

import Sections from './sections';

class App extends Component {
  constructor(...props){
    super(...props);
    this.state = {
    };
  }
  render() {
    return (
      <Sections />
      // <h1>Hola</h1>
    );
  }
}

export default App;