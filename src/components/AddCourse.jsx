import Button from "./Button";

const AddCourse = ({ name, setName, handleAddCourse }) => {
  return (
    <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
      <input
        className="p-2 border-2 border-solid rounded-md mb-4"
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
