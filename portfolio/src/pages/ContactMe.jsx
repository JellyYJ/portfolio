import styled from "styled-components";
import Heading from "../ui/Heading";
import ContactForm from "../ui/ContactForm";
import ContactInfoContainer from "../ui/ContactInfoContainer";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5rem;
  gap: 5rem;
  border-radius: 20px;

  background-color: var(--color-brown-100);

  @media (max-width: 1024px) {
    transition: all 0.3s;
    flex-direction: column;
    max-width: 65rem;
  }
`;

function ContactMe() {
  return (
    <>
      <Heading as="h3">Contact me</Heading>
      <Container>
        <ContactForm />
        <ContactInfoContainer />
      </Container>
    </>
  );
}

export default ContactMe;
