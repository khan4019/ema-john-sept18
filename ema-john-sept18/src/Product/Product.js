import React, { Component } from 'react';
import './Product.css'

class Product extends Component {
    render() {
        const product = this.props.product;
        return (
            <div className="product">
                <div>
                    <img src={product.img} alt=""/>
                </div>
                <div>
                    <h4>{product.name}</h4>
                    <p>{product.price}</p>
                    <button>Add to Cart</button>
                </div>
                
            </div>
        );
    }
}

export default Product;