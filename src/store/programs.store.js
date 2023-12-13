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
    direction: 'direction-2',
    description: 'description-2',
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
    
    updateProgram(state,action) {
      // state.programList.filter(program => program.id !== action.payload.id).concat([action.payload]) самое простое решение
      const result = [];
      state.programList.forEach(program => program.id !== action.payload.id ? result.push(program) : result.push(action.payload))
      return {
        ...state,
        programList: result
      };
    },

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

export const { deleteProgram, addProgram, makeProgramActive, updateProgram } =
  programSlice.actions;
export default programSlice.reducer;
