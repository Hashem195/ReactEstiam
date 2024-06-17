import React from "react";
import styled from "styled-components";

const faqs = [
  {
    question: "Quels services proposez-vous ?",
    answer:
      "Nous offrons une large gamme de services, y compris les soins de santé, la compagnie et l'assistance domestique.",
  },
  {
    question: "Comment contacter le support ?",
    answer:
      "Vous pouvez contacter notre équipe de support par e-mail à support@example.com ou par téléphone au +123456789.",
  },
  {
    question: "Vos aidants sont-ils formés ?",
    answer:
      "Oui, tous nos aidants suivent une formation rigoureuse et sont certifiés pour garantir qu'ils fournissent les meilleurs soins.",
  },
  {
    question: "Quels sont vos plans tarifaires ?",
    answer:
      "Nous proposons des plans tarifaires flexibles adaptés à vos besoins. Veuillez nous contacter pour obtenir des informations tarifaires détaillées.",
  },
];

const FAQSection = () => {
  return (
    <Container>
      <Title id="faq-section">Questions fréquemment posées</Title>
      {faqs.map((faq, index) => (
        <FAQ key={index}>
          <Question>{faq.question}</Question>
          <Answer>{faq.answer}</Answer>
        </FAQ>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2em;
  background: #ccc;
`;

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1em;
  @media (max-width: 600px) {
    font-size: 1.2em;
  }
`;

const FAQ = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 1em 0;
`;

const Question = styled.h3`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 0.5em;
`;

const Answer = styled.p`
  font-size: 1em;
  line-height: 1.6;
`;

export default FAQSection;
