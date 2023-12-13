import { createSlice } from '@reduxjs/toolkit';

const data = [
  {
    id: 'TrainingDayId-1',
    // index: 1,
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
    addTrainingDay(state, action) {
      return {
        ...state,
        trainingDays: state.trainingDays.concat({
          ...action.payload, 
          id: Math.floor(Math.random() * 400), 
          exercises: action.payload.exercises || [{sets: 0, reps: 0, exerciseType: 0}]
        }),
      };
    },

    deleteTrainingDay(state, action) {
      return {
        ...state,
        trainingDays: state.trainingDays.filter((trainingDay) => 
          trainingDay.id === action.trainingDayId && trainingDay.programId === action.programId
        )
      }
    

    },

    updateTrainingDay(state,action) {
      // state.programList.filter(program => program.id !== action.payload.id).concat([action.payload]) самое простое решение
      const result = [];
      state.trainingDays.forEach(trainingDay => trainingDay.id !== action.payload.id ? result.push(trainingDay) : result.push(action.payload))
      return {
        ...state,
        trainingDays: result
      };
    },
  },
});

export const { addTrainingDay, deleteTrainingDay, updateTrainingDay } = trainingDays.actions;
export default trainingDays.reducer;
