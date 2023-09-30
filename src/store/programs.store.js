import { createSlice } from '@reduxjs/toolkit';

const data = [
  {
    key: '1',
    name: 'Программа 1',
  },
  {
    key: '3',
    name: 'Программа 3',
  },
];

const initialState = {
  programList: data,
};

const programSlice = createSlice({
  name: 'program',
  initialState,
  reducers: {
    deleteProgram: () => console.log('delete'),
    addProgram(state, action) {
      return {
        ...state,
        programList: state.programList.concat(action.payload),
      };
    },
  },
});

export const { deleteProgram, addProgram } = programSlice.actions;
export default programSlice.reducer;
