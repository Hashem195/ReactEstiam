import React from "react";
import styled from "styled-components";

const Text = ({ text }) => {
  return (
    <TextContainer>
      <Paragraph>{text}</Paragraph>
    </TextContainer>
  );
};

const TextContainer = styled.div`
  margin-top: 1em;
  color: White;
  text-align: center;
  width: 50%;
  @media (max-width: 600px) {
    margin-top: 0.5em;
    width: 80%;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  font-weight: 700;
  margin: 0.8em;
  text-align: start;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &:after {
    display: block;
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 14px;
    background-color: inherit;
  }
`;

export default Text;
