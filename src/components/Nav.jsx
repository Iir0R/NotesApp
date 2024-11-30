import NavLink from "./NavLink";

const Nav = () => {
  return (
    <nav>
      <ul>
        <NavLink link={"/"} label={"Home"} />
        <NavLink link={"create"} label={"Create"} />
        <NavLink link={"notes"} label={"Notes"} />
        <NavLink link={"courses"} label={"Courses"} />
      </ul>
    </nav>
  );
};

export default Nav;
