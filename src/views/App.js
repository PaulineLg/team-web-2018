import React, { Component } from 'react';
import '../assets/css/App.css';
import Card from '../components/Card.jsx';
import Sidebar from '../components/Sidebar.jsx';
import ShippingGraph from '../components/ShippingGraph.jsx';
import WelcomePage from '../components/WelcomePage.jsx';
import logo from '../assets/img/logo-flower.png';
import axios from 'axios'

class App extends Component {
  constructor() {
   super()
   this.state = {
     user: {
       userId: 'fe',
       sessionId: 'gg'
     }
   }
 }
 login() {
    axios.get('https://jsonplaceholder.typicode.com/users/1')
   .then(response => this.setState({user: {userId: response.data.id, sessionId: response.data.username + response.data.address.zipcode}}))
  }
  userConnected() {
    this.login()
    //console.log(this.state)
    if (this.state.user.userId && this.state.user.sessionId)
      return true
    else
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
        <Sidebar menu='user' />
       Holà
        <div id="menu">
          <ShippingGraph />
          <div id='chart-container'></div>
        </div>
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
