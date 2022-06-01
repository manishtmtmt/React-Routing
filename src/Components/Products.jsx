import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
//   const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      fetch(`http://localhost:8080/data`)
        .then((r) => r.json())
        .then((d) => {
          setProducts(d);
        });
    };
    fetchProducts();
  }, []);

//   const handleOnClick = (id) => {
//     if (id === 0) {
//       navigate("/products/0");
//     } else if (id === 1) {
//       navigate("/products/1");
//     } else if (id === 2) {
//       navigate("/products/2");
//     } else if (id === 3) {
//       navigate("/products/3");
//     }
//   };

  return (
    <div>
      Products
      <div>
        <table>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>More Details</th>
          </tr>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>
                <Link to={`/products/${p.id}`}>More Details</Link>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Products;
