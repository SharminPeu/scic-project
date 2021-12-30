import React from "react";
import ExtraPart from "../ExtraPart/ExtraPart";
import Header from "../Header/Header";
import ProductShow from "../ProductShow/ProductShow";
import Review from "../Review/Review";
import Footer from "../Shared/Footer/Footer";
import Menubar from "../Shared/Menubar/Menubar";


const Home = () => {
  return (
    <div>
        <Menubar></Menubar>
      <Header></Header>
      <ProductShow></ProductShow>
      <Review></Review>
      <ExtraPart></ExtraPart>
      <Footer></Footer>
    </div>
  );
};

export default Home;
