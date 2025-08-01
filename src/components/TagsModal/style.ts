import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    paddingTop: 24,
  },
  tagContainer: {
    marginVertical: 18,
    paddingBottom: 40,
    width: 335,
  },
  closeButton: {
    position: 'absolute',
    top: 24,
    right: 24,
  },
});
