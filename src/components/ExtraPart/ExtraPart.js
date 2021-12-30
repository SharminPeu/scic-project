import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../image/original.png";
import img2 from "../../image/offer.png";
import img3 from "../../image/cleanup.png";
import './ExtraPart.css';

const ExtraPart = () => {
  return (
    <div className="container">
      <h2 className="text-warning text-center">You Will Get Here</h2>
      <div className=" p-5">
        <Container>
          <Row className="g-4 py-3  text-primary">
        
            <Col md={4}>
              <div className="d-flex justify-content-center align-items-center border_card">
                <img
                  className="bg-primary rounded-3 p-3 me-3"
                  src={img1}
                  alt=""
                />
                <div>
                  <h2>100%</h2>
                  <h5>Genuine Product</h5>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="d-flex justify-content-center align-items-center border_card ">
                <img
                  className="bg-primary rounded-3 p-3 me-3"
                  src={img2}
                  alt=""
                />
                <div>
                  <h2>Provide</h2>
                  <h5>Best Discount</h5>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="d-flex justify-content-center align-items-center border_card">
                <img
                  className="bg-primary rounded-3 p-3 me-3"
                  src={img3}
                  alt=""
                />
                <div>
                  <h2>Best</h2>
                  <h5>Sale Service</h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ExtraPart;
