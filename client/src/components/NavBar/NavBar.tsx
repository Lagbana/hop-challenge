import { Navigation, Header, NavContainer, Drawer } from './components';
import { Wrapper } from '../Wrapper';
import styled from 'styled-components';
import logoForDark from '../../Logo-forDark.png';
import logoForLight from '../../Logo-forLight.png';

export const NavBar = () => {
  let theme = 'dark';
  const LogoImage = theme === 'dark' ? logoForDark : logoForLight;

  return (
    <Header>
      <Wrapper>
        <NavContainer>
          <a href="#">
            <Img src={LogoImage} alt="fake nibbles logo" />
          </a>
          <Navigation open={false} />
          <div>
            <Button href="/hire-me">Hire Me!</Button>
          </div>
          <Drawer />
        </NavContainer>
      </Wrapper>
    </Header>
  );
};

const Button = styled.a`
  border-radius: 3px;
  padding: 0.5rem 0.25rem;
  width: 11rem;
  color: white;
  border: 2px solid white;
  background: teal;
  text-decoration: none;
  &:hover {
    background-color: green;
  }

  @media (max-width: 768px) {
    margin-left: 15vw;
    padding: 0.35rem 0.25rem;
    font-size: 1rem;
  }

  @media (max-width: 280px) {
    margin-left: 7vw;
    padding: 0.25rem 0.25rem;
    width: 8rem;
    font-size: 0.8rem;
  }
`;

const Img = styled.img`
  height: 6vh;
  max-width: 100%;
  margin-top: 0.5vh;
  margin-bottom: 0.5vh;
`;
