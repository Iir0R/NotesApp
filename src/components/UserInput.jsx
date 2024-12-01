import Button from "./Button";

const UserInput = ({ name, setName, onClick }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Kirjoita tähän..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button label={"Lisää kurssi"} onClick={onClick} />
    </form>
  );
};

export default UserInput;
