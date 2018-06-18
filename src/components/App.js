import React, { Component } from 'react';
import '../styles/App.css';
import Search from './Search';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Search/>
      </div>
    );
  }
}

export default App;
