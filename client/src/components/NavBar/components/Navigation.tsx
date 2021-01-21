import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Colors } from '../../../utils';
import { useThemeContext } from '../../../store/useThemeContext';

interface NavigationProps {
  order?: number;
  open: boolean;
  onClick?: () => void;
}
export const Navigation: React.FC<NavigationProps> = ({
  order,
  open,
  onClick,
}) => {
  const {
    state: { NavLinks_COL, Drawer_COL },
  } = useThemeContext();

  const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: ${NavLinks_COL};
    &:hover {
      color: ${Colors.red};
    }
  `;

  const Nav = styled.ul<{ open: boolean }>`
      display: flex;
      order: ${order};
      flex-flow: row nowrap;
      list-style: none;
      margin-left: auto;
      margin-right: auto;

      li {
        padding: 0 25px;
      }

      @media (max-width: 768px) {
        
        order: 1;
        margin: 0;
        padding: 5vh 0vw 0vh 3vw;
        flex-flow: column nowrap;
        background-color: ${Drawer_COL};
        position: fixed;
        transform: ${({ open }) =>
          open ? `translateX(0)` : `translateX(100%)`};
        top: 0;
        right 0;
        height: 100vh;
        width: 35vw;

        li {
          padding: 18px 0;
        }
      }
    `;

  return (
    <Nav open={open}>
      <li>
        <StyledLink to="/sales" onClick={onClick}>
          Sales
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/inventory" onClick={onClick}>
          Inventory
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/participants" onClick={onClick}>
          Participants
        </StyledLink>
      </li>
    </Nav>
  );
};
