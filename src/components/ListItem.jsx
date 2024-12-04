import { useDispatch } from "react-redux";
import Button from "./Button";
import { deleteNote } from "../features/notesSlice";

const ListItem = ({ note }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };

  return (
    <li>
      <Button onClick={() => handleDelete(note.id)} label={"x"} />
      <div>
        {note.timestamp} - {note.course.name}, id: {note.course.id}
      </div>
      <p>{note.text}</p>
    </li>
  );
};

export default ListItem;
