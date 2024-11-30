const CourseOption = ({ course, handleSelect }) => {
  return (
    <option onClick={handleSelect} value={course.name}>
      {course.name}
    </option>
  );
};

export default CourseOption;
