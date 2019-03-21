import React from "react";
import ReactDOM from "react-dom";
import "./styles/cart.css";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.i = 0;
  }

  addToCart(){
    this.i +=  1;
    if (this.i  >  this.props.stock) {
      alert("There are too many "+ this.props.name+" in your cart!")
      this.i -= 1;
    } else {
      alert("There are " + this.i + " " + this.props.name+" in your cart!")
    }
  }

  render() {
    return (
        <div className="page-content">
        <div class="ui cards">
        <div class="card">
          <div class="content">
            <div class="header">{this.props.name}</div>
              <div class="description">
                Price: ${this.props.price}
              </div>
            </div>
          <div class="ui bottom attached button" onClick={()=>this.addToCart()}>
        <i class="add icon"></i>
        Add to Cart
      </div>
    </div>
</div>
        </div>
    );
  }

}

export default Product;
