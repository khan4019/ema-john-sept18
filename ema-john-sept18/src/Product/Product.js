import React, { Component } from 'react';
import './Product.css'
import StarRatingComponent from 'react-star-rating-component';

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
                    
                    <StarRatingComponent 
                        name="rate1" 
                        emptyStarColor="lightgray"
                        value={product.rating}
                        />

                    <br/>
                    <button onClick={() => this.props.addToCart(product)}>Add to Cart</button>
                </div>
                
            </div>
        );
    }
}

export default Product;