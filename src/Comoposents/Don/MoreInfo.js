import React from "react";
import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
const MoreInfo = () => {
  return (
    <Info>
      <div>
        <h2>Savoir plus </h2>
        <p>
          Pour en savoir plus sur nos services et comment votre contribution
          peut faire une différence, veuillez visiter notre site web ou nous
          contacter directement. Ensemble, nous pouvons offrir un avenir
          meilleur et plus serein à nos aînés. Merci pour votre soutien et votre
          générosité.
        </p>
      </div>
      <h3>Social media</h3>

      <Social>
        <StyledFaFacebook />
        <StyledFiInstagram />
        <StyledBsTwitterX />
        <StyledFaLinkedin />
      </Social>
      <div>
        <h3>Nous contacter</h3>
        <p>
          Contactez nous sur l'adresse suivante :{" "}
          <a href="/contact">support-elderly.com</a>
        </p>
      </div>
    </Info>
  );
};
const StyledFaLinkedin = styled(FaLinkedin)`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;
const StyledBsTwitterX = styled(BsTwitterX)`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;
const StyledFaFacebook = styled(FaFacebook)`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;
const StyledFiInstagram = styled(FiInstagram)`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;
const Social = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  &:hover {
  }
  @media (max-width: 600px) {
    display: flex;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  margin-left: 20px;
  background-color: #f1f1f1;
  border-radius: 10px;
  h3 {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
  }
  a {
    color: black;
    font-size: 14px;
    text-decoration: none;
    margin-bottom: 0.5em;
    &:hover {
      font-weight: bold;
    }
  }

  @media (max-width: 600px) {
    width: 75%;
    margin-left: 0;
    margin-top: 20px;
    height: auto;
  }
`;
export default MoreInfo;
