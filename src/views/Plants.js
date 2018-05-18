import React, { Component } from 'react';
import '../assets/css/App.css';
import Card from '../components/Card.jsx';
import Sidebar from '../components/Sidebar.jsx';
import ShippingGraph from '../components/ShippingGraph.jsx';
import WelcomePage from '../components/WelcomePage.jsx';
import logo from '../assets/img/logo-flower.png';
import axios from 'axios'
import UpkeepPlants from '../components/UpkeepPlants.jsx';
import WaterPlants from '../components/WaterPlants.jsx';
import TreatmentPlants from '../components/TreatmentPlants.jsx';
import MapContainer from '../components/MapContainer.js';

class Plants extends Component {
  state = {
    plants: ['tulip', 'rose'],
    currentPlant: 'tulip'
  }

 // handleNextPlant()

  PlantsView() {
    return (

        <div className="Plants">
            <h1>MY PLANTS</h1>
            <div id="plantsList">
                Hello {this.props.user.name}, your watering level for this plants
                <div>&lt;</div>
                <div>{this.state.currentPlant}</div>
                <div>&gt;</div>
            </div>
            <div id="water">
                    <WaterPlants />
            </div>
            <div id="treatment">
                <TreatmentPlants />
            </div>
        </div>
    )
  }
  render() {
      return (this.PlantsView())
  }
}

export default Plants;
