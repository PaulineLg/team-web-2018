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
  PlantsView() {
    return (

        <div className="Plants">
            <h1>MY PLANTS</h1>
            <div id="plantsList">
                <div id="water">
                    <WaterPlants />
                    <div id="orders-list">Hello {this.props.user.name}, your watering level for this plants <br/>
                    Tulipes <br/>
                    Rose <br/>
                    Lila <br/>
                    Muguet <br/>
                    </div>
                </div>
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
