import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Product = ({ product }) => {
  // Note: this id should come from api
  // const product = { id: 1 };
  // console.log("item",product)
  // const [addBtn, setAddBtn] = useState();
  const { handleDeleteCartItem, addItemToCart,updateCount } = useContext(CartContext);
  
  const handleaddToCart = (id) => {
    addItemToCart({ productId: id, count: 1 });
    // setHideAddBtn(true);
  };
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{product.name}</h3>
      <h6 data-cy="product-description">{product.description}</h6>
      <button
        data-cy="product-add-item-to-cart-button"
        onClick={() => handleaddToCart(product.id)}
      >
        Add To Cart
      </button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={()=>updateCount(product.id, (product.count+1))}>+</button>
        <span data-cy="product-count">
          {
            // product.count
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={()=>updateCount(product.id, (product.count-1))}>-</button>
        <button
          data-cy="product-remove-cart-item-button"
          onClick={() => handleDeleteCartItem(product.id)}
        >
          Remove From Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
