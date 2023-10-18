import { configureStore } from '@reduxjs/toolkit';
import programReducer from './programs.store';
import trainingDaysReducer from './trainingDays.store';

import notesReducer from './notes.store';

const store = configureStore({
  reducer: {
    notes: notesReducer,
    programs: programReducer,
    trainingDays: trainingDaysReducer,
  },
});

export default store;
