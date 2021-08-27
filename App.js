import React, { Component } from 'react';
import products from './data.js';
import ProductList from './ProductList.js'
import './App.css';

const isPurchased = false ;
export default class App extends Component {

  state = {
    products: products,
    item: '',
    brand: '',
    units: '',
    quantity: 0,
  };


  handleChange = (event) => {

    console.log("Below is our event.target")

    this.setState({

      [event.target.id]: event.target.value
    })
  }


  handleSubmit = (event) => {

    event.preventDefault()
    console.log("event", event)
    const newItem = {
      item: this.state.item,
      brand: this.state.brand,
      units: this.state.units,
      quantity: this.state.quantity
    }
    

    this.setState({
      item: '',
      brand: '',
      units: '',
      quantity: 0,
      products: [newItem, ...this.state.products],
    })
  }

  render() {

    return (
      <div>
        <h1>Dottie Shopping!</h1>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="item">Item: </label>
          <input type="text" value={this.state.item} onChange={this.handleChange} id="item" />
          <br />
          <label htmlFor="brand">Brand: </label>
          <input type="text" value={this.state.brand} onChange={this.handleChange} id="brand" />
          <br />
          <label htmlFor="units">Units: </label>
          <input type="text" value={this.state.units} onChange={this.handleChange} id="units" />
          <br />
          <label htmlFor="quantity">Quantity: </label>
          <input type="text" value={this.state.quantity} onChange={this.handleChange} id="quantity" />
          <br />
          <input type="submit" />
        </form>

        <div className="preview">
          <h2>Preview our new item</h2>
          <h3>{this.state.item}</h3>
          <h4>{this.state.brand}</h4>
          <h5>{this.state.units}</h5>
          <h6>{this.state.quantity}</h6>
        </div>

        <ul className = 'ul'>
          {
            this.state.products.map((product, index) => {
              return (
                <ProductList key={index} product={product} />

              );
            })}
        </ul>
      </div>
    );
  }
}




