import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Header from "./Header";

const StyledAppLayout = styled.div`
  display: grid;
  /* grid-template-rows: auto 1fr; */
  grid-template-rows: 10rem 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-brown-0);
  padding: 5rem 6rem 8rem;

  /* @media (max-width: 512px) {
    padding: 1rem 2rem 3rem;
  } */
`;

const Container = styled.div`
  max-width: 140rem;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  transition: margin 0.3s ease;
  /* background-color: var(--color-grey-400); */

  @media (max-width: 1080px) {
    /* margin-top: 6rem; */
    max-width: 90rem;
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
