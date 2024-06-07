import React from "react";
import styled from "styled-components";

const DonateButton = ({ onClick }) => {
  return <Button onClick={onClick}>Un Don?</Button>;
};
const Button = styled.button`
  background-color: #6e6e6e;
  border: none;
  font-size: 1.2em;
  padding: 0.1em;
  font-weight: bold;
  border-radius: 0.2em;
  color: white;
  &:hover {
    background-color: #bcfd4c;
    color: black;
    font-weight: bold;
    transform: scale(1.2);
    box-shadow: 0 0 10px black;
    border-radius: 0.2em;
  }
`;
export default DonateButton;
