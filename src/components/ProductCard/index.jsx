import React from "react";
import "./index.css";

import ProductImage from "../ProductImage";
import ProductName from "../ProductName";
import ProductPrice from "../ProductPrice";
import ProductInstallments from "../ProductInstallments";
import AddToCartButton from "../AddToCartButton";

function ProductCard(props) {
  return (
    <div className="product-card">
      <ProductImage
        src={props.item.imageSrc}
        alt="Televisão"
        title="Televisão"
      />
      <ProductName name={props.item.productName} />
      <ProductPrice
        listPrice={props.item?.productPrice?.listPrice}
        sellingPrice={props.item?.productPrice?.sellingPrice}
      />
      <ProductInstallments
        installmentsTime={props.item?.productInstallments?.numberOfInstallments}
        installmentsTimePrice={
          props.item?.productInstallments?.installmentsPrice
        }
      />
      <AddToCartButton label="Adicionar" />
    </div>
  );
}

export default ProductCard;
