import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateNotes from "./pages/CreateNotes";
import ViewNotes from "./pages/ViewNotes";
import CreateCourses from "./pages/CreateCourses";
import Navigation from "./components/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCourses, getCoursesStatus } from "./features/coursesSlice";

function App() {
  const dispatch = useDispatch();

  const status = useSelector(getCoursesStatus);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCourses());
    }
  }, [status, dispatch]);

  return (
    <>
      <header>
        <Link to={"/"}>NotesApp</Link>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create" element={<CreateNotes />} />
          <Route path="notes" element={<ViewNotes />} />
          <Route path="courses" element={<CreateCourses />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
