import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

const ManageProduct = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://sheltered-bayou-06748.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, want to delete this Product?"
    );
    if (proceed) {
      const url = `https://sheltered-bayou-06748.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Order Deleted Successfully");
          const remainingOrder = product.filter((item) => item._id !== id);
          setProduct(remainingOrder);
        });
    }
  };

  return (
    <div className="container">
      <h5 className="mb-3 text-color">Admin Panel</h5>
      <h2>Manage All Products</h2>
      <hr className="mt-0 mb-5 border-bottom border-4 border-success mx-auto w-25" />
      <h4 className="mb-3">Total Products: {product?.length}</h4>
      {product?.map((item) => (
        <div key={item._id} className="my-order">
          <Row>
            <Col lg={4}>
              <p>{item.name}</p>
            </Col>
            <Col lg={3}>
              <p>{item.brand}</p>
            </Col>
            <Col lg={3}>
              <p>{item.price}</p>
            </Col>
            <Col lg={2}>
              <button
                className="border-0 rounded btn btn-info"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
};

export default ManageProduct;
