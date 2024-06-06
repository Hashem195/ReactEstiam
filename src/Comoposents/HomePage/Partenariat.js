import React from "react";
import styled from "styled-components";

const partners = [
  { url: "./partner1.jpg", link: "https://partner1.com" },
  { url: "./partner2.jpg", link: "https://partner2.com" },
  { url: "./partner3.png", link: "https://partner3.com" },
  { url: "./partner4.jpg", link: "https://partner4.com" },
  { url: "./partner5.png", link: "https://partner5.com" },
  { url: "./partner6.png", link: "https://partner6.com" },
];

const Partenariat = () => {
  return (
    <GridContainer>
      {partners.map((partner, index) => (
        <GridItem
          key={index}
          href={partner.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={partner.url} alt={`Partner ${index + 1}`} />
        </GridItem>
      ))}
    </GridContainer>
  );
};

const GridContainer = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  padding: 2em;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    width: 50%;
  }

  @media (max-width: 400px) {
    width: 40%;
  }
`;

const GridItem = styled.a`
  display: block;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default Partenariat;
