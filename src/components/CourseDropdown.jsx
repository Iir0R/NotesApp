import { useSelector } from "react-redux";
import { selectCourses } from "../features/coursesSlice";
import CourseOption from "./CourseOption";

const CourseDropdown = ({ option, setCurrent, setCourseId, disabled }) => {
  const courses = useSelector(selectCourses);

  const listCourses = courses.map((course) => (
    <CourseOption
      key={course.id}
      course={course}
      selectName={setCurrent}
      selectId={setCourseId}
    />
  ));

  return (
    <div>
      <p>Kurssi:</p>
      <select disabled={disabled}>
        {option}
        {listCourses}
      </select>
    </div>
  );
};

export default CourseDropdown;
