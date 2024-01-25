import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";

import Header from "./Header";

const StyledAppLayout = styled.div`
  display: grid;
  /* grid-template-rows: auto 1fr; */
  grid-template-rows: 10rem 1fr;
  height: 100vh;
`;

const Main = styled.main`
  position: relative;
  background-color: var(--color-brown-100);
  padding: 5rem 6rem 8rem;
`;

const Container = styled.div`
  position: relative;
  z-index: 1;
  max-width: 140rem;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  transition: margin 0.3s ease;

  @media (max-width: 1080px) {
    max-width: 90rem;
  }
`;

const BackgroundShape = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      circle at 0% 100%,
      var(--color-orange-700),
      transparent 25%
    ),
    radial-gradient(circle at 30% 120%, var(--color-pink-300), transparent 30%);
  z-index: 0;
`;

function AppLayout() {
  const location = useLocation();
  const isBackgroudAppliedPage = location.pathname === "/aboutMe";

  return (
    <StyledAppLayout>
      <Header />
      <Main>
        {isBackgroudAppliedPage && <BackgroundShape />}
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
