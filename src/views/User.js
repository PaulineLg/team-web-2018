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

class User extends Component {
  UserView() {
    return (
      <div className="User">
        <div id="OrdersMap">
            <MapContainer google={this.props.google} />
        </div>
        <div id="ShippingGraph" >
          <ShippingGraph />
        </div>
        <div id="UpkeepPlants">
          <UpkeepPlants />
        </div>
        <div id='chart-container'></div>
      
      </div>
    )
  }
  render() {
      return (this.UserView())
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA9t2IFhXU00dJYTiHnWMRMjVXW_GWv0aQ',
})(User)

