import React, { Component } from 'react';
import './CartItem.css';
class CartItem extends Component {
    render() {
        const item = this.props.item;
        return (
            <div className="cart-item">
                <h4>{item.name}</h4>
                <p>price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button>Remove item</button>
            </div>
        );
    }
}

export default CartItem;