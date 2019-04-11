import React from "react";

class Receipt extends React.Component {
  renderItem(item) {
    return (
      <div className="receipt-item" key={item.name}>
          <div className="receipt-text">
              {item.name} x {item.count}
          </div>
          <div className="receipt-text">
              ${item.price}
          </div>
      </div>);
  }

  calculateTotal() { 
    let total = 0
    for(let i = 0; i < this.props.items.length; i++) { 
      total += this.props.items[i].count * this.props.items[i].price
    }
    return total
  }

  render() {
    //const items = [{ name: "Apple", price: 3 }, { name: "Banana", price: 3 }];
    return (
      <div className="receipt">
        <h2 className="receipt-text">Receipt</h2>
        {this.props.items.map(this.renderItem)}
        <div className="receipt-item">
          <div className="total">Total:</div>
          <div className="total">${this.calculateTotal()}</div>
        </div>
      </div>
    );
  }
}

export default Receipt;
