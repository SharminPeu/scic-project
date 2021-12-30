import React, { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://sheltered-bayou-06748.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setIsLoading(false);
      });
  }, [orders]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, want to delete this order?");
    if (proceed) {
      const url = `https://sheltered-bayou-06748.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Order Deleted Successfully");
          const remainingOrder = orders.filter((order) => order._id !== id);
          setOrders(remainingOrder);
        });
    }
  };

  const handleUpdate = (id) => {
    const proceed = window.confirm("Confirm This order?");
    if (proceed) {
      const url = `https://sheltered-bayou-06748.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert("Order Confirmed");
          }
        });
    }
  };

  if (isLoading) {
    return (
      <div className="text-center my-5">
        <Spinner className="text-center" animation="border" variant="primary" />
      </div>
    );
  }
  return (
    <div className="container">
      <h5 className="mb-3 text-color">Admin Panel</h5>
      <h2>Manage All Orders</h2>
      <hr className="mt-0 mb-5 border-bottom border-4 border-success mx-auto w-25" />
      <h4 className="mb-3">Total Orders: {orders?.length}</h4>
      {orders?.map((order) => (
        <div key={order._id} className="my-order">
          <Row>
            <Col lg={3}>
              <p>{order.name}</p>
            </Col>
            <Col lg={3}>
              <p>{order.email}</p>
            </Col>
            <Col lg={3}>
              <p>{order.packageTitle}</p>
            </Col>
            <Col lg={2}>
              {order.status === "confirm" ? (
                <p className="text-success">Confirm</p>
              ) : (
                <p className="text-danger">
                  Pending
                  <span>
                    <button
                      className="border-0 ms-2 rounded btn btn-secondary"
                      onClick={() => handleUpdate(order._id)}
                    >
                      Update
                    </button>
                  </span>
                </p>
              )}
            </Col>
            <Col lg={1}>
              <button
                className="border-0 btn btn-info rounded mt-1"
                onClick={() => handleDelete(order._id)}
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

export default ManageOrders;
