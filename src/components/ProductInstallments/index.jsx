import React from "react";

function ProductPrice(props) {
  return (
    <div className="product-installments">
      <div>
        em até{" "}
        <span className="product-installments-info">
          {props.installmentsTime}x de R$ {props.installmentsTimePrice}
        </span>{" "}
        sem juros
      </div>
    </div>
  );
}

export default ProductPrice;
