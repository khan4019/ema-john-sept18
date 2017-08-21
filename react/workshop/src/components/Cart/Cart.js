import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
    constructor(){
        super();
        this.price = 0;
        this.shipping = 0;
        this.beforeTax = 0;
        this.tax = 0;
        this.grandTotal = 0;
    }
    calculateCost(){
        const totalPrice = this.props.cart.reduce((sum, item)=>{
            var quantity= item.quantity || 0;
            return sum + item.price*quantity;
        }, 0)
        
        this.price = this.roundTwoDecimal(totalPrice);

        const shipping = this.props.cart.reduce((sum, item) => sum + item.shipping, 0)
        this.shipping = this.roundTwoDecimal(shipping);
        this.beforeTax = this.roundTwoDecimal(this.shipping + this.price);
        this.tax  = this.roundTwoDecimal(this.beforeTax* 0.07);
        this.grandTotal =  this.roundTwoDecimal(this.beforeTax + this.tax);
    }

    roundTwoDecimal(number){
        return Math.round(number*100)/100;
    }
    render() {
        const cart = this.props.cart;
        this.calculateCost();
        return (
            <div>
                <h3>Order Summary</h3>
                <p>Item ordering: {cart.length}</p>
                <table>
                    <tbody>
                        <tr>
                            <td>Items:</td>
                            <td>{this.price}</td>
                        </tr>
                        <tr>
                            <td>Shipping & Handling:</td>
                            <td>{this.shipping}</td>
                        </tr>
                        <tr>
                            <td>Total before tax:</td>
                            <td>{this.beforeTax}</td>
                        </tr>
                        <tr>
                            <td>Estimated tax:</td>
                            <td>{this.tax}</td>
                        </tr>
                        <tr className="total-row">
                            <td>Order Total:</td>
                            <td>{this.grandTotal}</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        );
    }
}

export default Cart;