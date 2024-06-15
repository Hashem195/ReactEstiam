// src/Nous.js
import React from "react";
import styled, { keyframes } from "styled-components";

const Nous = () => {
  return (
    <Container>
      <Section>
        <Content>
          <Title>Notre Mission</Title>
          <Text>
            Notre mission est d'aider les personnes âgées à trouver des soins de
            santé en toute tranquillité et de passer le temps avec eux.
          </Text>
        </Content>
        <BlobContainer>
          <Blob>
            <img src="1.jpg" alt="Our mission" />
          </Blob>
        </BlobContainer>
      </Section>
      <Section>
        <SubTitle>Notre HISTOIRE</SubTitle>
        <HistoryContainer>
          <VideoContainer>
            <video controls>
              <source src="23.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </VideoContainer>
          <HistoryText>
            <p>
              Voici notre histoire. Nous avons commencé notre voyage avec une
              mission simple: aider les personnes âgées à obtenir les soins dont
              elles ont besoin. Au fil des ans, nous avons touché de nombreuses
              vies et continuons à nous engager envers notre communauté.
            </p>
          </HistoryText>
        </HistoryContainer>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  background: linear-gradient(
    to bottom,
    #6e6e6e,
    #000000,
    #ccc
  ); /* Gradient colors */
  padding: 0 20px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  &:first-of-type {
    min-height: 100vh;
    justify-content: center;
    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0 10%;
    }
  }
`;

const Content = styled.div`
  text-align: left;
  max-width: 50%;
  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 3em;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 1.6em;
    width: 100%;
    text-align: center;
  }
`;

const Text = styled.p`
  font-size: 1.5em;
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    font-size: 1em;
    width: 100%;
    text-align: start;
  }
`;

const BlobContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 20px;
  }
`;

const BlobAnimation = keyframes`
  0%, 100% {
    border-radius: 40% 60% 70% 30% / 30% 40% 60% 70%;
  }
  50% {
    border-radius: 70% 30% 40% 60% / 60% 70% 30% 40%;
  }
`;

const Blob = styled.div`
  width: 300px;
  height: 300px;
  background: linear-gradient(to bottom, #6e6e6e, #000000, #ccc);
  position: relative;
  border-radius: 40% 60% 70% 30% / 30% 40% 60% 70%;
  animation: ${BlobAnimation} 8s infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`;

const SubTitle = styled.h2`
  font-size: 2.5em;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.6em;
  }
`;

const HistoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 80%;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const VideoContainer = styled.div`
  flex: 1;
  margin-right: 20px;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
    width: 100%;
  }

  video {
    width: 100%;
    height: auto;
  }
`;

const HistoryText = styled.div`
  flex: 1;
  color: white;
  font-size: 1.5em;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    text-align: center;
    font-size: 1em;
  }
`;

export default Nous;
