import { useState } from "react";
import PageTitle from "../components/PageTitle";
import UserInput from "../components/UserInput";
import { useDispatch, useSelector } from "react-redux";
import { addCourse, selectCourses } from "../features/courses/coursesSlice";

const CreateCourses = () => {
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const [newCourse, setNewCourse] = useState({});

  const dispatch = useDispatch();

  const courses = useSelector(selectCourses);

  const handleAddCourse = () => {
    let id = courses[courses.length - 1].id + 1;
    dispatch(addCourse({ id, name }));
    setNewCourse({ id, name });
    setShow(true);
    setName("");
  };

  return (
    <section>
      <PageTitle title={"Kurssit"} />
      <UserInput name={name} setName={setName} onClick={handleAddCourse} />
      {show === true ? (
        <p>
          opintojakso '{newCourse.name}' lisätty id:llä {newCourse.id}
        </p>
      ) : null}
    </section>
  );
};

export default CreateCourses;
