import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import DonateButton from "./DonateButton";
import { Link } from "react-router-dom";
// Header and logo all ready to go for now
// Need to add nav links and update the links
// Need to check responsivity for the header after adding the new links
const Header = () => {
  return (
    <Container>
      <Logo />
      <Nav>
        <List>
          <NavItem>
            <DonateDiv>
              <Link to="/donate">
                <DonateButton />
              </Link>
            </DonateDiv>
          </NavItem>
          <Divider>||</Divider>
          <NavItem>
            <StyledLink href="/">Home</StyledLink>
          </NavItem>
          <Divider>||</Divider>
          <NavItem>
            <StyledLink href="/About">About</StyledLink>
          </NavItem>
          <Divider>||</Divider>
          <NavItem>
            <StyledLink href="/Contact">Contact</StyledLink>
          </NavItem>
          <Divider>||</Divider>
          <NavItem>
            <StyledLink href="/Services">Services</StyledLink>
          </NavItem>
        </List>
      </Nav>
    </Container>
  );
};

export default Header;
const DonateDiv = styled.div``;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0 1em;
  text-align: center;
  color: black;
  border-bottom: 1px solid #6e6e6e;
  height: auto;
  background: #6e6e6e;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    padding: 1em;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 0.8em;

    justify-content: center;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin: 0 0.5em;
  font-weight: bold;
  color: white;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1.2em;
  border-radius: 0.2em;
  padding: 0.5em;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #bcfd4c;
    color: black;
    font-weight: bold;
    transform: scale(1.2);
    box-shadow: 0 0 10px black;
    border-radius: 0.2em;
  }
`;

const Divider = styled.span`
  margin: 0 0.5em;
  color: black;
  font-weight: bold;
  @media (max-width: 600px) {
    display: none;
  }
`;
