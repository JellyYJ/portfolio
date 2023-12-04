import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  flex: 1;
  margin: auto;
  max-width: ${(props) => props.maxWidth || "120rem"};
  margin-bottom: ${(props) => props.spacing || "0"};

  p {
    font-size: ${(props) => props.fontSize || "1rem"};
  }

  ${(props) =>
    props.type === "horizontal" &&
    css`
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 768px) {
        flex-direction: column;
      }
    `};

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.5rem;
    `};
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
