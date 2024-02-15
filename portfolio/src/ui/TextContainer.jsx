import styled, { css } from "styled-components";

const direction = {
  column: css`
    flex-direction: column;
  `,

  row: css`
    flex-direction: row;
  `,
};

const TextContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  /* margin-top: 3rem; */
  max-width: ${(props) => props.maxWidth || "100rem"};
  margin-bottom: ${(props) => props.marginBottom || "3rem"};

  ${(props) => direction[props.direction]}

  p {
    font-size: ${(props) => props.fontSize || "2rem"};
    margin-top: 1rem;
  }

  @media (max-width: 1240px) {
    max-width: 80rem;
  }
`;

TextContainer.defaultProps = {
  direction: "column",
};

export default TextContainer;
