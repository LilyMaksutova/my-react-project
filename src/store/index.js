import { configureStore } from '@reduxjs/toolkit';
import programReducer from './programs.store';
import trainingDaysReducer from './trainingDays.store';
import exercisesReducer from './exercise.store';

import notesReducer from './notes.store';

const store = configureStore({
  reducer: {
    notes: notesReducer,
    programs: programReducer,
    trainingDays: trainingDaysReducer,
    exercises: exercisesReducer,
  },
});

export default store;
