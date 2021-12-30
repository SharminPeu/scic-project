import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import ShowProduct from "../ShowProduct/ShowProduct";

const ProductShow = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://sheltered-bayou-06748.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, [products]);
  if (isLoading) {
    return (
      <div className="text-center my-5">
        <Spinner className="text-center" animation="border" variant="primary" />
      </div>
    );
  }
  return (
    <div  className=" containeer my-5 p-4">
      <h2 className="mb-0 text-primary">Our Services</h2>
      <Container>
        <Row className="g-4 my-3">
          {products.slice(0, 6).map((product) => (
            <ShowProduct key={product._id} product={product}></ShowProduct>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductShow;
