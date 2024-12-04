import { useState } from "react";
import AddCourse from "../components/AddCourse";
import Title from "../components/Title";
import { useDispatch, useSelector } from "react-redux";
import { addCourse, selectCourses } from "../features/coursesSlice";

const CreateCourses = () => {
  const [name, setName] = useState("");
  const [newCourse, setNewCourse] = useState("");

  const dispatch = useDispatch();

  const courses = useSelector(selectCourses);

  const handleAddCourse = () => {
    let id = courses[courses.length - 1].id + 1;
    let course = { id, name };
    setNewCourse(course);
    dispatch(addCourse(course));
    setName("");
  };

  return (
    <div>
      <Title title={"Lisää kursseja"} />
      <AddCourse
        name={name}
        setName={setName}
        handleAddCourse={handleAddCourse}
      />
      {newCourse && (
        <p>
          Opintojakso '{newCourse.name}' lisätty id:llä {newCourse.id}
        </p>
      )}
    </div>
  );
};

export default CreateCourses;
