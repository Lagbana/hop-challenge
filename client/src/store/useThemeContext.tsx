import { useContext } from 'react';
import { ThemeContext } from './Theme.context';

export const useThemeContext = () => useContext(ThemeContext);
