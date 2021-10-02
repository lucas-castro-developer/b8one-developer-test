import React from "react";
import "./index.css";

function ProductImage(props) {
  return (
    <div className="product-images">
      <img
        src={props.src}
        alt={props.alt}
        title={props.title}
        className="product-image"
      />
    </div>
  );
}

export default ProductImage;
