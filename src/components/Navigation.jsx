import { useSelector } from "react-redux";
import NavigationLink from "./NavigationLink";
import { selectCourses } from "../features/coursesSlice";

const Navigation = () => {
  const courses = useSelector(selectCourses);
  const disabled = courses.length < 1 ? null : "create";

  return (
    <nav>
      <ul className="flex gap-6">
        <NavigationLink link={"/"} label={"Etusivu"} />
        <NavigationLink link={disabled} label={"Lisää muistiinpanoja"} />
        <NavigationLink link={"notes"} label={"Muistiinpanot"} />
        <NavigationLink link={"courses"} label={"Lisää kursseja"} />
      </ul>
    </nav>
  );
};

export default Navigation;
