import {CourseType} from './course.type';

export interface UseCourseReturn {
  courses: CourseType[];
  filteredCourses: CourseType[];
  allTags: string[];
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
  loading: boolean;
  error: string | null;
  refresh: () => void;
}
