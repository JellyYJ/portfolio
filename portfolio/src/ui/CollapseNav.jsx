import React, { useState } from "react";
import styled from "styled-components";
import StyledNavLink from "./StyledNavLink";
import { IoMdMenu } from "react-icons/io";
import { useDetectClickOutside } from "../hooks/useDetectClickOutside";

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
  background-color: var(--color-brown-0);
  color: var(--color-brown-400);
  padding: 1rem;
  font-size: 2rem;
  border: none;
  cursor: pointer;
  position: absolute;
  /* z-index: 2; */
`;

function CollpaseMainNav({ navData }) {
  const [isCollapse, setIsCollapse] = useState(false);
  const collapseRef = useDetectClickOutside(() => setIsCollapse(false));

  const toggle = () => setIsCollapse(!isCollapse);
  const hide = () => setIsCollapse(false);

  return (
    <div ref={collapseRef}>
      <ToggleButton onClick={toggle}>
        <IoMdMenu />
      </ToggleButton>

      <CollapseDiv isCollapse={isCollapse}>
        {navData.map((nav) => (
          <StyledNavLink to={nav.to} key={nav.name} onClick={hide}>
            {nav.name}
          </StyledNavLink>
        ))}
      </CollapseDiv>
    </div>
  );
}

export default CollpaseMainNav;
