import styled from "styled-components";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90rem;
  margin-bottom: 3rem;

  p {
    font-size: ${(props) => props.fontSize || "1rem"};
    margin-top: 1rem;
  }

  @media (max-width: 1240px) {
    /* background-color: aquamarine; */
    margin-top: 3rem;
  }
`;

export default TextContainer;
