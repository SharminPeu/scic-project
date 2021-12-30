import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Shared/Footer/Footer";
import Menubar from "../Shared/Menubar/Menubar";
import pic from '../../image/banner3.jpg'


const ContactUs = () => {
  return (
    <div className="containeer">
      <Menubar></Menubar>
      <Container>
        <div className="row g-2 my-5 text-start">
          <div className="col-md-4 col-12">
            <h5 className="text-primary fw-bold">Information</h5>
            <p className=" mb-0">Contact Info.</p>
            <h3>Connect With Us</h3>

            <p className="fw-bold">Information</p>
            <p>
              <i className="text-color fas fa-phone-alt"></i> (+0099345213)
            </p>
            <p>
              <i className="text-color fas fa-mobile-alt"></i> (+8801776546675)
            </p>
            <p>
              <i className="text-color far fa-envelope"></i>{" "}
              <a href="hasibulhasan294@gmail.com">handyVai@gmail.com</a>
            </p>
          </div>
          <div className="col-md-8 col-12">

            <div className="row">
              <h5 className="text-primary fw-bold">About Us</h5>
              <div className="col-md-4 col-12">
                <img className="img-fluid mt-5" src={pic}alt="" /></div>


              <div className="col-md-8 col-12 text-start">
                <p className="mt-4 fs-4 fw-bold text-center">From 2011 We started our journey</p>
                <small className="mt-3 ">
                  HandyVai started their journey almost 10years ago.Their services collection  are extremely popular across the market and have earned a multitude of  awards throughout the past decade. They provide best services and offer huge sale in different time,You will get Different services In One House.User Frienly environment here..

                </small>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default ContactUs;
