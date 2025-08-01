import React, {useCallback} from 'react';
import {Modal, View, TouchableOpacity, FlatList} from 'react-native';
import Typography from '../Typography';
import {COLORS} from '../../constants/colors';
import styles from './style';
import Tag from '../Tag';
import Icon, {Icons} from '../Icon';
import {TagsModalProps} from '../../types/';

const TagsModal = ({
  isVisible,
  tags,
  selectedTag,
  setSelectedTag,
  onClose,
}: TagsModalProps) => {
  const handleTagPress = (tag: string) => {
    setSelectedTag(tag);
    onClose();
  };

  const renderItem = useCallback(
    ({item}: {item: string}) => (
      <Tag
        name={item}
        isSelected={selectedTag === item}
        onPress={() => handleTagPress(item)}
      />
    ),
    [selectedTag, handleTagPress],
  );

  return (
    <Modal
      visible={isVisible}
      transparent={false}
      animationType="slide"
      supportedOrientations={['landscape']}
      onRequestClose={onClose}>
      <View style={styles.container}>
        <Typography
          variant="h5"
          weight="bold"
          color={COLORS.dark}
          align="center">
          Выберите тему
        </Typography>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Icon
            name="x"
            size={24}
            color={COLORS.lightTeal}
            type={Icons.Feather}
          />
        </TouchableOpacity>
        <FlatList
          data={tags}
          renderItem={renderItem}
          keyExtractor={item => item}
          contentContainerStyle={styles.tagContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Modal>
  );
};

export default TagsModal;
