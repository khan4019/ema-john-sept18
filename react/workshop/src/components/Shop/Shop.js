import React, { Component } from 'react';
import './Shop.css';
import {Link} from 'react-router-dom';

import fakeData from '../../fakeData';
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager';

import ShopItem from '../ShopItem/ShopItem';
import Cart from '../Cart/Cart';

class Shop extends Component {
    constructor(){
        super();
        this.state = {
            items: [],
            cart: [],
            cartCount:{}
        }
        this.addToCart = this.addToCart.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    componentDidMount() {
        var first10 = fakeData.slice(0,10);
        this.setState({
            items: first10
        })

        //initialize with saved cart
        var savedCart = getDatabaseCart();
        var idSelected = Object.keys(savedCart);
        var cart = idSelected.map(id=>{
            var item = fakeData.find(itm => itm.id === id);
            item.quantity = savedCart[id];
            return item;
        })

        this.setState({
            cart: cart
        })
    }

    addToCart(id){
        var item = this.state.items.find(itm => itm.id === id);
        var newCart = [...this.state.cart];
        newCart.push(item);

        // copy object
        var newCartCount = Object.assign({}, this.state.cartCount);
        var previousCount = this.state.cartCount[id] || 0;
        var newCount = previousCount + 1;
        newCartCount[id] = newCount;

        this.setState({
            cart: newCart,
            cartCount: newCartCount
        })

        addToDatabaseCart(id, newCount);
    }

    handleSearch(event){
        var searchText = event.target.value.toLowerCase();
        var matchedItems = fakeData.filter(item => item.name.toLowerCase().includes(searchText))
        var first10 = matchedItems.slice(0,10);
        this.setState({
            items: first10
        });
    }
    
    render() {
        return (
            <div>
                <div className="search-container">
                    <input className="search-input" onKeyUp={this.handleSearch} placeholder="type here to search"/>
                </div>
                <div className="shop-container">
                    <div className="items-container">
                        {
                            this.state.items.map(item=><ShopItem 
                            key={item.id} 
                            item={item}
                            addToCart={this.addToCart}
                            >
                            </ShopItem>)
                        }
                    </div>
                    <div className="cart-container">
                        <Cart cart={this.state.cart}></Cart>
                        <Link to="/review">
                            <button>Review Order</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop;