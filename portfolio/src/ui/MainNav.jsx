import { useState, useEffect } from "react";
import styled from "styled-components";

import StyledNavLink from "./StyledNavLink";
import CollpaseMainNav from "./CollapseNav";

const navData = [
  {
    name: "About Me",
    to: "aboutMe",
  },
  {
    name: "Projects",
    to: "projects",
  },
  {
    name: "Contact Me",
    to: "contactMe",
  },
];

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
`;

function MainNav() {
  const [isOpen, setIsOpen] = useState(true);

  // Function to update isOpen based on screen width
  const updateIsOpen = () => {
    if (window.innerWidth <= 1024) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    updateIsOpen();

    const handleResize = () => {
      updateIsOpen();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {!isOpen ? (
        <CollpaseMainNav key={navData.name} navData={navData} />
      ) : (
        <NavList>
          <StyledNavLink to="aboutMe">About Me</StyledNavLink>
          <StyledNavLink to="projects">Projects</StyledNavLink>
          <StyledNavLink to="contactMe">Contact Me</StyledNavLink>
        </NavList>
      )}
    </>
  );
}

export default MainNav;
