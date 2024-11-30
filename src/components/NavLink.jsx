import { Link } from "react-router-dom";

const NavLink = ({ link, label }) => {
  return (
    <li>
      <Link to={link}>{label}</Link>
    </li>
  );
};

export default NavLink;
