import { useSelector } from "react-redux";
import { selectCourses } from "../features/coursesSlice";
import CourseOption from "./CourseOption";

const CourseDropdown = ({ option, setCurrent }) => {
  const courses = useSelector(selectCourses);

  const listCourses = courses.map((course) => (
    <CourseOption
      key={course.id}
      course={course}
      select={(e) => setCurrent(e.target.value)}
    />
  ));

  return (
    <div>
      <p>Kurssi:</p>
      <select>
        {option}
        {listCourses}
      </select>
    </div>
  );
};

export default CourseDropdown;
