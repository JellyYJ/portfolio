import styled, { css } from "styled-components";

const StyledDiv = styled.div`
  max-width: 70rem;
  color: var(--color-grey-800);
  /* margin: auto; */

  ${(props) =>
    props.role === "paragraph" &&
    css`
      font-size: 2rem;
    `}

  ${(props) =>
    props.role === "skillBucket" &&
    css`
      margin-top: 5rem;
      max-width: 65rem;
    `}
`;

export default StyledDiv;
