import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

export class OrderTable extends Component {
  commande = (order) => {
    if (order) {
        return (
          <tr>
            <td>{order.numcom}</td>
            <td>{order.nom}</td>
            <td>{order.numcli}</td>
            <td>{order.club ? <FontAwesome name='check' size='1x' /> : ""}</td>
            <td>{"$" + order.prixtotal + ".00"}</td>
            <td>{order.datecommande}</td>
            <td>{order.datelivraison}</td>
            <td>{order.etat}</td>
          </tr>
        )
      }
  }
  render() {
    return (
      <div className='OrderTable'>
        <h3> {this.props.title} </h3>
        <table className='table'>
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Client</th>
              <th>Client Number</th>
              <th>Club</th>
              <th>Price</th>
              <th>Order Date</th>
              <th>Delivery Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.orders.map((order, i) => {
                return this.commande(order)
              })
            }
          </tbody>
        </table>
    </div>);
  }
}

export default OrderTable;
