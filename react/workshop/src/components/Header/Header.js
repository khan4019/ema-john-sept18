import React, { Component } from 'react';
import logo from '../../images/logo.png';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img alt="" src={logo} />
                <ul>
                    <li>
                        <a href="/shop">Shop</a>
                    </li>
                    <li>
                        <a href="/review">Review</a>
                    </li>
                    <li>
                        <a href="/inventory">Manage Inventroy</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;