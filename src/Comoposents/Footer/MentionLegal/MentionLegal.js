import React from "react";
import styled from "styled-components";

const MentionLegal = () => {
  return (
    <Container>
      <Head>Mention legal</Head>
      <Firstdiv>
        <p>
          Conformément aux dispositions des articles 6-III et 19 de la Loi n°
          2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique,
          nous portons à la connaissance des utilisateurs et visiteurs du site
          www.elderlyhelp.eu les informations suivantes:
        </p>
      </Firstdiv>
      <div>
        <h2>Editeur du site www.elderyhelp.eu :</h2>
        <p>
          SAS Keewe
          <br />
          Capital social : 3420.86 euros
          <br />
          Siège social et adresse postale : 7 rue Progrès 93100 Montreuil
          <br />
          RCS : Bobigny B 882 584 469
          <br />
          Code APE : 6619B
          <br />
          Numéro de TVA intracommunautaire : FR 00 882 584 469
          <br />
          Adresse de courrier électronique : contact@keewe.eu
          <br />
          Directeur de la publication : VOISIN Vincent
        </p>
      </div>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: auto;
  background: #ccc;
  color: black;
  @media (max-width: 600px) {
    font-size: 0.8em;
    padding: 0.5em;

    text-align: center;
    justify-content: center;
    height: auto;
  }
`;
const Firstdiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 3em;
  width: 80%;
  height: 20vh;
  background: #ccc;
  color: black;
  @media (max-width: 600px) {
    font-size: 0.8em;
    margin-bottom: 1em;
    margin-top: 1em;
    padding: 0.5em;
    width: 90%;
    margin: 0 auto;
    text-align: center;
    justify-content: center;
    height: auto;
  }
`;
const Head = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  height: 150px;
  background: #ccc;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1.2em;
    height: 50px;
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    padding: 0.5em;
    width: 90%;
    margin: 0 auto;
    text-align: center;
    justify-content: center;
  }
`;

export default MentionLegal;
