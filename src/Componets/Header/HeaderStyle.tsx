import styled from 'styled-components';

export const Menu = styled.header`
  background-color: #955e95;
  height: 10vh;
  position: fixed;
  width: 100%;
  z-index: 1;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-evenly;
  margin: 0 0 0 4%;
`;

export const MenuLink = styled.a`
  color: #ffffff;
  display: flex;
  font-weight: 400;
  font-size: 1em;
  line-height: 10vh;
  list-style-type: none;
  justify-content: space-between;
  overflow: hidden;
  text-decoration: none;
`;