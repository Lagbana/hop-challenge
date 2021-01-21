import React, { useState } from 'react';
import styled from 'styled-components';
import { Navigation, Header, NavContainer, Drawer } from './components';
import { Toggle, Wrapper } from '../../components';
import logoForDark from '../../Logo-forDark.png';
import logoForLight from '../../Logo-forLight.png';
import { useThemeContext } from '../../store/useThemeContext';
import { ActionTypes } from '../../store/Theme.interface';


export const NavBar = () => {
  const [isChecked, setIsChecked] = useState(true);
  const { dispatch } = useThemeContext();
  const LogoImage = isChecked ? logoForLight : logoForDark;

  return (
    <Header>
      <Wrapper>
        <NavContainer>
          <a href="/">
            <Img src={LogoImage} alt="fake nibbles logo" />
          </a>
          <Navigation open={false} />
          <div>
            <Span>On</Span>
            <Toggle
              isChecked={isChecked}
              onChecked={(e: React.ChangeEvent<HTMLInputElement>) => {
                const checked = e.currentTarget.checked;
                checked
                  ? dispatch({ type: ActionTypes.Light })
                  : dispatch({ type: ActionTypes.Dark });
                setIsChecked(checked);
              }}
            />
            <Span>Off</Span>
          </div>
          <Drawer />
        </NavContainer>
      </Wrapper>
    </Header>
  );
};

const Img = styled.img`
  height: 6vh;
  max-width: 100%;
  margin-top: 0.5vh;
  margin-bottom: 0.5vh;
`;

const Span = styled.span`
  padding: 4px;
  
  @media (max-width: 768px) {
    font-size: 0.55rem;
  };
`;