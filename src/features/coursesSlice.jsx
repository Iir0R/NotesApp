import { createSlice } from "@reduxjs/toolkit";

const COURSES_URL = "";

const initialState = {
  courses: [
    {
      id: 0,
      name: "versionhallinta",
    },
    {
      id: 1,
      name: "java",
    },
    {
      id: 2,
      name: "ruotsi",
    },
    {
      id: 3,
      name: "ohjelmointi 1",
    },
  ],
  status: "idle",
  error: null,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
});

export const selectCourses = (state) => state.courses.courses;
export const getCoursesStatus = (state) => state.courses.status;
export const getCoursesError = (state) => state.courses.error;

export default coursesSlice.reducer;
