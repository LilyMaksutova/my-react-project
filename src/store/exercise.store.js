import { createSlice } from '@reduxjs/toolkit';

const data = [
  {
    id: 1,
    name: 'Приседания', 
  },
  {
    id: 2,
    name: 'Отжимания', 
  },
  {
    id: 3,
    name: 'Подтягивания', 
  },
];

const initialState = {
  exercises: data,
};

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {
    
  },
});

// export const { } = exercisesSlice.actions;
export default exercisesSlice.reducer;
