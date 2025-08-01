export const COLORS = {
  white: '#FFFFFF',
  background: '#7446EE',
  dark: '#39414B',
  darkSecondary: '#5A5776',
  gray: '#C5D0E6',
  grayLight: '#E5E8FE',
  lightTeal: '#A3B3D0',
} as const;

export type ColorKey = keyof typeof COLORS;
