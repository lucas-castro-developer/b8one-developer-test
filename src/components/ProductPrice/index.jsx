import React from "react";

function ProductPrice(props) {
  return (
    <div className="product-price">
      <div className="product-list-price">R$ {props.listPrice}</div>
      <div className="product-selling-price">R$ {props.sellingPrice}</div>
    </div>
  );
}

export default ProductPrice;
