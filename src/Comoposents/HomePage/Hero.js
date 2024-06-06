import React from "react";
import ImageSlider from "./ImageSlider";
import styled from "styled-components";
import Partenariat from "./Partenariat";
const Hero = () => {
  const slides = [
    {
      url: "./1.jpg",
      title: "Slide 1",
      text: "Drawing a smile on the face of the Elderly person",
    },
    {
      url: "./2.jpg",
      title: "Slide 2",
      text: "A safe shellter  for the Elderly person",
    },
    {
      url: "./3.jpg",
      title: "Slide 3",
      text: "Helping eldery people with care",
    },
    { url: "./4.jpeg", title: "Slide 4", text: "New Activites" },
    { url: "./5.jpg", title: "Slide 5", text: "Sharing Love and Care" },
  ];
  return (
    <>
      <MainContainer>
        <ContainerSlider>
          <SliderTitle>
            Elderly people, living and aging among all generations
          </SliderTitle>
          <ImageSlider slides={slides} />
        </ContainerSlider>
        <Partenariat />
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ContainerSlider = styled.div`
  width: 700px;
  height: 380px;
  margin: 0 auto;
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    width: 350px;
    height: 350px;
    margin-top: 0.3em;
    margin-bottom: 0.3em;
  }
`;
const SliderTitle = styled.h1`
  display: flex;
  align-items: center;
  margin-bottom: 0.4em;
  justify-content: start;
  font-size: 1.5em;
  font-weight: 700;
  font-family: "Times New Roman", Times, serif;

  @media (max-width: 600px) {
    font-size: 1.3em;
    margin-bottom: 0;
    margin-top: 0.2em;
  }
`;
export default Hero;
