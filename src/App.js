import React, { Component } from 'react';
import CountryFlag from './CountryFlag';
import worldImg from './images/world.jpeg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="flag-app">
        <header
          className="title-header"
          style={{ backgroundImage: `url(${worldImg})` }}>
          <h1 className="title-text">Guess The Country</h1>
        </header>
        <CountryFlag />
      </div>
    );
  }
}

export default App;