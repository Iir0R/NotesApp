const ListItem = ({ note }) => {
  return (
    <li>
      <div>
        {note.timestamp} - {note.course.name} id: {note.course.id}
      </div>
      <p>{note.text}</p>
    </li>
  );
};

export default ListItem;
