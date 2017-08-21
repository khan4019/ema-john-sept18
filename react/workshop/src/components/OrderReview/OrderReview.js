import React, { Component } from 'react';
import './OrderReview.css';
import fakeData from '../../fakeData';
import {getDatabaseCart, processOrder} from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import CartItem from '../CartItem/CartItem';
import happy from '../../images/giphy.gif';

class OrderReview extends Component {
    constructor(){
        super();
        this.state= {
            cart: [],
            oderPlaced: false
        }
        this.placeOrder = this.placeOrder.bind(this);
    }
    componentDidMount() {
        var savedCart = getDatabaseCart();
        var savedIds = Object.keys(savedCart);
        var cart = savedIds.map(id => {
            var item = fakeData.find(itm => itm.id === id);
            item.quantity = savedCart[id];
            return item;
        })
        this.setState({
            cart: cart
        })
    }

    placeOrder(){
        this.setState({
            cart: [],
            oderPlaced: true
        })
        processOrder();
    }
    
    render() {
        var diplayItem = null;
        if(this.state.oderPlaced){
            diplayItem = <img alt="" src={happy}/>
        } 
        else {
            diplayItem = this.state.cart.map(item=><CartItem key={item.id} item={item}></CartItem>);
        }

        return (
            <div className="shop-container">
                <div className="items-container">
                    {
                        diplayItem
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={this.state.cart}></Cart>
                    <button onClick={this.placeOrder}>Place order</button>
                </div>
            </div>
        );
    }
}

export default OrderReview;