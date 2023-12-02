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
  background-color: var(--color-grey-0);
  padding: 4rem 5rem 6rem;

  @media (max-width: 512px) {
    padding: 1rem 2rem 3rem;
  }
`;

const Container = styled.div`
  max-width: 140rem;
  margin: 8rem auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  transition: margin 0.3s ease;
  /* background-color: var(--color-grey-400); */

  @media (max-width: 768px) {
    margin-top: 4rem;
  }

  @media (max-width: 512px) {
    margin-top: 2rem;
    max-width: 100%;
    gap: 1rem;
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
