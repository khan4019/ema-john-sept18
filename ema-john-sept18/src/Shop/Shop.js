import React, { Component } from 'react';
import fakeData from '../fakeData/index';
import Product from '../Product/Product';

class Shop extends Component {
    constructor(){
        super();
        this.state = {
            products:[]
        }
    }

    componentDidMount() {
        const first10 = fakeData.slice(0,10);
        this.setState({products:first10});
        console.log(first10);
    }
    
    render() {
        return (
            <div className="shop">
                <div className="product-container">
                    <h1>Buy whatever you want</h1>
                    {
                        this.state.products.map(prd=><Product product={prd} key={prd.id}></Product>)
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