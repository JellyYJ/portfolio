import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";

import { IoMdMenu } from "react-icons/io";
import useDetectClickOutside from "../hooks/useDetectClickOutside";

const CollapseDiv = styled.div`
  display: ${({ isCollapse }) => (isCollapse ? "block" : "none")};
  background-color: #f0f0f0;
  padding: 1rem;
  border: 1px solid #ddd;
  position: absolute;
  top: 8rem;
  left: 3rem;
  /* z-index: 1;  */
`;

const ToggleButton = styled.button`
  border-radius: 0.8rem;
  background-color: var(--color-brown-300);
  color: white;
  padding: 1rem;
  border: none;
  cursor: pointer;
  position: absolute;
  /* z-index: 2; */

  &:hover {
    background-color: var(--color-brown-400);
  }
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

function CollpaseMainNav({ navData }) {
  const [isCollapse, setIsCollapse] = useState(true);
  const collapseRef = useDetectClickOutside(() => setIsCollapse(false));

  const toggle = () => setIsCollapse(!isCollapse);
  const hide = () => setIsCollapse(false);

  return (
    <>
      <ToggleButton onClick={toggle} ref={collapseRef}>
        <IoMdMenu />
      </ToggleButton>
      <CollapseDiv isCollapse={isCollapse} ref={collapseRef}>
        {navData.map((nav) => (
          <StyledNavLink to={nav.to} key={nav.name} onClick={hide}>
            {nav.name}
          </StyledNavLink>
        ))}
      </CollapseDiv>
    </>
  );
}

export default CollpaseMainNav;
