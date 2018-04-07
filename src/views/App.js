import React, { Component } from 'react';
import '../assets/css/App.css';
import Card from '../components/Card.jsx';
import Sidebar from '../components/Sidebar.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
      </div>
    );
  }
}

export default App;
