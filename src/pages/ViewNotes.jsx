import { useState } from "react";
import PageTitle from "../components/PageTitle";
import SelectCourse from "../components/SelectCourse";
import { useSelector } from "react-redux";
import { selectNotes } from "../features/notes/notesSlice";
import ListItem from "../components/ListItem";

const ViewNotes = () => {
  const [current, setCurrent] = useState("kaikki");

  const notes = useSelector(selectNotes);

  const all = (
    <option onClick={(e) => setCurrent(e.target.value)} value={"kaikki"}>
      Kaikki
    </option>
  );

  let listNotes;
  if (current === "kaikki") {
    listNotes = notes.map((note) => <ListItem key={note.id} note={note} />);
  } else {
    const filteredNotes = notes.filter((note) => note.course.name === current);
    listNotes = filteredNotes.map((note) => (
      <ListItem key={note.id} note={note} />
    ));
  }

  return (
    <section>
      <PageTitle title={"Muistiinpanot"} />
      <p>Kurssi:</p>
      <SelectCourse option={all} setCurrent={setCurrent} />
      <ul>{listNotes}</ul>
    </section>
  );
};

export default ViewNotes;
