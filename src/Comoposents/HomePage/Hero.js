import React from "react";
import ImageSlider from "./ImageSlider";
import styled from "styled-components";
const Hero = () => {
  const slides = [
    { url: "./1.jpg", title: "Slide 1" },
    { url: "./2.jpg", title: "Slide 2" },
    { url: "./3.jpg", title: "Slide 3" },
    { url: "./4.jpeg", title: "Slide 4" },
    { url: "./5.jpg", title: "Slide 5" },
  ];
  return (
    <>
      <div>
        <h1>This is a title</h1>
        <Container>
          <ImageSlider slides={slides} />
        </Container>
      </div>
    </>
  );
};
const Container = styled.div`
  width: 500px;
  height: 280px;
  margin: 0 auto;
`;
export default Hero;
