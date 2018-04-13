import React, { Component } from 'react';
import '../assets/css/App.css';
import Card from '../components/Card.jsx';
import Sidebar from '../components/Sidebar.jsx';
import WelcomePage from '../components/WelcomePage.jsx';
import logo from '../assets/img/logo-flower.png';
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        userId: '',
        sessionId: ''
      }
    }
  }
  login() {
    axios.get('../../api/test/login')
   .then(response => this.setState({user: {userId: response.data.userId, sessionId: response.data.sessionId}}))
  }
  userConnected() {
    this.login()
    console.log(this.state)
    if (this.state.userId == '' || this.state.sessionId == '')
      return false
    else {
      return true
    }
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
