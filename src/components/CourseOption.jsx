const CourseOption = ({ course, select }) => {
  return (
    <option value={course.name} onClick={select}>
      {course.name}
    </option>
  );
};

export default CourseOption;
