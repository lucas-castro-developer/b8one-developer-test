import React from "react";

function AddToCartButton(props) {
  return (
    <div class="product-button-add">
      <button class="add-to-cart-button">{props.label}</button>
    </div>
  );
}

export default AddToCartButton;
