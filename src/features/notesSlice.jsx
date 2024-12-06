import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const NOTES_URL =
  "https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes";

export const fetchNotes = createAsyncThunk("notes/fetchNotes", async () => {
  try {
    const response = await axios.get(NOTES_URL);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

const initialState = {
  notes: [],
  status: "idle",
  error: null,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, action) {
      state.notes.push(action.payload);
    },
    deleteNote(state, action) {
      const filteredNotes = state.notes.filter(
        (note) => note.id !== action.payload
      );
      state.notes = filteredNotes;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotes.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.notes = action.payload;
    });
  },
});

export const selectNotes = (state) => state.notes.notes;
export const getNotesStatus = (state) => state.notes.status;
export const getNotesError = (state) => state.notes.error;

export const { addNote, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;
