import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import img from "../image/logo/quote.png";
import Rating from "@mui/material/Rating";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://sheltered-bayou-06748.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setIsLoading(false);
      });
  }, [isLoading]);

  return (
    <div className="container my-5 py-5 bg-light">
      <h5 className="text-dark fw-light">Don’t Hear From Us Only</h5>
      <h2 className="text-primary">Customers Reviews About Us</h2>
      
      <Container>
        <Row className="g-4 py-3 my-4">
          {reviews.map((review) => (
            <Col key={review._id} className="" md={4}>
              <div className="shadow rounded-3 p-3 d-flex justify-content-center align-items-start">
                {/* <img className="me-3" src={img} alt="" /> */}
                <div>
                  <h5 className="fw-light text-start">{review.message}</h5>
                  <p className="mb-0 fst-italic text-start">
                    {review.productName}
                  </p>
                  
                  <h4 className="text-start">{review.name}</h4>
                  <h4 className="text-start">{review.email}</h4>

                  <div className="d-flex justify-content-between  align-items-center">
                    <p className="text-start text-warning">
                      <Rating
                        name="read-only"
                        value={review.rating}
                        precision={0.1}
                        readOnly
                      />
                    </p>
                    <p className="text-start">({review.rating} out of 5)</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Review;
