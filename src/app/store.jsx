import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../features/notes/notesSlice";
import coursesReducer from "../features/courses/coursesSlice";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    courses: coursesReducer,
  },
});
