import React from "react";
import styled from "styled-components";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";

const Newsletter = () => (
  <Popup
    trigger={<Linker href="#">NewsLetter</Linker>}
    position={"center center"}
    modal
    closeOnDocumentClick
    contentStyle={{ borderRadius: "5px" }}
    overlayStyle={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
  >
    {(close) => (
      <div style={{ position: "relative", padding: "1em" }}>
        <CloseButton onClick={close}>&times;</CloseButton>
        <p>Subscribe to our newsletter:</p>
        <Form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <Button type="submit">Subscribe</Button>
        </Form>
      </div>
    )}
  </Popup>
);

export default Newsletter;

const Linker = styled.a`
  color: black;
  text-decoration: none;
  margin-bottom: 0.5em;
  &:hover {
    font-weight: bold;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1em;

  @media (max-width: 600px) {
    margin-top: 0.5em;
    margin-bottom: 1em;
    padding: 0.5em;
    width: 90%;
    margin: 0 auto;
  }

  label {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 0.5em;
    text-align: left;
  }

  input {
    padding: 0.5em;
    margin-bottom: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 70%;
  }
`;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    color: black;
    background-color: #bcfd4c;
    font-weight: bold;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;
