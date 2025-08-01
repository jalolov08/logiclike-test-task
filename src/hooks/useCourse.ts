import {useState, useEffect, useMemo} from 'react';
import api from '../api';
import {CourseType} from '../types/';
import {UseCourseReturn} from '../types/';

export const useCourse = (): UseCourseReturn => {
  const [courses, setCourses] = useState<CourseType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>('Все темы');

  const allTags = useMemo(() => {
    const tags = courses.flatMap(course => course.tags);
    return ['Все темы', ...Array.from(new Set(tags))];
  }, [courses]);

  const filteredCourses = useMemo(() => {
    if (selectedTag === 'Все темы') {
      return courses;
    }
    return courses.filter(course => course.tags.includes(selectedTag));
  }, [courses, selectedTag]);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await api.get('/docs/courses.json');
      setCourses(response.data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Ошибка при загрузке курсов',
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const refetch = () => {
    fetchCourses();
  };

  return useMemo(
    () => ({
      courses,
      filteredCourses,
      allTags,
      selectedTag,
      setSelectedTag,
      loading,
      error,
      refresh: refetch,
    }),
    [
      courses,
      filteredCourses,
      allTags,
      selectedTag,
      setSelectedTag,
      loading,
      error,
      refetch,
    ],
  );
};
