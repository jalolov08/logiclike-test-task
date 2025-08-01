import {View} from 'react-native';
import {useCallback, useState} from 'react';
import styles from './style';
import ModalButton from '../../components/ModalButton';
import {useCourse} from '../../hooks/useCourse';
import {FlashList} from '@shopify/flash-list';
import Loader from '../../components/Loader';
import ErrorComponent from '../../components/Error';
import Course from '../../components/Course';
import TagsModal from '../../components/TagsModal';
import {CourseType} from '../../types/';

export default function Home() {
  const {
    filteredCourses,
    allTags,
    selectedTag,
    setSelectedTag,
    loading,
    error,
    refresh,
  } = useCourse();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalOpen = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const renderItem = useCallback(
    ({item}: {item: CourseType}) => <Course course={item} />,
    [],
  );
  const keyExtractor = useCallback((item: CourseType) => item.id, []);

  return (
    <View style={styles.container}>
      <ModalButton onPress={handleModalOpen} selectedTag={selectedTag} />
      {loading ? (
        <Loader text="Загружаем курсы..." />
      ) : error ? (
        <ErrorComponent
          error={error}
          showRetryButton={true}
          onRetry={refresh}
          retryButtonText="Попробовать снова"
        />
      ) : (
        <FlashList
          data={filteredCourses}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      )}

      <TagsModal
        isVisible={isModalVisible}
        tags={allTags}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        onClose={handleModalClose}
      />
    </View>
  );
}
