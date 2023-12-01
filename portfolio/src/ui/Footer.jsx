import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: var(--color-brwon-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-brwon-100);
`;

function Footer() {
  return <StyledFooter>FOOTER</StyledFooter>;
}

export default Footer;
