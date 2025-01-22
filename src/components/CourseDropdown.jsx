import { useSelector } from "react-redux";
import { selectCourses } from "../features/coursesSlice";
import CourseOption from "./CourseOption";

const CourseDropdown = ({ option, current, setCurrent, disabled }) => {
  const courses = useSelector(selectCourses);

  const listCourses = courses.map((course) => (
    <CourseOption
      key={course.id}
      course={course}
    />
  ));

  return (
    <div className="flex gap-2 mb-4">
      <p className="text-neutral-800">Kurssi:</p>
      <select
        className="border-2 border-solid border-neutral-800 rounded-md p-1 bg-neutral-50"
        value={current}
        onChange={(e) => setCurrent(e.target.value)}
        disabled={disabled}
      >
        {option}
        {listCourses}
      </select>
    </div>
  );
};

export default CourseDropdown;
