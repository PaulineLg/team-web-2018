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
    constructor(props) {
        super(props)
        this.handleNextPlant = this.handleNextPlant.bind(this);
        this.handlePrevPlant = this.handlePrevPlant.bind(this);
        this.state = {
            plants: ['Tulip', 'Rose', 'Muguet', 'Orchidées'],
            currentPlant: 0
        }
      }

handleNextPlant = (newCurrent) => {
    console.log(this.state.currentPlant);
    this.setState((preState) => {
        if(this.state.currentPlant >= this.state.plants.length){
           return  {
               currentPlant : preState.currentPlant-this.state.plants.length
           }
        }
        return {
            currentPlant : preState.currentPlant++
        };
    });
}

 handlePrevPlant = (newCurrent) => {
    console.log(this.state.currentPlant);
    this.setState((preState) => {
        if(this.state.currentPlant <= -1){
           return  {
               currentPlant : this.state.plants.length-1
           }
        }
        return {
            currentPlant : preState.currentPlant--
        };
    });
 }

  PlantsView() {
    return (
        <div className="Plants">
            <h1>MY PLANTS</h1>
            Hello {this.props.user.name}, your watering level for this plants
            <div id="plantsList">
                <div id="button-prev" onClick={() => this.handlePrevPlant(this.state.currentPlant--)}><span>&lt;</span></div>
                <div id="listState">{this.state.plants[this.state.currentPlant]}</div>
                <div id="button-next" onClick={() => this.handleNextPlant(this.state.currentPlant++)}><div>&gt;</div></div>
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
