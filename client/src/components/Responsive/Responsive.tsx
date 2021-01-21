import React from 'react';
import styled from 'styled-components';
import { useThemeContext } from '../../store/useThemeContext'


export const PageContainer: React.FC<{}> = ({ children }) => {
  const { state: { PageContainer_COL }} = useThemeContext()
  const Container = styled.div`
    background-color: ${PageContainer_COL};
    width: 100%;
    padding-top: 3vh;
    padding-bottom: 5vh;
    display: flex;
    flex-flow: column nowrap;
  `;
  return <Container>{children}</Container>;
};

export const WebView = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileView = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    padding-top: 1.5rem;
    width: 100%;
  }
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  div {
    display: flex;
    background: green;
    justify-content: space-evenly;
    width: 60%;
    &:nth-child(1) {
      border-radius: 5px 5px 0 0;
    }
    &:nth-child(2) {
      border-radius: 0 0 5px 5px;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    width: 100%;

    div {
      width: 100%;
    }
  }
`;