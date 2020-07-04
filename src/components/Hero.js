import React from "react";
import Slider from "react-slick";
import "./Hero.css";
import img1 from "../assets/black-iphone-7-on-brown-table-699122.jpg";
import img2 from "../assets/forced-perspective-photography-of-cars-running-on-road-below-799443.jpg";
import img3 from "../assets/iphone-technology-iphone-6-plus-apple-17663.jpg";
import img4 from "../assets/black-iphone-7-on-brown-table-699122.jpg";
import img5 from "../assets/samsung-samsung-galaxy-s6-edge-plus-edge-plus-s6-edge-47261.jpg";
import img6 from "../assets/silver-iphone-x-with-airpods-788946.jpg";

export default function Hero() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="hero">
      <Slider {...settings}>
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img6} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
        <div>
          <img src={img4} alt="" />
        </div>
        <div>
          <img src={img5} alt="" />
        </div>
      </Slider>
      );
    </div>
  );
}
