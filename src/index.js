import React from "react";
import ReactDOM from "react-dom";

import "./styles/styles.css";

import Cart from "./Cart";
import ProductData from "./Data";

// Add the Cart component to the `#root` element below!
const rootElement = document.getElementById("root");
ReactDOM.render(<Cart name= {"apple"} price= {2} />, rootElement);
