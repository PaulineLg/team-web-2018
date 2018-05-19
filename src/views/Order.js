import React, { Component } from 'react';
import '../assets/css/App.css';
import OrderTable from '../components/OrderTable.jsx';
import axios from 'axios'

class Order extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
      currentOrders: [],
      oldOrders: []
    }
    this.currentOrders()
    this.oldOrders()
  }
  currentOrders() {
    axios.get('https://fierce-river-71227.herokuapp.com/u/' + this.state.user.userId + '/orders/current/1')
    .then(response => this.setState({
      currentOrders: response.data
    }))
    .catch(function(error) {
      console.log(error)
    })
  }
  oldOrders() {
    axios.get('https://fierce-river-71227.herokuapp.com/u/' + this.state.user.userId + '/orders/old/1')
    .then(response => this.setState({
      oldOrders: response.data
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
        <OrderTable orders={this.state.currentOrders} title="Current orders"/>
        <OrderTable orders={this.state.oldOrders} title="History of orders"/>
      </div>
    )
  }
  render() {
    return (this.OrderView())
  }
}

export default Order
