// src/Nous.js
import React from "react";
import styled from "styled-components";

const Nous = () => {
  return (
    <Container>
      <Content>
        <Title>Notre site est en construction</Title>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(
    to bottom,
    #6e6e6e,
    #000000,
    #ccc
  ); /* Gradient colors */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3em;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export default Nous;
