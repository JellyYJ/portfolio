import React, { useRef, useState } from "react";
import styled from "styled-components";
import { toast } from "react-hot-toast";

import Button from "../ui/Button";
import { sendEmail } from "../hooks/useSendEmail";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 50rem;
  padding: 0 5rem 0 0;
  width: 100%;
  border-right: 1px solid var(--color-brown-200);
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
  border-bottom: 1px solid var(--color-brown-200);
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
  border-bottom: 1px solid var(--color-brown-200);
  resize: vertical;
  box-sizing: border-box;
  background-color: var(--color-brown-50);

  &:focus {
    border-bottom-color: var(--color-brown-700);
  }
`;

function ContactMe() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const handleSendEmail = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const result = await sendEmail(form.current);
      // console.log(result.text);
      toast.success("Email sent successfully!");
      form.current.reset();
    } catch (error) {
      // console.log(error.text);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
            disabled={isLoading}
          />

          <StyledInput
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Last Name"
            required
            disabled={isLoading}
          />
        </NameContainer>

        <StyledInput
          type="email"
          name="from_email"
          id="from_email"
          placeholder="Email"
          required
          disabled={isLoading}
        />

        <StyledTextarea
          name="message"
          id="message"
          rows="6"
          placeholder="Message"
          required
          disabled={isLoading}
        />

        <Button type="submit" variation="secondary" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send"}
        </Button>
      </StyledForm>
    </>
  );
}

export default ContactMe;
