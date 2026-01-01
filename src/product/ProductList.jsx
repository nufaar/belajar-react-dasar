import { useEffect, useRef, useState } from "react";
import Product from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const loaded = useRef(false);

  useEffect(() => {
    console.info("call use effect");
    if (loaded.current === false) {
      fetch("/products.json")
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .then(() => (loaded.current = true));
    }

    return () => {
      console.info("Product list component unmounted");
    };
  });

  return (
    <>
      <h1>List Products</h1>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
}
