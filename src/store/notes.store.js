import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: [],
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote(state, action) {
      return {
        ...state,
        notes: state.notes.concat(action.payload),
      };
    },
    deleteNote(state, action) {
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    },
  },
});

export const notesActions = notesSlice.actions;

export default notesSlice.reducer;
