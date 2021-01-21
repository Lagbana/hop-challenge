import React, { useState } from 'react';
import styled from 'styled-components';
import { Navigation } from './Navigation';
import { useThemeContext } from '../../../store/useThemeContext';


export const Drawer = () => {
  const [open, setOpen] = useState<boolean>(false);
  const {
    state: { Hamburger_COL },
  } = useThemeContext();

  const DrawerNav = styled.div`
    display: none;

    @media (max-width: 768px) {
      display: flex;
    }
  `;

  const HamBurger = styled.div<{ open: boolean }>`
    width: 4vh;
    height: 4vh;
    top: 1vh;
    right: 20px;
    display: none;
    z-index: 20;

    div {
      width: 4vh;
      height: 0.25rem;
      border-radius: 10px;
      background-color: ${Hamburger_COL};
      transform-origin: 1px;

      &:nth-child(1) {
        transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      }
      &:nth-child(2) {
        transform: ${({ open }) =>
          open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => (open ? 0 : 1)};
      }
      &:nth-child(3) {
        transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      }
    }

    @media (max-width: 280px) {
      width: 4vh;
      height: 4vh;

      div {
        width: 4vh;
      }
    }

    @media (max-width: 768px) {
      display: flex;
      justify-content: space-around;
      flex-flow: column nowrap;
    }
  `;

  return (
    <DrawerNav>
      <HamBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </HamBurger>
      <Navigation open={open} onClick={() => setOpen(!open)} />
    </DrawerNav>
  );
};
