import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideStyle = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    borderRadius: "10px",
    backgroundPosition: "center",
  };
  const sliderStyle = {
    height: "100%",
    position: "relative",
  };
  return (
    <div style={sliderStyle}>
      <div>
        <FaArrowRight />
      </div>
      <div style={slideStyle}></div>
      <div>
        <FaArrowLeft />
      </div>
    </div>
  );
};

export default ImageSlider;
