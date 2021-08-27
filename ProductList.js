import React, { Component } from 'react'

export default class ProductList extends Component {
    state = {
        inShoppingCart: false
    }

    toggleCart = () => {
        // update inShoppingCart to switch from true to false
        this.setState({
            // !means replace value with opposite
            inShoppingCart: !this.state.inShoppingCart
        })
    }
    render() {
        console.log("we are inside ProductList and this is our props", this.props)
        return (
            <div onClick={this.toggleCart}>
            { // Ternary Operator - if else statements
            //  ? means if condition met => then do this
            // : means else => then do this 
            // the purpose of ternary operator is to create simple quick IF/ElSE statements
            }           
             {this.props.product.name} 
             {this.props.product.price} 
             {this.state.inShoppingCart ? <span>is in shopping cart</span>:""}
            </div>
        )
    }
}
