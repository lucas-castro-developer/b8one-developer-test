import React from "react";
import "./index.css";

function AddToCartButton(props) {
  return (
    <div className="product-button-add">
      <button className="add-to-cart-button">{props.label}</button>
    </div>
  );
}

export default AddToCartButton;
