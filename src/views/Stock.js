import React, { Component } from 'react';
import '../assets/css/App.css';
import Card from '../components/Card.jsx';
import Sidebar from '../components/Sidebar.jsx';
import ShippingGraph from '../components/ShippingGraph.jsx';
import StockPlants from '../components/StockPlants.jsx';
import WelcomePage from '../components/WelcomePage.jsx';
import logo from '../assets/img/logo-flower.png';
import axios from 'axios'

class Stock extends Component {
    StockView() {
    return (
      <div className="Stock">
        Coucou bb
        <div id="Stockplants">
            <StockPlants />
            <StockPlants />
        </div>
      </div>
    )
  }
  render() {
      return (this.StockView())
  }
}

export default Stock;
