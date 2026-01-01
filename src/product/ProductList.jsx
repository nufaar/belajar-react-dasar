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
    console.info("call use effect");
    if (load) {
      fetch("/products.json")
        .then((response) => response.json())
        .then((data) => setProducts(data));
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
