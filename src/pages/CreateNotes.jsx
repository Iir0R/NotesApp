import { useEffect, useState } from "react";
import AddNote from "../components/AddNote";
import CourseDropdown from "../components/CourseDropdown";
import Title from "../components/Title";
import { useDispatch, useSelector } from "react-redux";
import {
  addNote,
  fetchNotes,
  getNotesStatus,
  selectNotes,
} from "../features/notesSlice";

const CreateNotes = () => {
  const [current, setCurrent] = useState("");
  const [courseId, setCourseId] = useState("");
  const [newNotes, setNewNotes] = useState([]);
  const [text, setText] = useState("");
  const [session, setSession] = useState(false);

  const dispatch = useDispatch();

  const notes = useSelector(selectNotes);
  const status = useSelector(getNotesStatus);

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

  const handleAddNote = () => {
    if (current === "" || text === "") return null;
    if (session === false) setSession(true);
    let id = notes[notes.length - 1].id + 1;
    let timestamp = new Date().toJSON().slice(0, 10);
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
          setCurrent={setCurrent}
          setCourseId={setCourseId}
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
