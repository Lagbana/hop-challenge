import styled from 'styled-components';

interface NavContainerProps {}
export const NavContainer: React.FC<NavContainerProps> = ({ children }) => {
  const Nav = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row wrap;
  `;

  return <Nav>{children}</Nav>;
};
