import React from "react";
import "./index.css";

import { formatCurrencyValue } from "../../GlobalFunctions";

function ProductPrice(props) {
  return (
    <div className="product-installments">
      <div>
        em até{" "}
        <span className="product-installments-info">
          {props.installmentsTime}x de{" "}
          {formatCurrencyValue(props.installmentsTimePrice)}
        </span>{" "}
        sem juros
      </div>
    </div>
  );
}

export default ProductPrice;
