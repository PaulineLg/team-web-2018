import React, { Component } from 'react';
import '../assets/css/App.css';
import Card from '../components/Card.jsx';
import Sidebar from '../components/Sidebar.jsx';
import ShippingGraph from '../components/ShippingGraph.jsx';
import OrderTable from '../components/OrderTable.jsx';
import logo from '../assets/img/logo-flower.png';
import axios from 'axios'

class Order extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
      orders: []
    }
    this.currentOrders()
  }
  currentOrders() {
    axios.get('https://fierce-river-71227.herokuapp.com/u/99998/orders/current/1')
    .then(response => this.setState({
      orders: response.data
    }))
    .catch(function(error) {
      console.log(error)
    })
  }
  OrderView() {
    console.log("OverView")
    console.log(this.state.orders)
    return (
      <div className="User">
        <h1>ORDERS</h1>
        <OrderTable orders={this.state.orders}/>
      </div>
    )
  }
  render() {
    return (this.OrderView())
  }
}

export default Order
