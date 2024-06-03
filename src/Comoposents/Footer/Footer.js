import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <p>Copyright © 2024. All rights reserved.</p>
    </Container>
  );
};
export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 250px;
  width: 100%;
  background: #6e6e6e;
  color: black;
  font-weight: bold;
  font-size: 0.8em;
`;
