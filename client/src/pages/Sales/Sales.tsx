import styled from 'styled-components';

interface SalesProps {}
export const Sales: React.FC<SalesProps> = ({ children }) => {
  const Container = styled.div`
    background-color: pink;
    height: 93vh;
    width: 100%;
  `;
  return <Container>{children}</Container>;
};
