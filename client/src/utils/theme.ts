import { makeVar } from '@apollo/client';


export enum ThemeEnum {
  Dark = 'dark',
  Light = 'light',
}
export const Theme = makeVar(ThemeEnum.Dark);