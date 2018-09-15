import React, { Component } from 'react';
import fakeData from '../fakeData/index';
import Product from '../Product/Product';
import './Shop.css'

class Shop extends Component {
    constructor(){
        super();
        this.state = {
            products:[],
            cart:[]
        }
    }

    componentDidMount() {
        const first10 = fakeData.slice(0,10);
        this.setState({products:first10});
        
    }

    handleAddToCart = (product) =>{
        const newCart = [...this.state.cart, product];
        this.setState({cart:newCart});
    }
    
    render() {
        return (
            <div className="shop">
                <div className="product-container">
                    <h1>Buy whatever you want</h1>
                    {
                        this.state.products.map(prd=><Product 
                            product={prd}
                            addToCart={this.handleAddToCart}
                            key={prd.id}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <h4>Order Summary</h4>
                </div>
                
            </div>
        );
    }
}

export default Shop;