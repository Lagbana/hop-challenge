import styled from 'styled-components';
import { useThemeContext } from '../../store/useThemeContext';

export const ThemeContainer: React.FC<{}> = ({ children }) => {
  const {
    state: { ThemeContainer_COL },
  } = useThemeContext();

  const ThemeContainer = styled.div`
    width: 100%;
    min-height: 93vh;
    background-color: ${ThemeContainer_COL};
    margin: 0;
    padding: 0;
  `;

  return <ThemeContainer>{children}</ThemeContainer>;
};
