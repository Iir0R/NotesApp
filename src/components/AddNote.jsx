import Button from "../components/Button";

const AddNote = ({ text, setText, handleAddNote, handleReset }) => {
  return (
    <form
      className="w-full flex flex-col mb-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <textarea
        className="mb-4 border-2 border-solid rounded-md p-2 h-60"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Kirjoita tähän..."
      ></textarea>
      <div className="flex place-content-between">
        <Button onClick={handleAddNote} label={"Lisää"} />
        <Button onClick={handleReset} label={"Uusi sessio"} />
      </div>
    </form>
  );
};

export default AddNote;
