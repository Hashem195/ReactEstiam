import React from "react";
import Logo from "../Header/Logo";
import Newsletter from "../Newsletter/Newsletter";
import styled, { keyframes } from "styled-components";

// the links are not done yet
// only AUTRES ARE FINISHED
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollToFAQ = () => {
    const faqSection = document.getElementById("faq-section");
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Container>
      <ShapeDivider className="custom-shape-divider-top-1717455096">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </ShapeDivider>
      <Logo />
      <Bigdiv>
        <Section>
          <SectionHeader>
            NOUS CONNAITRE
            <Underline />
          </SectionHeader>
          <SectionItem>
            <Linker href="/Qui-sommes-nous">Qui sommes-nous ?</Linker>

            <Linker href="/lequipe">Notre équipe</Linker>
            <Linker
              href="/"
              onClick={scrollToTop}
              style={{ cursor: "pointer" }}
            >
              Partenaires
            </Linker>
          </SectionItem>
        </Section>
        <Section>
          <SectionHeader>
            LIENS UTILES
            <Underline />
          </SectionHeader>
          <SectionItem>
            <Linker
              href="/faq"
              onClick={scrollToFAQ}
              style={{ cursor: "pointer" }}
            >
              FAQ
            </Linker>
            <Linker href="/CGU">CGU</Linker>
            <Linker href="/MentionLegal">Mention Legal</Linker>
          </SectionItem>
        </Section>
        <Section>
          <SectionHeader>
            FONCTIONNEMENT
            <Underline />
          </SectionHeader>
          <SectionItem>
            <Linker href="/">Accueil</Linker>
            <li>Services</li>
            <li>Santé</li>
            <li>Garde a domicile</li>
          </SectionItem>
        </Section>
        <Section>
          <SectionHeader>
            AUTRES
            <Underline />
          </SectionHeader>
          <SectionItem>
            <Newsletter />
            <Linker href="https://www.linkedin.com" target="_blank">
              Linkedin
            </Linker>
            <Linker href="https://twitter.com" target="_blank">
              Twitter
            </Linker>
          </SectionItem>
        </Section>
      </Bigdiv>
      <CopyRight>Copyright © 2024. All rights reserved.</CopyRight>
    </Container>
  );
};

export default Footer;

const Section = styled.section`
  flex: 1;
  display: flex;
  margin: 0 4em;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 600px) {
    align-items: center;
    justify-content: center;
    margin: 0 1em;
    margin-bottom: 1em;
  }
`;

const Linker = styled.a`
  color: black;
  text-decoration: none;
  margin-bottom: 0.5em;
  &:hover {
    font-weight: bold;
  }
`;

const SectionItem = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 1em;
  font-weight: 400;
  margin-bottom: 0.5em;
  list-style: none;
  @media (max-width: 600px) {
    font-size: 0.8em;
    margin-bottom: 0.2em;
    text-align: center;
    justify-content: center;
    align-items: center;
    list-style: none;
  }
`;
//HERE problem

const SectionHeader = styled.h3`
  display: flex;
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 0.8em;
  text-align: start;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative; // Needed to position the underline absolutely
  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: -10px; // Aligns the underline with the bottom of the h3
    left: 0;
    width: 100%; // Cover the full width of the h3
    height: 2px; // Thickness of the underline
    background-color: inherit; // Inherits the text color
  }
  @media (max-width: 600px) {
    font-size: 1em;
    margin-bottom: 0.2em;
    text-align: center;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin-bottom: 0.6em;
  }
`;

const ShapeDivider = styled.div`
  position: relative;
  top: -1px; /* Adjust to remove any remaining thin line */
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);

  svg {
    position: relative;
    display: block;
    width: 100%; /* Ensure SVG covers entire width */
    height: 109px;
    transform: rotateY(180deg);

    .shape-fill {
      fill: #ccc; /* Adjust wave color here */
    }
  }
`;

const Bigdiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: auto;
  padding: 1em;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const CopyRight = styled.p`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 1em;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  width: 100%;
  background: #6e6e6e;
  color: black;
  font-weight: bold;
  font-size: 0.8em;
  overflow: hidden; /* Ensure no overflow creates unwanted lines */
  margin-top: -1px; /* Adjust to remove any remaining thin line */
`;
//the slideunerline animation.
const slideUnderline = keyframes`
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  50% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-10px);
    opacity: 0;
  }
`;

//underline animation
const Underline = styled.span`
  position: absolute;
  bottom: -6px; // Adjust based on your needs
  left: 0;
  width: 100%; // Cover the full width of the parent
  height: 2px; // Thickness of the underline
  background-color: #bcfd4c; // Use the text color
  animation: ${slideUnderline} 3s infinite alternate; // Apply the animation
`;
