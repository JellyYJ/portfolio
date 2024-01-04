import Heading from "../ui/Heading";
import styled from "styled-components";

const StyledGreetingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90rem;
  margin-bottom: 3rem;

  p {
    font-size: ${(props) => props.fontSize || "1rem"};
    margin-top: 1rem;
  }

  @media (max-width: 1240px) {
    background-color: aquamarine;
    margin-top: 3rem;
  }
`;

function ContactMe() {
  return (
    <>
      <StyledGreetingsContainer fontSize="2rem">
        <Heading as="h1">Contact.</Heading>
        <p>Please contact me by email: LYJ10000H@gmail.com</p>
        <p>
          I can start working from <strong>Jan. 2023</strong>
        </p>
      </StyledGreetingsContainer>
    </>
  );
}

export default ContactMe;
