import React, { Component } from 'react';
import '../assets/css/App.css';
import Card from '../components/Card.jsx';
import Sidebar from '../components/Sidebar.jsx';
import ShippingGraph from '../components/ShippingGraph.jsx';
import StockPlants from '../components/StockPlants.jsx';
import StockSeeds from '../components/StockSeeds.jsx';
import WelcomePage from '../components/WelcomePage.jsx';
import logo from '../assets/img/logo-flower.png';
import axios from 'axios'

class Stock extends Component {
    StockView() {
    return (
      <div className="Stock">
         <h1>MY STOCKS</h1>
          <h3> Hello {this.props.user.name}, Below are you stocks for different plants per month</h3>
        <div id="Stockplants">
            <StockPlants />
            <StockSeeds />
        </div>
      </div>
    )
  }
  render() {
      return (this.StockView())
  }
}

export default Stock;
