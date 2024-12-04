import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../features/notesSlice";
import coursesReducer from "../features/coursesSlice";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    courses: coursesReducer,
  },
});
