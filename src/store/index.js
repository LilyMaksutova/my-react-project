import { configureStore } from '@reduxjs/toolkit';
import programReducer from './programs.store';

import notesReducer from './notes.store';

const store = configureStore({
  reducer: {
    notes: notesReducer,
    programs: programReducer,
  },
});

export default store;
