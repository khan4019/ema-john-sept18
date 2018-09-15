import React, { Component } from 'react';
import { getDatabaseCart } from '../utility/local-storage';
import fakeData from '../fakeData/index';
import Cart from '../Cart/Cart';

class Review extends Component {

    constructor(){
        super();
        this.state = {
            cart: []
        }
    }
    componentDidMount() {
        const storedCart = getDatabaseCart();
        const savedCart = [];
        for(let id in storedCart){
            const product = fakeData.find(prd => prd.id === id);
            product.quantity = storedCart[id];
            savedCart.push(product);
        }
        this.setState({cart:savedCart});
    }
    

    render() {
        return (
            <div className="shop">
                <div className="product-container">

                </div>
                <div className="cart-container">
                    <Cart cart={this.state.cart}></Cart>
                </div>
            </div>
        );
    }
}

export default Review;