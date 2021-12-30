import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import MenuBar from "../Shared/MenuBar/MenuBar";
 import Footers from "../Shared/Footers/Footers";
import ShowProduct from "../ShowProduct/ShowProduct";
//  import ShowProduct from "../ShowProduct/ShowProduct";

const ProductsAll = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch("https://shrouded-headland-01682.herokuapp.com/products")
          .then((res) => res.json())
          .then((data) => {
            setProducts(data);
            setIsLoading(false);
          });
      }, []);
      if (isLoading) {
        return (
          <div className="text-center my-5">
            <Spinner className="text-center" animation="border" variant="primary" />
          </div>
        );
      }
    return (
        <div className="container">
      <MenuBar></MenuBar>
      <div className="my-5 p-4">
        <h2 className="mb-0">Our Watch Collections</h2>
        <Container>
          <Row className="g-4 my-3">
            {products.map((product) => (
              <ShowProduct key={product._id} product={product}></ShowProduct>
            ))}
          </Row>
        </Container>
      </div>
      <Footers></Footers>
            
        </div>
    );
};

export default ProductsAll;
