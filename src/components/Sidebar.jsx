import React, {Component} from 'react';

import logo from '../crepe.png';

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
    console.log(this.state)
  }
    render(){
        return (
            <div id="sidebar" className="sidebar" data-color="black">
                    <div className="logo-sidebar">
                        <a href="#" className="simple-text logo-mini">
                            <div className="logo-img">
                                <img src={logo} alt="logo_image"/>
                            </div>

                        </a>
                        <a href="#" className="simple-text logo-normal">
                            My Flowers Manager
                        </a>
                    </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li id="user" class={this.state.menuClasses.user}> USER </li>
                        <li id="plants" class={this.state.menuClasses.plants}> Plants </li>
                        <li id="stock" class={this.state.menuClasses.stock}> Stock </li>
                        <li id="orders" class={this.state.menuClasses.orders}> Orders </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;
