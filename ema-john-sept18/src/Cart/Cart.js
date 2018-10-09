import React, { Component } from 'react';

class Cart extends Component {
    render() {

        const cart = this.props.cart;
        const totalPrice = cart
                .reduce( (total, prd) => total+prd.price, 0);
        
        // reduce explanation
        let totalPrice2 = 0;
        for(let i = 0; i <cart.length; i++){
            totalPrice2 += cart[i].price;
        }

        return (
            <div>
                 <h4>Order Summary</h4>
                <p>Items Ordered: {this.props.cart.length}</p>
                <p>Total Price: {totalPrice2.toFixed(2)}</p>
                <br/>
                {this.props.children}
            </div>
        );
    }
}

export default Cart;