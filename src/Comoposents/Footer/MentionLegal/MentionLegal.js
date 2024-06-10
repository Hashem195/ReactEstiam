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
      <SecondDiv>
        <h2>Editeur du site www.elderyhelp.eu :</h2>
        <p>
          SAS Eldery
          <br />
          Capital social : 3420.86 euros
          <br />
          Siège social et adresse postale : 7 rue Progrès 93100 Montreuil
          <br />
          RCS : Bobigny B 882 584 469
          <br />
          Code APE : 6629B
          <br />
          Numéro de TVA intracommunautaire : <Span>FR 00 882 584 469</Span>
          <br />
          Adresse de courrier électronique :<Span> contact@eldery.eu</Span>
          <br />
          Directeur de la publication : <Span>HAWARNAH Hashem</Span>
        </p>
      </SecondDiv>
      <Firstdiv>
        <h2>Immatriculation auprès de l’ORIAS :</h2>
        <p>
          SAS Eldery est immatriculée auprès de l’ORIAS sous le numéro 21000252
          en qualité de courtier en opérations de banque et services de
          paiement, dont l’activité est réglementée par l’Autorité de Contrôle
          Prudentiel et de Résolution.
        </p>
      </Firstdiv>
      <ThirdDiv>
        <h2>Propriété intellectuelle :</h2>
        <p>
          La structure générale du site www.Eldery.eu ainsi que tous les
          éléments contenus sur ce site, comprenant (de façon non exhaustive)
          toute réalisation graphique, tout texte et image, appartiennent à
          Eldery, et ne sauraient être copiés, reproduits, transmis, affichés,
          distribués, loués, altérés, enregistrés ou vendus sans l’accord
          préalable et écrit de Eldery.
        </p>
        <p>
          Toute reproduction partielle ou totale de ce site ou de son contenu,
          par quelque procédé que ce soit, sans accord préalable de Eldery est
          susceptible de constituer un délit de contrefaçon sanctionné par les
          articles L. 335-2 et suivants du Code de la propriété intellectuelle.
          Le non-respect de cette interdiction constitue une contrefaçon pouvant
          engager la responsabilité civile et pénale du contrefacteur.
        </p>
      </ThirdDiv>
    </Container>
  );
};
/*so the margin line 74 is working fine just added a empty place it's gives an easier look to our page*/
const ThirdDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 3em;
  height: auto;
  width: 70%;
  margin-bottom: 4em;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    font-size: 0.8em;
    margin-bottom: 1em;
    margin-top: 1em;
    padding: 0.5em;
    height: auto;
  }
`;

const Span = styled.span`
  font-weight: bold;
`;

const SecondDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 3em;
  width: 70%;
  height: auto;
  background: #ccc;
  color: black;
  h2 {
    line-height: 1;
    font-weight: bold;
    font-size: 1.1em;
    margin-bottom: 0.5em;
  }
  p {
    line-height: 2.5;
  }
  @media (max-width: 600px) {
    flex-direction: column;#
    align-items: center;
    justify-content: center;
    width: 90%;
    font-size: 0.8em;
    margin-bottom: 1em;
    margin-top: 1em;
    padding: 0.5em;
    height: auto;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;

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
    margin: 0 auto;
    text-align: center;
    justify-content: center;
    height: auto;
  }
`;
const Head = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 2em;
  height: 100px;
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
