import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Heading from "../ui/Heading";
import Button from "../ui/Button";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 2rem;
//   background-color: aliceblue;
// `;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 40rem;
  width: 100%;
`;

const StyledLabel = styled.label`
  font-size: 1.8rem;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  box-sizing: border-box;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 1rem;
  margin-top: 0.5rem;
`;

function ContactMe() {
  const form = useRef();
  const [error, setError] = useState(null);

  const handleSendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          setError(error);
        }
      );
  };

  return (
    <>
      <Heading as="h3">Contact me</Heading>
      <StyledForm ref={form} onSubmit={handleSendEmail}>
        <StyledLabel htmlFor="from_name">Name</StyledLabel>
        <StyledInput type="text" name="from_name" id="from_name" required />

        <StyledLabel htmlFor="from_email">Email</StyledLabel>
        <StyledInput type="email" name="from_email" id="from_email" required />

        <StyledLabel htmlFor="message">Message</StyledLabel>
        <StyledTextarea name="message" id="message" rows="6" required />

        <Button type="submit" variation="secondary">
          Send
        </Button>

        {error && (
          <ErrorMessage>
            Oops, something went wrong. Please try again.
          </ErrorMessage>
        )}
      </StyledForm>
    </>
  );
}

export default ContactMe;
