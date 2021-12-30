import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Menubar from "../Shared/Menubar/Menubar";
 import Footer from "../Shared/Footer/Footer";
import ShowProduct from "../ShowProduct/ShowProduct";
//  import ShowProduct from "../ShowProduct/ShowProduct";

const ProductsAll = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch("https://sheltered-bayou-06748.herokuapp.com/products")
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
      <Menubar></Menubar>
      <div className="my-5 p-4">
        <h2 className="mb-0">Our All Services</h2>
        <Container>
          <Row className="g-4 my-3">
            {products.map((product) => (
              <ShowProduct key={product._id} product={product}></ShowProduct>
            ))}
          </Row>
        </Container>
      </div>
      <Footer></Footer>
            
        </div>
    );
};

export default ProductsAll;
