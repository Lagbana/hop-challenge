import styled from 'styled-components';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  let theme = 'dark';
  const bkColor = theme === 'dark' ? 'blue' : 'white';
  const color = theme === 'dark' ? 'white' : 'blue';

  const Header = styled.header`
    max-width: 100vw;
    height: 7vh;
    background-color: ${bkColor};
    color: ${color};
  `;

  return <Header> {children}</Header>;
};
