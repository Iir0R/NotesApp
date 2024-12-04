import { Link } from "react-router-dom";

const NavigationLink = ({ link, label }) => {
  return (
    <li>
      <Link to={link}>{label}</Link>
    </li>
  );
};

export default NavigationLink;
