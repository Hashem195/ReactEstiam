// Donate.js
import React, { useState } from "react";
import styled from "styled-components";

const Donate = () => {
  const [donations, setDonations] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleDonate = (e) => {
    e.preventDefault();
    if (name && email && amount) {
      const newDonation = { name, amount };
      setDonations((prevDonations) =>
        [newDonation, ...prevDonations].slice(0, 10)
      );
      setName("");
      setEmail("");
      setAmount("");
      setComment("");
      setFeedback("Thank you for your donation!");
      setTimeout(() => setFeedback(""), 3000);
    } else {
      setFeedback("Please fill out all fields.");
      setTimeout(() => setFeedback(""), 3000);
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setAmount("");
    setComment("");
    setFeedback("");
  };

  return (
    <BigContainer>
      <ContainerForm>
        <Title>C'est parti pour l'aventure!</Title>
        {feedback && <Feedback>{feedback}</Feedback>}
        <Form onSubmit={handleDonate}>
          <input
            type="text"
            placeholder="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Combien?"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <textarea
            placeholder="Commentaire"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <ButtonContainer>
            <button type="submit">Donate</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </ButtonContainer>
        </Form>
      </ContainerForm>
      <DonationList>
        <Title>Top 10 Donations</Title>
        <List>
          {donations.length === 0 ? (
            <ListItem>No donations yet.</ListItem>
          ) : (
            donations.map((donation, index) => (
              <ListItem key={index}>
                {donation.name} - £{donation.amount}
              </ListItem>
            ))
          )}
        </List>
      </DonationList>
    </BigContainer>
  );
};

const Feedback = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  color: ${(props) => (props.error ? "red" : "green")};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  input,
  textarea {
    width: 300px;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    box-shadow: 0 0 5px black;
  }

  textarea {
    height: 100px;
    resize: none;
  }

  textarea:focus,
  input:focus {
    outline: 1px solid #bcfd4c;
    box-shadow: 0 0 1px black;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  button {
    width: 100px;
    height: 40px;
    margin: 0 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: #6e6e6e;
    color: white;

    &:hover {
      background-color: #bcfd4c;
      color: black;
      font-weight: bold;
      transform: scale(1.1);
      box-shadow: 0 0 10px black;
      border-radius: 0.2em;
    }
  }
`;

const DonationList = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  margin-left: 20px;
  background-color: #f1f1f1;
  border-radius: 10px;

  @media (max-width: 600px) {
    width: 75%;
    margin-left: 0;
    margin-top: 20px;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 14px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

const BigContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  background-color: #ccc;
  height: 100vh;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  @media (max-width: 600px) {
    font-size: 20px;
  }

  @media (max-width: 400px) {
    font-size: 18px;
  }

  @media (max-width: 300px) {
    font-size: 16px;
  }
`;

export default Donate;
