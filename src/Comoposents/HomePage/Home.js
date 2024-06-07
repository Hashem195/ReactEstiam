import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import FAQSection from "../FAQSection/FAQSection";
const Home = () => {
  return (
    <div>
      <Bigdiv>
        <Hero />
      </Bigdiv>
      <Faqdiv>
        <FAQSection />
      </Faqdiv>
    </div>
  );
};
const Faqdiv = styled.div`
  display: flex;
  background-color: #cccccc;
`;
const Bigdiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  background: #cccccc;
`;

export default Home;
