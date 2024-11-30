import Nav from "./components/Nav";
import CreateCourses from "./pages/CreateCourses";
import CreateNotes from "./pages/CreateNotes";
import Home from "./pages/Home";
import ViewNotes from "./pages/ViewNotes";
import Missing from "./pages/Missing";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <section>
      <header>
        <div>
          <Link to={"/"}>NoteApp</Link>
        </div>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create" element={<CreateNotes />} />
          <Route path="notes" element={<ViewNotes />} />
          <Route path="courses" element={<CreateCourses />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </main>
    </section>
  );
}

export default App;
