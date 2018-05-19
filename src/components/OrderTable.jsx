import React, {Component} from 'react';

export class OrderTable extends Component {
  commande = (order) => {
    if (order) {
      console.log("ok")
        return (
          <tr>
            <td>{order.numcom}</td>
            <td>{order.nom}</td>
            <td>{order.numcli}</td>
            <td>{order.club}</td>
            <td>{order.prix}</td>
            <td>{order.datecommande}</td>
            <td>{order.datelivraison}</td>
            <td>{order.etat}</td>
          </tr>
        )
      }
  }
  render() {
    console.log("OrderTable")
    console.log(this.props)
    return (
      <div className='OrderTable'>
        <table>
          <thead>
            <tr>
              <th>Numéro commande</th>
              <th>Client</th>
              <th>Numéro client</th>
              <th>Club</th>
              <th>Prix</th>
              <th>Date de commande</th>
              <th>Date de livraison</th>
              <th>Statut</th>
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
