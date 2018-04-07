import React, {Component} from 'react';

import logo from '../crepe.png';

class Sidebar extends Component{
    render(){
        const sidebarBackground = {
            backgroundColor: 'blue'
        };
        return (
            <div id="sidebar" className="sidebar" data-color="black">
                <div className="sidebar-background" style={sidebarBackground}></div>
                    <div className="logo">
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
                        <li> USER </li>
                        <li> Plants </li>
                        <li> Stock </li>
                        <li> Orders </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;
