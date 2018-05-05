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
                      <li id="user" onClick={() => changeMenu("user")} className={this.state.menuClasses.user}> User </li>
                    <li id="plants" onClick={() => changeMenu("plants")} className={this.state.menuClasses.plants}> Plants </li>
                    <li id="stock" onClick={() => changeMenu("stock")} className={this.state.menuClasses.stock}> Stock </li>
                    <li id="orders" onClick={() => changeMenu("orders")} className={this.state.menuClasses.orders}> Orders </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;
