import React, { Component } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../utility/local-storage';
import fakeData from '../fakeData/index';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

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
    
    handleRemoveItem = (product) =>{
        const newCart = this.state.cart.filter(prd => prd.id !== product.id);
        this.setState({cart:newCart});
        removeFromDatabaseCart(product.id);
    }

    render() {
        return (
            <div className="shop">
                <div className="product-container">
                    {
                        this.state.cart
                        .map( prd => <Product 
                            key={prd.id} 
                            product={prd}
                            handleRemoveItem={this.handleRemoveItem}
                            isReview
                            ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={this.state.cart}></Cart>
                </div>
            </div>
        );
    }
}

export default Review;