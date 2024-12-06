import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const COURSES_URL =
  "https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    try {
      const response = await axios.get(COURSES_URL);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  courses: [],
  status: "idle",
  error: null,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse(state, action) {
      state.courses.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.courses = action.payload;
    });
  },
});

export const selectCourses = (state) => state.courses.courses;
export const getCoursesStatus = (state) => state.courses.status;
export const getCoursesError = (state) => state.courses.error;

export const { addCourse } = coursesSlice.actions;

export default coursesSlice.reducer;
