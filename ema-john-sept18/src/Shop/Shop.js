import React, { Component } from 'react';
import fakeData from '../fakeData/index';

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
            <div>
                <h1>Buy whatever you want</h1>
                {
                    this.state.products.map(prd=><li key={prd.id}>{prd.name}</li>)
                }
            </div>
        );
    }
}

export default Shop;