import { createSlice } from "@reduxjs/toolkit";

const NOTES_URL = "";

const initialState = {
  notes: [
    {
      id: 0,
      text: "add lisää",
      course: {
        id: 0,
        name: "versionhallinta",
      },
      timestamp: "2022-10-23 13:13:13",
    },
    {
      id: 1,
      text: "commit tallenta",
      course: {
        id: 0,
        name: "versionhallinta",
      },
      timestamp: "2022-10-23 13:33:47",
    },
    {
      id: 2,
      text: "push työntää muutokset remoteen",
      course: {
        id: 0,
        name: "versionhallinta",
      },
      timestamp: "2022-10-24 13:53:18",
    },
    {
      id: 3,
      text: "talar du svenska",
      course: {
        id: 2,
        name: "ruotsi",
      },
      timestamp: "2022-11-01 08:23:12",
    },
  ],
  status: "idle",
  error: null,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    deleteNote(state, action) {
      const filteredNotes = state.notes.filter(
        (note) => note.id !== action.payload
      );
      state.notes = filteredNotes;
    },
  },
  extraReducers: (builder) => {},
});

export const selectNotes = (state) => state.notes.notes;
export const getNotesStatus = (state) => state.notes.status;
export const getNotesError = (state) => state.notes.error;

export const { deleteNote } = notesSlice.actions;

export default notesSlice.reducer;
