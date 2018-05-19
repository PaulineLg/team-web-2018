import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

class Sidebar extends Component{
  constructor(props) {
    super(props)
    this.state = {
      menuClasses : {
        user: '',
        plants: '',
        stock: '',
        orders: ''
      }
    }
    this.switchMenu()
  }
  switchMenu = () => {
      this.state = {
        menuClasses : {
          user: '',
          plants: '',
          stock: '',
          orders: ''
        }
      }
      switch (this.props.menu) {
        case 'user':
          this.state.menuClasses.user = 'selected'
          break
        case 'plants':
          this.state.menuClasses.plants = 'selected'
          break
        case 'stock':
          this.state.menuClasses.stock = 'selected'
          break
        case 'orders':
          this.state.menuClasses.orders = 'selected'
          break
        default:
          break
      }
    }
    render(){
        this.switchMenu()
        let changeMenu = this.props.changeMenu
        const profilePic = this.props.user.img
        return (
            <div id="sidebar" className="sidebar" data-color="black">
                <div className="sidebar-wrapper">
                    <ul className="nav">
                    <li id="user-profile"> <img src='http://i.stack.imgur.com/mGmfu.png' /> <span className="user-name"> {this.props.user.name} </span> </li>
                    <li id="user" className="menu-item" onClick={() => changeMenu("user")} className={this.state.menuClasses.user}> <FontAwesome name='tachometer' size='2x' /> Profile </li>
                    <li id="plants" className="menu-item" onClick={() => changeMenu("plants")} className={this.state.menuClasses.plants}> <FontAwesome name='leaf' size='2x' /> Plants </li>
                    <li id="stock" className="menu-item" onClick={() => changeMenu("stock")} className={this.state.menuClasses.stock}> <FontAwesome name='leaf' weight='solid' size='2x' /> Stock </li>
                    <li id="orders" className="menu-item" onClick={() => changeMenu("orders")} className={this.state.menuClasses.orders}> <FontAwesome name='leaf' weight='solid' size='2x' /> Orders </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;
