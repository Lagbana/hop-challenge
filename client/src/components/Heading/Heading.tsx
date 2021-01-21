import React from 'react';
import styled from 'styled-components';
import { useThemeContext } from '../../store/useThemeContext'

interface HeadingProps {}
export const Heading: React.FC<HeadingProps> = ({ children }) => {
  const {
    state: { Heading_COL },
  } = useThemeContext();
  const Heading = styled.div`
    width: 100%;
    text-align: center;
    font-family: Poppins;
    font-size: 1.25rem;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  `;
  return (
    <Heading>
      <h2 style={{ margin: 0, color: Heading_COL, fontWeight: 'normal' }}> {children} </h2>
    </Heading>
  );
};

interface TitleProps {}
export const Title: React.FC<TitleProps> = ({ children }) => {
    const {
      state: { Title_COL },
    } = useThemeContext();
  
  const Title = styled.div`
    width: '100%';
    text-align: center;
    font-family: Poppins;
    font-size: 1rem;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  `;
  return (
    <Title>
      <h3 style={{ margin: 0, color: Title_COL, fontWeight: 'normal' }}>
        {' '}
        {children}{' '}
      </h3>
    </Title>
  );
};
