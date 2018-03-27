import React, { Component } from 'react';
import logo from './crepe.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ceci n'est pas un projet web</h1>
        </header>
        <p className="App-intro">
          Il va falloir bosser maintenant.
        </p>
      </div>
    );
  }
}

export default App;
