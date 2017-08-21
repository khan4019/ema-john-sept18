import React, { Component } from 'react';
import './Header.css';
import logo from '../../images/logo.png';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={logo} />
                <ul>
                    <li>
                        <a href="/shop">Shop2</a>
                    </li>
                    <li>
                        <a href="/review">Review</a>
                    </li>
                    <li>
                        <a href="/inventory">Manage Inventory</a>
                    </li>
                </ul>   
            </div>
        );
    }
}

export default Header;