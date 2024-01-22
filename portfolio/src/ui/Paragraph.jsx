import styled, { css } from "styled-components";

const StyledDiv = styled.div`
  max-width: 75rem;
  /* margin: auto; */

  ${(props) =>
    props.role === "paragraph" &&
    css`
      font-size: 2rem;
      color: var(--color-grey-800);
    `}

  ${(props) =>
    props.role === "skillBucket" &&
    css`
      margin-top: 5rem;
      color: var(--color-grey-800);
    `}
`;

export default StyledDiv;
