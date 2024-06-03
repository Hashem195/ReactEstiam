import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <Container>
      <Title>Header</Title>
      <Nav>
        <Nav>
          <List>
            <Link href="/">Home </Link>
          </List>
          <List>
            <Link href="/About">About</Link>
          </List>
          <List>
            <Link href="/contact">Contact</Link>
          </List>
        </Nav>
      </Nav>
    </Container>
  );
};
export default Header;

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
  text-align: center;
  color: black;

  @media (min-width: 600px) {
    font-size: 0.4em;
  }

  @media (min-width: 800px) {
    font-size: 0.4em;
  }

  @media (min-width: 1000px) {
    font-size: 1.5em;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  text-align: center;
  color: black;
  background-color: gray;

  @media (min-width: 600px) {
  }

  @media (min-width: 800px) {
  }

  @media (min-width: 1000px) {
  }
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin: 0.2em;
`;
const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`;
const Link = styled.a`
  text-decoration: none;
  color: black;
`;
