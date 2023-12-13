import React from "react";
import "./ImageSlider.css";
import image5 from "./Assets/img5.jpg";

const ImageSlider = () => {
  return (
    <div className="slider">
      <div className="img">
        <img src={image5} alt="" />
      </div>
      <div className="righttext">
        <h1>
          Popular business, marketing & web design terms Browse professional
          resources & guides
        </h1>
        <div className="btn-div">
          <button className="btn1">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
