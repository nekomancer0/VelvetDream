import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import icon from "./icon.png";

const HeaderWrapper = styled.header`
  background-color: var(--color-light);
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Logo = styled.img`
  height: 50px;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style-type: none;
`;

const NavItem = styled.li`
  margin-left: 2rem;
`;

const NavLink = styled(Link)`
  font-family: var(--font-display);
  font-weight: bold;
  color: var(--color-primary);
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-secondary);
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Nav>
        <Link to="/">
          <Logo src={icon} alt="VelvetDream Logo" />
        </Link>
        <NavLinks>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/projects">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact">Contact</NavLink>
          </NavItem>
        </NavLinks>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;
