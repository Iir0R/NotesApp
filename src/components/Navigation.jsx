import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"create"}>Create Notes</Link>
        </li>
        <li>
          <Link to={"notes"}>View Notes</Link>
        </li>
        <li>
          <Link to={"courses"}>Create Courses</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
