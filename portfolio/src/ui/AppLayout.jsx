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
  background-color: var(--color-brown-50);
  padding: 4rem 4.5rem 6.5rem;
`;

const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
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
