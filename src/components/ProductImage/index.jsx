import React from "react";
import "./index.css";

import WishListButton from "../WishListButton";

function ProductImage(props) {
  return (
    <div className="product-images">
      <img
        src={props.src}
        alt={props.alt}
        title={props.title}
        className="product-image"
      />
      <WishListButton productId={props.productId} />
    </div>
  );
}

export default ProductImage;
