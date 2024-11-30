import { useSelector } from "react-redux";
import { selectCourses } from "../features/courses/coursesSlice";
import CourseOption from "./CourseOption";

const SelectCourse = ({ option, setCurrent }) => {
  const courses = useSelector(selectCourses);

  const handleSelect = (e) => {
    setCurrent(e.target.value);
  };

  const listCourses = courses.map((course) => (
    <CourseOption key={course.id} course={course} handleSelect={handleSelect} />
  ));

  return (
    <select>
      {option}
      {listCourses}
    </select>
  );
};

export default SelectCourse;
