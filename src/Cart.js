import React from "react";
import ReactDOM from "react-dom";
import "./styles/cart.css";
import ProductData from "./Data"
import Product from "./Product"

class Cart extends React.Component {

  render() {
    return <div className="page-content"> {ProductData.products.map(product=> <Product name= {product.name} price= {product.cost} />)} </div>
  }

}

export default Cart;
