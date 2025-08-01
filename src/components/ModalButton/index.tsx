import {View, TouchableOpacity} from 'react-native';
import Typography from '../Typography';
import styles from './style';
import {COLORS} from '../../constants/colors';
import Icon, {Icons} from '../Icon';
import {ModalButtonProps} from '../../types/';

const ModalButton = ({
  onPress,
  disabled = false,
  activeOpacity = 0.7,
  selectedTag = 'Все темы',
  ...props
}: ModalButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={activeOpacity}
      {...props}>
      <Typography color={COLORS.white} weight="extraBold" variant="button">
        {selectedTag}
      </Typography>
      <View style={styles.iconCont}>
        <Icon
          name="chevron-down"
          size={16}
          color={COLORS.white}
          type={Icons.Entypo}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ModalButton;
