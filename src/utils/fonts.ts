export const FONT_FAMILIES = {
  'Nunito-ExtraLight': 'Nunito-ExtraLight',
  'Nunito-Light': 'Nunito-Light',
  'Nunito-Regular': 'Nunito-Regular',
  'Nunito-Medium': 'Nunito-Medium',
  'Nunito-SemiBold': 'Nunito-SemiBold',
  'Nunito-Bold': 'Nunito-Bold',
  'Nunito-ExtraBold': 'Nunito-ExtraBold',
  'Nunito-Black': 'Nunito-Black',

  'Nunito-ExtraLightItalic': 'Nunito-ExtraLightItalic',
  'Nunito-LightItalic': 'Nunito-LightItalic',
  'Nunito-Italic': 'Nunito-Italic',
  'Nunito-MediumItalic': 'Nunito-MediumItalic',
  'Nunito-SemiBoldItalic': 'Nunito-SemiBoldItalic',
  'Nunito-BoldItalic': 'Nunito-BoldItalic',
  'Nunito-ExtraBoldItalic': 'Nunito-ExtraBoldItalic',
  'Nunito-BlackItalic': 'Nunito-BlackItalic',
} as const;

export type FontFamily = keyof typeof FONT_FAMILIES;

export const getFontFamily = (
  weight: string,
  isItalic: boolean = false,
): FontFamily => {
  const baseFont = `Nunito-${weight}`;
  return isItalic
    ? (`${baseFont}Italic` as FontFamily)
    : (baseFont as FontFamily);
};
