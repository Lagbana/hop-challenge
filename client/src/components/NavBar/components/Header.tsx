import React from 'react';
import styled from 'styled-components';
import { useThemeContext } from '../../../store/useThemeContext';

interface HeaderProps {}
export const Header: React.FC<HeaderProps> = ({ children }) => {
  const {
    state: { Navbar_COL, NavbarText_COL },
  } = useThemeContext();

  const Header = styled.header`
    max-width: 100vw;
    height: 7vh;
    background-color: ${Navbar_COL};
    color: ${NavbarText_COL};
  `;

  return <Header> {children}</Header>;
};
