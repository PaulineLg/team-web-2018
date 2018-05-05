import React, { Component } from 'react';
import '../assets/css/App.css';
import Card from '../components/Card.jsx';
import Sidebar from '../components/Sidebar.jsx';
import ShippingGraph from '../components/ShippingGraph.jsx';
import WelcomePage from '../components/WelcomePage.jsx';
import logo from '../assets/img/logo-flower.png';
import axios from 'axios'
import UpkeepPlants from '../components/UpkeepPlants.jsx';
import { GoogleApiWrapper } from 'google-maps-react'
import MapContainer from '../components/MapContainer'
import User from '../views/User.js'

class App extends Component {
  constructor() {
   super()
   this.state = {
     menu : 'user',
     user: {
       userId: 'fe',
       sessionId: 'gg'
     }
   }
   this.login()
 }
 login() {
    axios.get('https://jsonplaceholder.typicode.com/users/1')
   .then(response => this.setState({user: {userId: response.data.id, sessionId: response.data.username + response.data.address.zipcode}}))
  }
  userConnected() {
    //this.login()
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
          <User />
        </div>
      </div>
    )
  }
  connectedInterface() {
    let changeMenu = this.changeMenu
    return (
      <div className="App">
        <Sidebar menu={this.state.menu} changeMenu={changeMenu} />
        Menu = {this.state.menu}
        <div id="menu">
          <User />
          <div>
          <h1> LA MAP BB</h1>
            <MapContainer google={this.props.google} />
          </div>
        </div>
      </div>
    )
  }
  changeMenu = (newMenu) => {
    this.state.menu = newMenu
    //let menu = this.state.menu
    /*this.setState((menu) => {
      return {menu: newMenu}
    })*/
    this.setState(this.state)
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

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA9t2IFhXU00dJYTiHnWMRMjVXW_GWv0aQ',
})(App)
