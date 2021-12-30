import React from "react";
import { Card, Col } from "react-bootstrap";


import { useHistory } from "react-router-dom";
import "./ShowProduct.css";

const ShowProduct = ({ product }) => {
  const { _id, name, brand, img, price, description } = product;
  const history = useHistory();
  const handleBooking = (id) => {
    history.push(`/product/${id}`);
  };
  return (
    <Col md={6} lg={4}>
      <Card className="card p-1 border-0">
        <Card.Img className="card-img mx-auto img-fluid image" variant="top" src={img} />
        <Card.Body>
          <div className="d-flex mb-3 justify-content-between  align-items-center">
            <Card.Title className="fw-bold mb-0">{name}</Card.Title>
            <Card.Text>({brand})</Card.Text>
          </div>
          <h4 className="text-start">
            Price: <span className="text-danger">{price}</span>{" "}
          </h4>
          <Card.Text className="text-start">
            {description.slice(0, 80)}.....
          </Card.Text>
          <button
            onClick={() => handleBooking(_id)}
            className="btn btn-info"
          >
            Buy Now
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ShowProduct;
