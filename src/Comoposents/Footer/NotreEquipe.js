// src/components/NotreEquipe.js

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const teamMembers = [
  {
    name: "Hashem",
    title: "Developer Full Stack",
    img: "/Equipe/177.png",
  },
  { name: "Guévork DJALADIAN", title: "Le Boss", img: "/Equipe/160.jpeg" },
  {
    name: "Karim",
    title: "Developer Full Stack",
    img: "Equipe/karim.jpeg",
  },
  {
    name: "Matthis",
    title: "Developer Full Stack",
    img: "Equipe/171.jpeg",
  },
  // Add more members as needed
];

const Container = styled.div`
  min-height: 100vh;
  background: #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 2em;
  color: #333;
`;

const TeamSlider = styled.div`
  width: 80%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TeamCard = styled.div`
  background: #fff;
  padding: 10px;
  margin: 40px;
  position: relative;
  max-width: 350px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const CardContent = styled.div`
  text-align: center;
  padding: 10px;
`;

const CardTitle = styled.h3`
  margin: 10px 0;
  font-size: 1.2em;
  color: #333;
`;

const CardSubtitle = styled.p`
  color: #666;
  margin: 0;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: transform 0.2s;
    color: #ccc;
  }
`;

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Arrow
      className={className}
      style={{ ...style, right: "-20px" }}
      onClick={onClick}
    >
      &gt;
    </Arrow>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Arrow
      className={className}
      style={{
        ...style,
        left: "-20px",
      }}
      onClick={onClick}
    >
      &lt;
    </Arrow>
  );
};

const NotreEquipe = () => {
  const settings = {
    dots: true,
    infinite: true,

    // Add more settings as needed
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,

    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Title>Notre Equipe</Title>
      <TeamSlider>
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <TeamCard key={index}>
              <CardImage>
                <img src={member.img} alt={member.name} />
              </CardImage>
              <CardContent>
                <CardTitle>{member.name}</CardTitle>
                <CardSubtitle>{member.title}</CardSubtitle>
              </CardContent>
            </TeamCard>
          ))}
        </Slider>
      </TeamSlider>
    </Container>
  );
};

export default NotreEquipe;
