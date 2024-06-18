// Services.jsx
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
const ServicesContainer = styled.div`
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

const ServiceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const ServiceItem = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: 200px;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  }
  text-align: center;
  animation: ${slideIn} 1s ease-in-out;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px 10px 0 0;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5em;
  margin: 10px 0;
  color: #444;
`;

const ServiceDescription = styled.p`
  font-size: 1em;
  color: #555;
`;

const Services = () => {
  return (
    <ServicesContainer>
      <Section>
        <Title>Nos Services</Title>
        <ServiceList>
          <ServiceItem
            onClick={() => (window.location.href = "/aide-domicile")}
          >
            <ServiceImage
              src={"/Photos/aideDomicileImg.jpg"}
              alt="Aide à domicile"
            />
            <ServiceTitle>Aide à domicile</ServiceTitle>
            <ServiceDescription>
              Nous offrons une aide à domicile pour les tâches quotidiennes et
              l'assistance.
            </ServiceDescription>
          </ServiceItem>
          <ServiceItem>
            <ServiceImage
              src={"/Photos/preparationRepasImg.jpg"}
              alt="Préparation des repas"
            />
            <ServiceTitle>Préparation des repas</ServiceTitle>
            <ServiceDescription>
              Assistance dans la préparation des repas sains et nutritifs.
            </ServiceDescription>
          </ServiceItem>
          <ServiceItem>
            <ServiceImage
              src={"/Photos/nouvellesActivitesImg.jpeg"}
              alt="Nouvelles activités"
            />
            <ServiceTitle>Nouvelles activités</ServiceTitle>
            <ServiceDescription>
              Organisation de nouvelles activités et événements pour les
              seniors.
            </ServiceDescription>
          </ServiceItem>
          <ServiceItem>
            <ServiceImage
              src={"/Photos/aideTechnologieImg.jpg"}
              alt="Aide avec la technologie"
            />
            <ServiceTitle>Aide avec la technologie</ServiceTitle>
            <ServiceDescription>
              Assistance avec la technologie et l'internet pour rester connecté.
            </ServiceDescription>
          </ServiceItem>
          <ServiceItem>
            <ServiceImage
              src={"/Photos/EatHealthyImg.jpg"}
              alt="Programme Eat Healthy"
            />
            <ServiceTitle>Programme Eat Healthy</ServiceTitle>
            <ServiceDescription>
              Programme pour aider à manger des aliments sains et nutritifs.
            </ServiceDescription>
          </ServiceItem>
        </ServiceList>
      </Section>
    </ServicesContainer>
  );
};

export default Services;
