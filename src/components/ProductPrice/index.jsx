import React from "react";
import "./index.css";

import { formatCurrencyValue } from "../../GlobalFunctions";

function ProductPrice(props) {
  return (
    <div className="product-price">
      <div className="product-list-price">{formatCurrencyValue(props.listPrice)}</div>
      <div className="product-selling-price">{formatCurrencyValue(props.sellingPrice)}</div>
    </div>
  );
}

export default ProductPrice;
