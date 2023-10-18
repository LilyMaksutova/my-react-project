import React from 'react';
import { useSelector } from 'react-redux';
import Tables from './Tables';

function Programs() {
  const getProgramsSelector = (state) => state.programs.programList;
  const programs = useSelector(getProgramsSelector);
  const activeProgram = programs.filter((program) => program.isActive)[0];

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h2>Ваша текущая программа</h2>
        <h3>{activeProgram.name}</h3>
        <Tables />
        <Tables />
      </div>
    </div>
  );
}

export default Programs;
