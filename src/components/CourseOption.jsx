const CourseOption = ({ course, selectName, selectId }) => {
  const handleSetValues = (e) => {
    selectName(e.target.value);
    if (selectId === null) return;
    selectId(course.id);
  };

  return (
    <option value={course.name} onClick={handleSetValues}>
      {course.name}
    </option>
  );
};

export default CourseOption;
