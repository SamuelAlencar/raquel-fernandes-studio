/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Carousel from "../../components/imageCarousel";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Services from "../../components/services";

export default function Home() {

  return (
    <div className="container-full p-0 m-0 justify-content flex-column h-30 " >
        <Navbar id="navbar"></Navbar>
        <Carousel id="carousel"></Carousel>
        <Services></Services>
        <Footer id="footer"></Footer>
    </div>
  );
}