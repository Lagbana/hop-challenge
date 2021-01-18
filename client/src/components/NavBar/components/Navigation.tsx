import styled from 'styled-components';

interface NavigationProps {
    order?: number;
    open: boolean;
}
export const Navigation: React.FC<NavigationProps> = ({ order, open }) => {
  const theme = 'dark';
  const color = theme === 'dark' ? 'white' : 'blue';

  const NavLinks = styled.a`
    text-decoration: none;
    color: ${color};
    &:hover {
      color: red;
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
        background-color: green;
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
        <NavLinks href="/sales">Sales</NavLinks>
      </li>
      <li>
        <NavLinks href="/inventory">Inventory</NavLinks>
      </li>
      <li>
        <NavLinks href="/participants">Participants</NavLinks>
      </li>
    </Nav>
  );
};
