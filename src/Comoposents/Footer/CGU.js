// src/CGU.js
import React from "react";
import styled from "styled-components";

const CGUContainer = styled.div`
  background-color: #ccc;
  padding: 20px;
  line-height: 1.6;
  color: #333;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  color: black;
  line-height: 1.2;
  &::after {
    content: "";
    position: absolute;

    display: block;
    width: 550px;
    height: 3px;
    margin: 10px 0;
    background-color: #bcfd4c;
  }

  @media (max-width: 600px) {
    font-size: 1.2em;
    &::after {
      width: 300px;
    }
  }

  @media (max-width: 400px) {
    font-size: 1.2em;

    &::after {
      width: 300px;
    }
  }
`;

const SectionTitle = styled.h2`
  color: black;
  @media (max-width: 600px) {
    font-size: 1.2em;
  }

  @media (max-width: 400px) {
    font-size: 1em;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
`;

const CGU = () => {
  return (
    <CGUContainer>
      <Title>Conditions Générales d'Utilisation</Title>
      <section>
        <SectionTitle>1. Introduction</SectionTitle>
        <Paragraph>
          Bienvenue sur elderly.eu. En utilisant ce site, vous acceptez les
          présentes conditions générales d'utilisation.
        </Paragraph>
      </section>
      <section>
        <SectionTitle>2. Utilisation du site</SectionTitle>
        <Paragraph>
          Le site elderly.eu est destiné à fournir des informations et des
          services pour les personnes âgées et leurs aidants.
        </Paragraph>
      </section>
      <section>
        <SectionTitle>3. Propriété intellectuelle</SectionTitle>
        <Paragraph>
          Tout le contenu du site elderly.eu, y compris les textes, graphiques,
          logos, et images, est la propriété de elderly.eu ou de ses
          contributeurs.
        </Paragraph>
      </section>
      <section>
        <SectionTitle>4. Limitation de responsabilité</SectionTitle>
        <Paragraph>
          Elderly.eu ne pourra être tenu responsable des dommages directs ou
          indirects résultant de l'utilisation du site.
        </Paragraph>
      </section>
      <section>
        <SectionTitle>5. Modification des CGU</SectionTitle>
        <Paragraph>
          Elderly.eu se réserve le droit de modifier les présentes conditions
          générales d'utilisation à tout moment.
        </Paragraph>
      </section>
      <section>
        <SectionTitle>6. Contact</SectionTitle>
        <Paragraph>
          Pour toute question concernant les présentes CGU, veuillez nous
          contacter à contact@elderly.eu.
        </Paragraph>
      </section>
    </CGUContainer>
  );
};

export default CGU;
