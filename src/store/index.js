import { configureStore } from '@reduxjs/toolkit';

import notesReducer from './notes.store';

const store = configureStore({
    reducer: {
        notes: notesReducer,
    },
});

export default store;
