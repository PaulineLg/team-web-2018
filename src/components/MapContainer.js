import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'


export default class MapContainer extends Component {

  state = {
    locations: [
      { name: "New York County Supreme Court", location: {lat: 40.7143033, lng: -74.0036919} },
      { name: "Queens County Supreme Court", location: {lat: 40.7046946, lng: -73.8091145} },
      { name: "Kings County Supreme Court", location: {lat: 40.6940226, lng: -73.9890967} },
      { name: "Richmond County Supreme Court", location: {lat: 40.6412336, lng: -74.0768597} },
      { name: "Bronx Supreme Court", location: {lat: 40.8262388, lng: -73.9235238} }
    ],
    user: this.props.user
  }

  componentDidMount() {
    this.loadMap()
  }

  loadLocations = () => {
    /* Cette fonction aurait servi si les clients avaient une adresse......... */
    let locationArray
    axios.get('https://fierce-river-71227.herokuapp.com/u/{this.state.user.userId}/orders/current/1')
   .then(response => this.state.data.map( function(location, i) {
     locationArray.push({name: response.data})
   }))
  }

  loadMap() {
    if (this.props && this.props.google) {
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      const mapConfig = Object.assign({}, {
        center: {lat: 40.7485722, lng: -74.0068633},
        zoom: 11,
        mapTypeId: 'roadmap'
      })

      this.map = new maps.Map(node, mapConfig);


      this.state.locations.forEach( location => {
        const marker = new google.maps.Marker({
          position: {lat: location.location.lat, lng: location.location.lng},
          map: this.map,
          title: location.name
        });
      })

    }
  }

  render() {
    const style = {
      width: '40vw',
      height: '45vh'
      }

    return (
      <div ref="map" style={style}>
        loading map...
      </div>
    )
  }
}
