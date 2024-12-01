import { useDispatch } from "react-redux";
import Button from "./Button";
import { deleteNote } from "../features/notes/notesSlice";

const ListItem = ({ note }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const id = note.id;
    dispatch(deleteNote(id));
  };

  return (
    <li>
      <div>
        <Button label={"x"} onClick={handleDelete} />
        {note.timestamp} - {note.course.name} id: {note.course.id}
      </div>
      <p>{note.text}</p>
    </li>
  );
};

export default ListItem;
