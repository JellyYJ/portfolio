import styled from "styled-components";
import MainNav from "./MainNav";

const StyledHeader = styled.header`
  background-color: var(--color-brown-0);
  padding: 3.2rem 2.4rem;
  border-bottom: 1px solid var(--color-brown-100);
`;

function Header() {
  return (
    <StyledHeader>
      <MainNav></MainNav>
    </StyledHeader>
  );
}

export default Header;
