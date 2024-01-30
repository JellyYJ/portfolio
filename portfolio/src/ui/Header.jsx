import styled from "styled-components";
import MainNav from "./MainNav";

const StyledHeader = styled.header`
  background-color: var(--color-brown-50);
  /* background-color: var(--color-brown-100); */
  /* padding: 3.2rem 2.4rem; */
  padding: 4.5rem 5rem;
`;

function Header() {
  return (
    <StyledHeader>
      <MainNav />
    </StyledHeader>
  );
}

export default Header;
