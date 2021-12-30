import axios from "axios";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://sheltered-bayou-06748.herokuapp.com/products", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("New Scooty Added Successfully");
          reset();
        }
      });
  };
  return (
    <div className="container">
      <h5 className="mb-3 text-color">Admin Panel</h5>
      <h2 className="mb-5">Add A New Product</h2>
      <Row className="justify-content-center">
        <Col lg={8}>
          <form className="book-form" onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} placeholder="Watch Name" required />
            <input
              {...register("brand")}
              placeholder="Brand"
              required
            />
            <textarea
              {...register("description")}
              placeholder="Description"
              required
            />
            <input {...register("price")} placeholder="price" required />

            <input {...register("img")} placeholder="Img Url" required />
            <input
              className="btn-info border-0 text-white py-2 rounded-pill"
              type="submit"
            />
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default AddProduct;
