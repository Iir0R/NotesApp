import { useDispatch } from "react-redux";
import Button from "./Button";
import { deleteNote } from "../features/notesSlice";

const ListItem = ({ note }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };

  return (
    <li className="border-2 border-solid border-neutral-800 bg-white rounded-md p-2">
      <div className="text-neutral-700 text-sm flex place-content-between">
        {note.timestamp} - {note.course.name}, id: {note.course.id}
        <Button onClick={() => handleDelete(note.id)} label={"Poista"} />
      </div>
      <p>{note.text}</p>
    </li>
  );
};

export default ListItem;
