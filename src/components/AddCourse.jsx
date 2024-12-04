import Button from "./Button";

const AddCourse = ({ name, setName, handleAddCourse }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Kurssin nimi..."
      />
      <Button onClick={handleAddCourse} label={"Lisää kurssi"} />
    </form>
  );
};

export default AddCourse;
