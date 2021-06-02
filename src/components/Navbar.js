import React from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { FaCog } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo>
          <NavLink to="/">Water Log</NavLink>
        </NavLogo>
        <Setting>
          <SettingIcon />
        </Setting>
      </Nav>
    </>
  );
};

export default Navbar;

export const Nav = styled.nav`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const NavLogo = styled.div`
  font-size: 2rem;
  font-weight: 600;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000;
  }
`;

export const SettingIcon = styled(FaCog)`
  display: block;
  font-size: 1.8rem;
  cursor: pointer;
`;

export const Setting = styled.div`
  place-self: center;
`;
