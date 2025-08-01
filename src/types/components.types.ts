import {TouchableOpacityProps} from 'react-native';

export interface TagsModalProps {
  isVisible: boolean;
  tags: string[];
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
  onClose: () => void;
}

export interface ModalButtonProps extends TouchableOpacityProps {
  onPress?: () => void;
  disabled?: boolean;
  activeOpacity?: number;
  selectedTag?: string;
}

export interface ErrorProps {
  error: string;
  showIcon?: boolean;
  showRetryButton?: boolean;
  onRetry?: () => void;
  retryButtonText?: string;
}

export interface TagProps {
  name: string;
  isSelected: boolean;
  onPress: () => void;
}

export interface LoaderProps {
  text: string;
}
