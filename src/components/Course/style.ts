import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: (width - 16 * 2 - 10) / 3.4,
    height: 214,
    marginBottom: 16,
    backgroundColor: COLORS.white,
    marginHorizontal: 9,
    borderRadius: 24,
    shadowColor: '#E5E8FE',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 6,
  },
  imageContainer: {
    width: '100%',
    height: 170,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  image: {
    width: 154,
    height: 154,
    borderRadius: 12,
  },
});
