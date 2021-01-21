import React, { createContext } from 'react';
import { IThemeColorsState, IThemeActions } from './Theme.interface';
import { Colors } from '../utils';

export const initState = {
  ThemeContainer_COL: Colors.offWhite,
  Navbar_COL: Colors.lightBlue,
  NavbarText_COL: Colors.darkBlue,
  NavLinks_COL: Colors.black,
  Hamburger_COL: Colors.darkGrey,
  PageContainer_COL: Colors.offWhite,
  Heading_COL: Colors.darkBlue,
  Title_COL: Colors.darkBlue,
  List_COL: Colors.lighGreyRGB,
  Drawer_COL: Colors.lightBlue,
  Card_COL: '',
  Tile_COL: '',
  Summary_COL: Colors.midGrey,
  SummaryText_COL: Colors.black,
};

export const ThemeContext = createContext<{
  state: IThemeColorsState;
  dispatch: React.Dispatch<IThemeActions>;
}>({
  state: initState,
  dispatch: () => null,
});
