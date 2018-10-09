import React, { Component } from 'react';
import fakeData from '../fakeData/index';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../utility/local-storage';
import { Link } from 'react-router-dom'

class Shop extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            cart: []
        }
    }

    componentDidMount() {
        const first10 = fakeData.slice(0, 10);
        this.setState({ products: first10 });

        // 
        const storedCart = getDatabaseCart();
        const savedCart = [];
        for (let id in storedCart) {
            const product = fakeData.find(prd => prd.id === id);
            product.quantity = storedCart[id];
            savedCart.push(product);
        }
        this.setState({ cart: savedCart });
    }

    handleSearch = (event) => {
        var searchText = event.target.value.toLowerCase();
        var matched = fakeData.filter(item => item.category.toLowerCase().includes(searchText) || item.name.toLowerCase().includes(searchText));
        var first10 = matched.slice(0, 10);
        this.setState({
            items: first10
        });
    }

    handleAddToCart = (product) => {
        const newCart = [...this.state.cart, product];
        this.setState({ cart: newCart });

        const quantity = newCart
            .filter(prd => prd.id === product.id).length;

        addToDatabaseCart(product.id, quantity);
    }

    render() {
        return (
            <div className="shop">
                <div className="search-container">
                    <input type="text" className="search-input" onKeyUp={this.handleSearch} placeholder="type here to search" />
                    <Link to="/review">
                        <span className="cart-count">{this.state.cart.length}</span>
                    </Link>
                </div>
                <div className="shop-content">
                    <div className="product-container">
                        <h1>Buy whatever you want</h1>
                        {
                            this.state.products.map(prd => <Product
                                product={prd}
                                addToCart={this.handleAddToCart}
                                key={prd.id}></Product>)
                        }
                    </div>
                    <div className="cart-container">
                        <Cart cart={this.state.cart}></Cart>
                    </div>
                </div>

            </div>
        );
    }
}

export default Shop;