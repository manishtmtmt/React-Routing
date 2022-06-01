import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/data/${id}`)
        .then((r) => r.json())
        .then((d) => setProduct(d));
    }
  }, [id]);

  return <div>
      <img src={product.image} />
      <h2>{product.name}</h2>
      <p>Rs.{product.price}</p>
  </div>;
};

export default Product;
