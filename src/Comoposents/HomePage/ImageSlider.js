import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import styled from "styled-components";
import Text from "./Text";
const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const currentSlide = slides[currentIndex];
  return (
    <SliderStyle>
      <div>
        <FaArrowLeft
          onClick={prevSlide}
          style={{ cursor: "pointer", marginRight: "0.5em" }}
        />
      </div>

      <Sd style={{ backgroundImage: `url(${currentSlide.url})` }}></Sd>
      <div>
        <FaArrowRight
          onClick={nextSlide}
          style={{ cursor: "pointer", marginLeft: "0.5em" }}
        />
      </div>
      <Text text={currentSlide.text} />
    </SliderStyle>
  );
};

const Sd = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  border-radius: 10px;
  background-position: center;

  @media (max-width: 600px) {
    width: 65%;
    height: 65%;
    display: flex;
    align-items: start;
    justify-content: start;
  }
`;
const SliderStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-top: 1em;
  }
`;
export default ImageSlider;
