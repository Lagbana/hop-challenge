import React from 'react';
import styled from 'styled-components';

interface CardProps {
  backgroundColor?: string;
  color?: string;
  content?: string;
  title?: string;
}

interface TitleProps {
    color?: string
}
export const Tile: React.FC<TitleProps> = ({ children, color }) => {
    const Tile = styled.div`
        color: ${ color || 'black'};
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        width: 100%;

    `;
    return <Tile>{ children }</Tile>
};

export const Card: React.FC<CardProps> = ({
  backgroundColor,
  children,
  title,
}) => {
  const Container = styled.div`
    background-color: ${backgroundColor };
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;
    padding-left: 3%;
    padding-right: 1%;
    width: 40%;
    min-height: 25vh; 
  `;
    const Title = styled.h4`
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    font-weight: normal;

    @media(max-width: 768px) {
      font-weight: normal;
      font-size: 1rem;
    }
    `;

  const Content = styled.div`
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  `;

  return (
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  );
};
