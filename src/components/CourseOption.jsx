const CourseOption = ({ course }) => {
  return (
    <option value={course.name}>
      {course.name}
    </option>
  );
};

export default CourseOption;
