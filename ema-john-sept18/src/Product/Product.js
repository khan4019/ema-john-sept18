import React, { Component } from 'react';

class Product extends Component {
    render() {
        const product = this.props.product;
        return (
            <div>
                <h4>{product.name}</h4>
                <p>{product.price}</p>
            </div>
        );
    }
}

export default Product;