import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLORS.gray,
    marginVertical: 3,
  },
  containerSelected: {
    backgroundColor: COLORS.green,
    borderColor: COLORS.green,
  },
});
