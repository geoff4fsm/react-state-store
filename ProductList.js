import React, { Component } from 'react'
const isPurchased = false ;
export default class ProductList extends Component {
    state = {
        isPurchased: false
    }

    addToQuantity = () => {

        this.setState({

            isPurchased: !this.state.isPurchased
        })

        {this.props.product.quantity = this.props.product.quantity + 1 }  
    }
    render() {

        return (
            <div onClick={this.addToQuantity}>

                <h3>item: {this.props.product.item}</h3>
                <h3>brand: {this.props.product.brand}</h3>
                <h3>units: {this.props.product.units}</h3>
                <h3>quantity: {this.props.product.quantity}</h3>
                <h3>isPurchased: {this.props.product.isPurchased}</h3>
                

            </div>
        )
    }
}
