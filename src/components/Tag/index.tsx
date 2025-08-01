import {Pressable} from 'react-native';
import Typography from '../Typography';
import styles from './style';
import {COLORS} from '../../constants/colors';
import {TagProps} from '../../types/';

const Tag = ({name, isSelected, onPress}: TagProps) => {
  return (
    <Pressable
      style={[styles.container, isSelected && styles.containerSelected]}
      onPress={onPress}>
      <Typography
        variant="h5"
        weight="extraBold"
        color={isSelected ? COLORS.white : COLORS.dark}>
        {name}
      </Typography>
    </Pressable>
  );
};

export default Tag;
