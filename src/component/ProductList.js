import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  return (
    props.productList.length > 0 ?
    props.productList.map((product, i) => {
    return (
      <Product
        product={product}
        key={i}
        increamentQuantity={props.increamentQuantity}
        index={i}
        decrementQuantity={props.decrementQuantity}
        removeItem={props.removeItem}
      />
    );
  })
  : <h1>No Product exist cart</h1>
  );
}
