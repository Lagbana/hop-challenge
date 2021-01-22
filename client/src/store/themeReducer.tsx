import {
  IThemeColorsState,
  IThemeActions,
  ActionTypes,
} from './Theme.interface';
import { Colors } from '../utils';

export const themeReducer = (
  state: IThemeColorsState,
  action: IThemeActions,
) => {
  switch (action.type) {
    case ActionTypes.Dark:
      return {
        ...state,
        ThemeContainer_COL: Colors.navyBlue,
        PageContainer_COL: Colors.navyBlue,
        Navbar_COL: Colors.navyBlue,
        NavbarText_COL: Colors.white,
        NavLinks_COL: Colors.white,
        Hamburger_COL: Colors.white,
        Heading_COL: Colors.white,
        Title_COL: Colors.white,
        Drawer_COL: Colors.navyBlue,
        Summary_COL: Colors.midGrey,
        SummaryText_COL: Colors.darkBlue,
      };

    case ActionTypes.Light:
      return {
        ...state,
        ThemeContainer_COL: Colors.offWhite,
        Navbar_COL: Colors.lightBlue,
        NavbarText_COL: Colors.darkBlue,
        NavLinks_COL: Colors.black,
        Hamburger_COL: Colors.darkGrey,
        PageContainer_COL: Colors.offWhite,
        Heading_COL: Colors.darkBlue,
        Title_COL: Colors.darkBlue,
        Drawer_COL: Colors.lightBlue,
        Summary_COL: Colors.midGrey,
        SummaryText_COL: Colors.black,
      };

    default:
      return state;
  }
};
