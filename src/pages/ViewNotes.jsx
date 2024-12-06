import { useDispatch, useSelector } from "react-redux";
import CourseDropdown from "../components/CourseDropdown";
import Title from "../components/Title";
import {
  fetchNotes,
  getNotesStatus,
  selectNotes,
} from "../features/notesSlice";
import { useEffect, useState } from "react";
import ListItem from "../components/ListItem";

const ViewNotes = () => {
  const [current, setCurrent] = useState("kaikki");

  const dispatch = useDispatch();

  const notes = useSelector(selectNotes);
  const status = useSelector(getNotesStatus);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNotes());
    }
  }, [status, dispatch]);

  const option = (
    <option value={"kaikki"} onClick={(e) => setCurrent(e.target.value)}>
      Kaikki
    </option>
  );

  let listNotes;
  if (current === "kaikki") {
    if (notes.length < 1) {
      listNotes = <p>Ei muistiinpanoja!</p>;
    } else {
      listNotes = notes.map((note) => <ListItem key={note.id} note={note} />);
    }
  } else {
    const filteredNotes = notes.filter((note) => note.course.name === current);
    if (filteredNotes.length < 1) {
      listNotes = <p>Ei muistiinpanoja!</p>;
    } else {
      listNotes = filteredNotes.map((note) => (
        <ListItem key={note.id} note={note} />
      ));
    }
  }

  return (
    <div>
      <Title title={"Muistiinpanot"} />
      <CourseDropdown
        option={option}
        setCurrent={setCurrent}
        setCourseId={null}
      />
      <ul>{listNotes}</ul>
    </div>
  );
};

export default ViewNotes;
