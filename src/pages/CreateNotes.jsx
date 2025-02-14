import { useEffect, useState } from "react";
import AddNote from "../components/AddNote";
import CourseDropdown from "../components/CourseDropdown";
import Title from "../components/Title";
import { useDispatch, useSelector } from "react-redux";
import { addNote, fetchNotes, getNotesStatus, selectNotes, } from "../features/notesSlice";
import { selectCourses } from "../features/coursesSlice";

const CreateNotes = () => {
  const [current, setCurrent] = useState("");
  const [newNotes, setNewNotes] = useState([]);
  const [text, setText] = useState("");
  const [session, setSession] = useState(false);

  const dispatch = useDispatch();

  const notes = useSelector(selectNotes);
  const status = useSelector(getNotesStatus);
  const courses = useSelector(selectCourses)

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNotes());
    }
  }, [status, dispatch]);

  const listNotes = newNotes.map((note) => (
    <li
      className="border-2 border-solid border-neutral-800 bg-white rounded-md p-2"
      key={note.id}
    >
      {note.text}
    </li>
  ));

  const option = (
    <option value={""} onClick={(e) => setCurrent(e.target.value)}></option>
  );

  const getTimestamp = () => {
    const formatTime = (number) => {
      return number < 10 ? "0" + number : number;
    };

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = formatTime(date.getHours());
    let minutes = formatTime(date.getMinutes());
    let seconds = formatTime(date.getSeconds());
    let newDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return newDate;
  };

  const getCourseId = () => {
    let courseId = courses.find((course) => course.name === current);
    return courseId.id;
  };

  const handleAddNote = () => {
    if (!current || !text) return;
    if (!session) setSession(true);
    let id = notes[notes.length - 1].id + 1;
    let courseId = getCourseId()
    let timestamp = getTimestamp();
    let newNote = {
      id,
      text,
      course: { id: courseId, name: current },
      timestamp,
    };
    dispatch(addNote(newNote));
    setNewNotes([...newNotes, newNote]);
    setText("");
  };

  const handleReset = () => {
    setSession(false);
    setNewNotes([]);
  };

  return (
    <div className="flex flex-col place-items-center">
      <Title title={"Lisää muistiinpanoja"} />
      <div className="md:w-3/5 w-full">
        <CourseDropdown
          option={option}
          current={current}
          setCurrent={setCurrent}
          disabled={session}
        />
        <AddNote
          text={text}
          setText={setText}
          handleAddNote={handleAddNote}
          handleReset={handleReset}
        />
        {newNotes.length > 0 && (
          <ul className="flex flex-col gap-2">{listNotes}</ul>
        )}
      </div>
    </div>
  );
};

export default CreateNotes;
