import React from "react";
import styled, { keyframes } from "styled-components";

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

const ContactContainer = styled.div`
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 800px;
  text-align: center;
  box-sizing: border-box;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
  animation: ${slideIn} 1s ease-in-out;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  font-size: 1em;
  border: 1px solid #aaa;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  font-size: 1em;
  border: 1px solid #aaa;
  border-radius: 5px;
  resize: none;
  height: 150px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const Map = styled.div`
  width: 100%;
  max-width: 800px;
  height: 400px;
  margin-top: 40px;
  animation: ${slideIn} 1s ease-in-out;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Section>
        <Title>Contactez-nous</Title>
        <Text>
          Nous serions ravis de vous entendre ! Que vous ayez une question sur
          nos services, que vous ayez besoin d'assistance ou que vous souhaitiez
          simplement nous donner votre avis, n'hésitez pas à nous contacter.
        </Text>
      </Section>

      <Section>
        <Subtitle>Contactez-nous</Subtitle>
        <Form>
          <Input type="text" placeholder="Votre Nom" required />
          <Input type="email" placeholder="Votre Email" required />
          <TextArea placeholder="Votre Message" required />
          <Button type="submit">Envoyer le Message</Button>
        </Form>
      </Section>

      <Section>
        <Subtitle>Notre Emplacement</Subtitle>
        <Map>
          <iframe
            title="map"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed/v1/place?q=Eiffel+Tower,Paris+France&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            allowFullScreen
          ></iframe>
        </Map>
      </Section>
    </ContactContainer>
  );
};

export default Contact;
