import React from "react";
import { Carousel } from "react-bootstrap";

import banner1 from "../../image/home banner.jpg";
import banner2 from "../../image/banner.jpg";
import banner3 from "../../image/banners.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <Carousel  interval={2000}>
        <Carousel.Item className=" item-1">
          <img className="imagee img-fluid d-block w-100" src={banner1} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="imagee img-fluid d-block w-100" src={banner2} alt="Second slide" />
       
        </Carousel.Item>

        <Carousel.Item>
          <img className="imagee img-fluid d-block w-100" src={banner3} alt="Third slide" />

        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;
