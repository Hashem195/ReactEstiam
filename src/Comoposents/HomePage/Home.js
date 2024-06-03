import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Bigdiv>
      <Leftdiv>
        <p>This is the left Home Page</p>
      </Leftdiv>

      <Rightdiv>
        <p>This is the right Home Page</p>
      </Rightdiv>
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

const Leftdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
`;

const Rightdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
`;
export default Home;
