import { createSlice } from '@reduxjs/toolkit';

const data = [
  {
    key: '1',
    id: 'program-1',
    name: 'Программа 1',
    direction: 'direction-1',
    description: 'description-1',
    isActive: false,
  },
  {
    key: '2',
    id: 'program-2',
    name: 'Программа 2',
    direction: '',
    description: '',
    isActive: true,
  },
  {
    key: '3',
    id: 'program-3',
    name: 'Программа 3',
    direction: '',
    description: '',
    isActive: false,
  },
];

const initialState = {
  programList: data,
};

const programSlice = createSlice({
  name: 'program',
  initialState,
  reducers: {
    deleteProgram(state, action) {
      return {
        ...state,
        programList: state.programList.filter(
          (program) => program.id !== action.payload.id
        ),
      };
    },
    addProgram(state, action) {
      return {
        ...state,
        programList: state.programList.concat(action.payload),
      };
    },
    // добавить метод обновления программы
    makeProgramActive(state, action) {
      return {
        ...state,
        programList: state.programList.map((program) => {
          if (program.isActive) {
            return { ...program, isActive: false };
          }
          if (!program.isActive && action.payload === program.id) {
            return { ...program, isActive: true };
          }
          return program; // никогда не будет достигнут
        }),
      };
    },
  },
});

export const { deleteProgram, addProgram, makeProgramActive } =
  programSlice.actions;
export default programSlice.reducer;
