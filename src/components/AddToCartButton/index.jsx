import React, { useState } from "react";
import "./index.css";

function AddToCartButton(props) {
  const [addedToCartProd1, setAddedToCartProd1] = useState(false);
  const [addedToCartProd2, setAddedToCartProd2] = useState(false);

  const manageProductToCart = (id) => {
    if (id === 1) {
      addedToCartProd1 ? setAddedToCartProd1(false) : setAddedToCartProd1(true);
    } else if (id === 2) {
      addedToCartProd2 ? setAddedToCartProd2(false) : setAddedToCartProd2(true);
    } else {
      console.error(
        "Ocorreu algum problema. Contate o administrador do sistema."
      );
    }
  };

  return (
    <div className="product-button-add">
      {addedToCartProd1 || addedToCartProd2 ? (
        <button
          className="product-added-to-cart"
          onClick={() => manageProductToCart(props.productId, props.status)}
        >
          {props.labelAdicionado}
        </button>
      ) : (
        <button
          className="add-to-cart-button"
          onClick={() => manageProductToCart(props.productId, props.status)}
        >
          {props.labelNaoAdicionado}
        </button>
      )}
    </div>
  );
}

export default AddToCartButton;
