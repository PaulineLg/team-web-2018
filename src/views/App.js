import React, { Component } from 'react';
import '../assets/css/App.css';
import Card from '../components/Card.jsx';
import Sidebar from '../components/Sidebar.jsx';
import WelcomePage from '../components/WelcomePage.jsx';
import logo from '../assets/img/logo-flower.png';

class App extends Component {
  userConnected() {
    return false
  }
  disconnectedInterface() {
    return (
      <div className="App">
        <div className="logo">
          <img className="logo-img" src={logo}></img>
          <p className="logo-text"> My Flowers Manager </p>
        </div>
        <div className="form-container">
          <WelcomePage />
        </div>
      </div>
    )
  }
  connectedInterface() {
    return (
      <div className="App">
        Holà
      </div>
    )
  }
  render() {
    if (this.userConnected()) {
      return (this.connectedInterface())
    }
    else {
      return (this.disconnectedInterface())
    }

  }
}

export default App;
