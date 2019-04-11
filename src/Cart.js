import React from "react";
import ReactDOM from "react-dom";
import "./styles/cart.css";
import ProductData from "./Data"
import Product from "./Product"
import Receipt from "./Receipt"

class Cart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {cartItems : [], totalprice: 0};
  }

  handleAddToCart(name, price) {    
    let items = [...this.state.cartItems]   
    let found = false   
    for (let i = 0; i < items.length; i++) {      
      if (items[i].name === name) {        
        items[i].count += 1       
        found = true     
      }   
    }   
    if(!found) {      
      items.push({name: name, price: price, count: 1})   
    }   
      this.setState({cartItems: items})  
  }   
  
  handleRemoveFromCart(name) {     
    this.setState({cartItems: this.state.cartItems.filter((item) => item.name !== name)})  
  }

  render() {
    return (<div className="page-content"> {ProductData.products.map(product=>
      <Product name= {product.name} 
               price= {product.cost} 
               addToCart={(name, price) => this.handleAddToCart(name, price)} 
               removeFromCart={(name) => this.handleRemoveFromCart(name)}/>)}
      <Receipt items={this.state.cartItems}/></div>
  )}

}

export default Cart;
