import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <MainContainer>
      <p>About</p>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  height: 100vh;
  margin: 0 auto;
  background: #ccc;
  padding: 2em 0;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
export default About;
