import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <LogoContainer>
      <HomeLink href="/">
        <img src="1_logo.png" alt="logo" />
      </HomeLink>
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 150px;
    height: auto;
  }

  @media (max-width: 600px) {
    img {
      width: 100px;
      height: auto;
    }
  }
`;
const HomeLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Logo;
