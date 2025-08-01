import {COLORS} from '../../constants/colors';
import Typography from '../Typography';
import {View, TouchableOpacity} from 'react-native';
import Icon from '../Icon';
import {Icons} from '../Icon';
import styles from './style';
import {ErrorProps} from '../../types/';

const ErrorComponent = ({
  error,
  showIcon = true,
  showRetryButton = false,
  onRetry,
  retryButtonText = 'Повторить',
}: ErrorProps) => {
  return (
    <View style={styles.container}>
      {showIcon && (
        <View style={styles.iconContainer}>
          <Icon
            type={Icons.MaterialIcons}
            name="error-outline"
            color={COLORS.white}
            size={48}
          />
        </View>
      )}
      <View style={styles.textContainer}>
        <Typography
          color={COLORS.white}
          weight="bold"
          variant="body"
          align="center">
          {error}
        </Typography>
      </View>
      {showRetryButton && onRetry && (
        <TouchableOpacity
          style={styles.retryButton}
          onPress={onRetry}
          activeOpacity={0.7}>
          <Typography color={COLORS.white} weight="extraBold" variant="button">
            {retryButtonText}
          </Typography>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ErrorComponent;
