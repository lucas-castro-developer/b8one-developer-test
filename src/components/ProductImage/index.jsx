import React from "react";

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
