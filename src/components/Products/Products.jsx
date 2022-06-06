import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Product from "./Product/Product";
import styles from "./Products.module.css";
const Products = () => {
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    getData();
  }, []);
  const getData = async () =>{
    try{
      let res = await axios.get("http://localhost:8080/products");
      // console.log("data",res.data);
      setProducts(res.data)
    }catch(err){
      console.log(err);
    }
  }
  // console.log(products);
  return (
    <div >
      {/* Code here */}
      <h1>Products</h1>
      <div className={styles.productsDiv}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
