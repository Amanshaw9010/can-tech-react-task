import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import siteLogo from "./Images/site-logo.png";

import Menu from "./Menu";

const Navbar = ({ toggleDrawer, routes }) => {
  return (
    <SNavbar>
      <NavContainer>
        <DrawerButton onClick={toggleDrawer}>
          <FaBars />
        </DrawerButton>
        <SNavbarBrand>
          <img
            src={siteLogo}
            style={{
              width: "112px",
              height: "70px",
              marginTop: "7.5px",
              borderRadius: "9px",
            }}
            alt="free"
          />
        </SNavbarBrand>
        <RightNav>
          <NavRoutes>
            {routes.map((route) => {
              if (route.subRoutes) {
                return <Menu route={route} key={route.name} />;
              }
              return (
                <NavRoute to={route.link} key={route.name}>
                  {route.name}
                </NavRoute>
              );
            })}
          </NavRoutes>
          <Link to="/register">
          <LoginButton>Get Started</LoginButton>

          </Link>
        </RightNav>
      </NavContainer>
    </SNavbar>
  );
};

export default Navbar;

const DrawerButton = styled.button`
  all: unset;
  font-size: 3rem;
  display: grid;
  @media (min-width: 768px) {
    display: none;
  }
`;

const SNavbar = styled.nav`
  background-color: white;
  color: black;
  padding: 10px;
  // position: fixed;
  // z-index: 99;
  width: 100%;
  box-shadow: 0px 5px 29px 0px rgba(0, 0, 0, 0.75);
`;
const NavContainer = styled.div`
  padding: 1rem;
  color: black;
  height: 70px;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // color: white;
`;
const SNavbarBrand = styled.h2`
  font-size: 3rem;
`;
const RightNav = styled.div`
  display: flex;
  gap: 2rem;
`;
const NavRoutes = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  display: flex;
  gap: 1rem;
  font-size: 17px;
  align-items: center;
`;
const NavRoute = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 700;
  padding: 0.5rem;
  transition: 0.5s ease;

  &:hover {
    transition: 0.5s ease;
    color: blue;
    background-color: white;
    box-shadow: 0px 0px 10px white;
  }
`;

const LoginButton = styled.button`
  padding: 0.7rem 3rem;
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 3rem;
  transition: 0.3s ease;

  &:hover {
    transition: 0.3s ease;
    border: 1px solid transparent;
    background-color: blue;
    color: white;
    box-shadow: 0px 0px 10px blue;
  }
`;
