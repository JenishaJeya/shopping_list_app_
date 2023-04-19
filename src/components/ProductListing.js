import React from "react";
import { useEffect, useState } from "react";
import Product from "./Product";

function ProductListing(props) {
  const [productList, setProductList] = useState([]);
  let isItemInList = (name) => {
    return props.alreadyInList.filter((item) => item === name).length > 0;
  };
  useEffect(() => {
    fetch("https://mongoose-jy4x.onrender.com/products")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        setProductList(data);
    }); 
}, []);

  return (
    <div>
      {productList.map((product) => (
        <Product
          key={product.id}
          isSelected={isItemInList(product.name)}
          name={product.name}
          addToListHandler={props.addToListHandler}
        />
      ))}
    </div>
  );
}

export default ProductListing;