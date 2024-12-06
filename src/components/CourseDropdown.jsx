import { useDispatch, useSelector } from "react-redux";
import {
  fetchCourses,
  getCoursesStatus,
  selectCourses,
} from "../features/coursesSlice";
import CourseOption from "./CourseOption";
import { useEffect } from "react";

const CourseDropdown = ({ option, setCurrent, setCourseId, disabled }) => {
  const dispatch = useDispatch();

  const courses = useSelector(selectCourses);
  const status = useSelector(getCoursesStatus);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCourses());
    }
  }, [status, dispatch]);

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
