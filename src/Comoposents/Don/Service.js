import styled from "styled-components";

const Service = () => {
  return (
    <div>
      <h3>Aidez-nous !</h3>
      <h4>Qu'est-ce qu'on fait avec votre don ?</h4>
      <Para>
        Nous offrons des services essentiels aux personnes âgées, y compris des
        soins à domicile, des repas nutritifs, et un soutien social. Votre don
        peut améliorer leur qualité de vie, leur apporter du confort et de la
        dignité. Aidez-nous à faire une différence en soutenant nos aînés dans
        leur quotidien. Votre générosité est leur espoir.
      </Para>
    </div>
  );
};

const Para = styled.p`
  font-size: 1.1em;
  line-height: 1.5;
  margin: 1em 0;
  font-weight: 500;
  @media (max-width: 900px) {
    font-size: 1em;
    line-height: 1.3;
    margin: 0.5em 0;
  }
  @media (max-width: 600px) {
    font-size: 1em;
    line-height: 1.2;

    margin-bottom: 0.4em;
  }
  @media (max-width: 400px) {
    font-size: 0.8em;
    line-height: 1.1;
    margin-bottom: 0.4em;
  }
`;

export default Service;
