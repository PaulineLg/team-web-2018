import React, { Component } from 'react';
import '../assets/css/App.css';
import Card from '../components/Card.jsx';
import Sidebar from '../components/Sidebar.jsx';
import ShippingGraph from '../components/ShippingGraph.jsx';
import SalesGraph from '../components/SalesGraph.jsx';
import axios from 'axios'
import UpkeepPlants from '../components/UpkeepPlants.jsx';
import { GoogleApiWrapper } from 'google-maps-react'
import MapContainer from '../components/MapContainer'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user
    }
  }
  loadSales() {

  }
  UserView() {
    return (
      <div className="User">
        <h1>USER STATISTICS</h1>

        <div className="OrdersMap">
            <MapContainer google={this.props.google} user={this.state.user} />
            <div id="orders-list">Hello {this.state.user.name}, <br/>
            The adresses of the next 3 deliveries to make : <br/>
            New York County Supreme Court <br/>
            Queens County Supreme Court <br/>
            Kings County Supreme Court <br/>
            </div>
        </div>
        <div className='chart-container'>
          <div id="ShippingGraph" className="chart" >
            <ShippingGraph />
          </div>
          <div id="SalesGraph" className="chart" >
            <SalesGraph />
          </div>
          <div id="UpkeepPlants" className="chart" >
            <UpkeepPlants />
          </div>
        </div>
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
