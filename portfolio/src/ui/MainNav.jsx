import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    background: linear-gradient(var(--color-grey-400), var(--color-grey-400))
      bottom / 0 0.1em no-repeat;
    transition: all 0.3s;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
  }

  &:hover {
    background-size: 100% 0.1em;
  }

  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-brown-100);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-blue-600);
  }
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
