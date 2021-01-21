export interface IThemeColorsState {
  ThemeContainer_COL: string;
  Navbar_COL: string;
  NavbarText_COL: string;
  NavLinks_COL: string;
  Hamburger_COL: string;
  PageContainer_COL: string;
  Heading_COL: string;
  Title_COL: string;
  List_COL: string;
  Card_COL: string;
  Tile_COL: string;
  Drawer_COL: string;
  Summary_COL: string;
  SummaryText_COL: string;
}

export interface IThemeActions {
  type: ActionTypes.Dark | ActionTypes.Light;
  payload?: IThemeColorsState;
}

export enum ActionTypes {
  Dark = 'DARK',
  Light = 'LIGHT',
}
