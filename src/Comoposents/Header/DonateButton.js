import React from "react";
import styled from "styled-components";

const DonateButton = ({ onClick }) => {
  return <Button onClick={onClick}>Un Don?</Button>;
};
const Button = styled.button`
  background-color: #6e6e6e;
  border: none;
  font-size: 1.2em;
  padding: 0.2em;
  font-weight: bold;
  border-radius: 0.2em;
  box-shadow: 0 0 5px #bcfd4c;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #bcfd4c;
    color: black;
    font-weight: bold;
    transform: scale(1.2);
    box-shadow: 0 0 10px black;
    border-radius: 0.2em;
  }
  @media (max-width: 600px) {
    font-size: 0.8em;
  }
`;
export default DonateButton;
