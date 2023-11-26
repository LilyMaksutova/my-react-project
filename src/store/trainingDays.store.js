import { createSlice } from '@reduxjs/toolkit';

const data = [
  {
    id: 'TrainingDayId-1',
    index: 1,
    name: 'Силовой вторник',
    description: 'Выполнение силовых упражнений',
    programId:'program-1',
    exercises: [{sets: 0, reps: 0, exerciseType: 0}]
  },
];

const initialState = {
  trainingDays: data,
};

const trainingDays = createSlice({
  name: 'trainingDay',
  initialState,
  reducers: {
    addTrainingDay() {
      // put your code here
      throw new Error('not implemented');
    },

    deleteTrainingDay(state, action) {
      return {
        ...state,
        trainingDays: state.trainingDays.filter((trainingDay) => 
          trainingDay.id === action.trainingDayId && trainingDay.programId === action.programId
        )
      }
      
    },
  },
});

export const { addTrainingDay, deleteTrainingDay } = trainingDays.actions;
export default trainingDays.reducer;
