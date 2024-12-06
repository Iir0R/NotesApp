const Button = ({ onClick, label }) => {
  return (
    <button
      className="border-2 border-solid rounded-md border-neutral-800 text-neutral-800 bg-neutral-50 p-1 max-w-fit hover:bg-neutral-300"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
