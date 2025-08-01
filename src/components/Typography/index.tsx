import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {getFontFamily} from '../../utils/fonts';
import {COLORS} from '../../constants/colors';
import {TypographyProps} from '../../types/';

const getVariantStyles = (variant: TypographyProps['variant']) => {
  const variantMap = {
    h1: {fontSize: 32, lineHeight: 40},
    h2: {fontSize: 28, lineHeight: 36},
    h3: {fontSize: 24, lineHeight: 32},
    h4: {fontSize: 20, lineHeight: 28},
    h5: {fontSize: 18, lineHeight: 24},
    h6: {fontSize: 16, lineHeight: 22},
    body: {fontSize: 14, lineHeight: 24},
    caption: {fontSize: 12, lineHeight: 16},
    button: {fontSize: 16, lineHeight: 22},
  };

  return variantMap[variant || 'body'];
};

const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  weight = 'regular',
  fontStyle = 'normal',
  color = COLORS.dark,
  align = 'auto',
  children,
  ...props
}) => {
  const fontFamily = getFontFamily(weight, fontStyle === 'italic');
  const variantStyles = getVariantStyles(variant);

  const textStyle = StyleSheet.create({
    text: {
      fontFamily,
      fontSize: variantStyles.fontSize,
      lineHeight: variantStyles.lineHeight,
      color,
      textAlign: align,
    },
  });

  return (
    <Text style={textStyle.text} {...props}>
      {children}
    </Text>
  );
};

export default Typography;
