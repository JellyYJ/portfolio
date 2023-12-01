import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-rows: 10rem 1fr; // Adjust the order of rows
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
  max-width: 120rem;
  margin: 8rem auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  transition: margin 0.3s ease;

  @media (max-width: 1080px) {
    margin: 8rem 5rem;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    margin: 4rem 2rem;
    gap: 2rem;
  }

  @media (max-width: 512px) {
    margin: 2rem 1rem;
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
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
