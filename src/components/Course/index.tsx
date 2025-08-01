import {View} from 'react-native';
import {CourseType} from '../../types/';
import styles from './style';
import FastImage from 'react-native-fast-image';
import Typography from '../Typography';
import {COLORS} from '../../constants/colors';
import {useMemo} from 'react';

const Course = ({course}: {course: CourseType}) => {
  const imageContainerStyle = useMemo(
    () => [styles.imageContainer, {backgroundColor: course.bgColor}],
    [course.bgColor],
  );

  return (
    <View style={styles.container}>
      <View style={imageContainerStyle}>
        <FastImage
          source={{uri: course.image, priority: FastImage.priority.high}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Typography
        variant="body"
        weight="extraBold"
        color={COLORS.darkSecondary}
        align="center">
        {course.name}
      </Typography>
    </View>
  );
};

export default Course;
