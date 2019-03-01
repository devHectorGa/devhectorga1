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
    );
  }
}

export default App;