import NavigationLink from "./NavigationLink";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <NavigationLink link={"/"} label={"Etusivu"} />
        <NavigationLink link={"create"} label={"Lisää muistiinpanoja"} />
        <NavigationLink link={"notes"} label={"Muistiinpanot"} />
        <NavigationLink link={"courses"} label={"Lisää kursseja"} />
      </ul>
    </nav>
  );
};

export default Navigation;
