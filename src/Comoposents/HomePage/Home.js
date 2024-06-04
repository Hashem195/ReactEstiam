import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
const Home = () => {
  return (
    <Bigdiv>
      <Hero />
    </Bigdiv>
  );
};

const Bigdiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  background: #cccccc;
`;

export default Home;
