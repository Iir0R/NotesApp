import Button from "../components/Button";

const AddNote = ({ text, setText, handleAddNote, handleReset }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <Button onClick={handleAddNote} label={"Lisää"} />
      <Button onClick={handleReset} label={"Uusi sessio"} />
    </form>
  );
};

export default AddNote;
