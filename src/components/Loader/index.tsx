import {ActivityIndicator, View} from 'react-native';
import styles from './style';
import Typography from '../Typography';
import {COLORS} from '../../constants/colors';
import {LoaderProps} from '../../types/';

const Loader = ({text}: LoaderProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.white} />
      <Typography color={COLORS.white} weight="bold" variant="body">
        {text}
      </Typography>
    </View>
  );
};

export default Loader;
