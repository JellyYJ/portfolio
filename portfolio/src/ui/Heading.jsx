import styled, { css } from "styled-components";

// Styles for Headings: use "as" to specify which heading to use
const Heading = styled.h1`
  color: var(--color-grey-900);

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 8rem;
      font-weight: 500;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 3rem;
      font-weight: 500;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 4rem;
      font-weight: 500;
    `}

  
  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
`;

export default Heading;
