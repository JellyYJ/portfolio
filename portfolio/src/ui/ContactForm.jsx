import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Button from "../ui/Button";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 50rem;
  padding: 0 5rem 0 0;
  width: 100%;
  border-right: 1px solid var(--color-brown-100);
  margin-top: 2rem;

  @media (max-width: 1024px) {
    transition: all 0.3s;
    border: transparent;
    padding: 0;
  }
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: transparent;
  border-bottom: 1px solid var(--color-brown-100);
  box-sizing: border-box;
  background-color: var(--color-brown-50);

  &:focus {
    border-bottom-color: var(--color-brown-500);
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: transparent;
  border-bottom: 1px solid var(--color-brown-100);
  resize: vertical;
  box-sizing: border-box;
  background-color: var(--color-brown-50);

  &:focus {
    border-bottom-color: var(--color-brown-700);
  }
`;

const ErrorMessage = styled.p`
  color: var(--color-red-700);
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
      <StyledForm ref={form} onSubmit={handleSendEmail}>
        <NameContainer>
          <StyledInput
            type="text"
            name="first_name"
            id="first_name"
            placeholder="First Name"
            required
          />

          <StyledInput
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Last Name"
            required
          />
        </NameContainer>

        <StyledInput
          type="email"
          name="from_email"
          id="from_email"
          placeholder="Email"
          required
        />

        <StyledTextarea
          name="message"
          id="message"
          rows="6"
          placeholder="Message"
          required
        />

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
