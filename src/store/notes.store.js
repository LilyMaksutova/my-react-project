import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    notes: [],
};

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote(state, action) {
            state.notes.push(action.payload);
        },
        // deleteNote(state, action) {
        //     // deletion code here
        // }
    },
});

export const notesActions = notesSlice.actions;

export default notesSlice.reducer;
