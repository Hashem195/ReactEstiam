// About.jsx
import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframe animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Styled components with animations
const AboutContainer = styled.div`
  background-color: #ccc;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Section = styled.div`
  width: 100%;
  max-width: 800px;
  text-align: center;
  margin: 20px 0;
  animation: ${slideIn} 1s ease-in-out;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
  animation: ${slideIn} 1s ease-in-out;
`;

const Subtitle = styled.h2`
  font-size: 2em;
  margin-bottom: 15px;
  color: #444;
  animation: ${slideIn} 1s ease-in-out;
`;

const Text = styled.p`
  font-size: 1.2em;
  color: #555;
  line-height: 1.6;
  animation: ${slideIn} 1s ease-in-out;
`;

const TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  animation: ${slideIn} 1s ease-in-out;
`;

const TeamMemberName = styled.h3`
  font-size: 1.5em;
  margin: 10px 0;
  color: #333;
  animation: ${slideIn} 1s ease-in-out;
`;

const TeamMemberRole = styled.p`
  font-size: 1.2em;
  color: #777;
  animation: ${slideIn} 1s ease-in-out;
`;

const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const About = () => {
  return (
    <AboutContainer>
      <Section>
        <Title>About Us</Title>
        <Text>
          Welcome to our website! We are dedicated to providing support and
          assistance to elderly people in our community. Our mission is to
          improve the quality of life for seniors by offering various services
          and resources tailored to their needs.
        </Text>
      </Section>

      <Section>
        <Subtitle>Our Mission</Subtitle>
        <Text>
          Our mission is to empower elderly individuals to live fulfilling and
          independent lives by providing them with the necessary support and
          resources. We strive to create a caring community where seniors feel
          valued and respected.
        </Text>
      </Section>

      <Section>
        <Subtitle>Our Vision</Subtitle>
        <Text>
          We envision a world where elderly people are not only cared for but
          also celebrated for their contributions to society. Our goal is to
          foster an environment where seniors can thrive, stay active, and
          remain connected with their communities.
        </Text>
      </Section>

      <Section>
        <Subtitle>Meet Our Team</Subtitle>
        <TeamContainer>
          <TeamMember>
            <TeamMemberName>Hashem Hawarnah</TeamMemberName>
            <TeamMemberRole>Founder & CEO</TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberName>Matthis Gaucher</TeamMemberName>
            <TeamMemberRole>Program Coordinator</TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberName>Karim Boufella</TeamMemberName>
            <TeamMemberRole>Volunteer Coordinator</TeamMemberRole>
          </TeamMember>
        </TeamContainer>
      </Section>
    </AboutContainer>
  );
};

export default About;
