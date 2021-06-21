import { darken, lighten } from 'polished';
import { Map } from 'constants/models';
import { breakpoints } from './breakpoints';

export type ThemeScale<Type, Aliases extends string> = Array<Type> &
  Record<Aliases, Type>;
export type BreakpointAlias = 'sm' | 'md' | 'lg' | 'xlg';

export interface DefaultTheme {
  breakpoints?: ThemeScale<string, BreakpointAlias>;
  [key: string]: any;
}

const ALTERATION_POWER = 0.2;

const colors: Map = {
  black: '#202020',
  white: '#fff',
  offWhite: '#E5E5E5',
  gray: '#BDBDBD',
  gray2: '#828282',
  gray3: '#4F4F4F',
  green: '#90C95C',
  blue: '#51c3c7',
  success: '#2caa3b',
  attention: '#dfb52b',
  info: '#274cb1',
  error: '#e35b5c',
};

Object.keys(colors).forEach((key) => {
  colors[`${key}Darken`] = darken(ALTERATION_POWER, colors[key]);
  colors[`${key}Lighten`] = lighten(ALTERATION_POWER, colors[key]);
});

const typography: Map = {
  sizeSmall: '14px',
  sizeNormal: '16px',
  sizeMedium: '18px',
  weightLight: 300,
  weightNormal: 400,
  weightBold: 700,
  familyInter: 'Inter',
};

const layout: Map = {
  borderRadius: '8px',
  boxShadow: '0 10px 10px 0 rgba(0, 0, 0, 0.16)',
};

const transforms: Map = {
  transition: '150ms ease-in-out',
};

export const theme: DefaultTheme = {
  colors,
  typography,
  layout,
  transforms,
};

theme.breakpoints = breakpoints as ThemeScale<string, BreakpointAlias>;
[
  theme.breakpoints.sm,
  theme.breakpoints.md,
  theme.breakpoints.lg,
  theme.breakpoints.xlg,
] = theme.breakpoints;

export default theme;
