import { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  function handleClick() {
    console.info("Handle click");
    setLoad(true);
  }

  useEffect(() => {
    console.info("call use effect with []");
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/products.json");
      const data = await response.json();
      setProducts(data);
    }

    console.info("Load Products");
    if (load) {
      fetchProducts();
    }

    return () => {
      console.info("Product list component unmounted");
    };
  }, [load]);

  return (
    <>
      <h1>List Products</h1>
      <button onClick={handleClick}>Load Product</button>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
}
