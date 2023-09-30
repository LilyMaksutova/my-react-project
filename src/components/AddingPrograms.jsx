import React from 'react';
import { Link } from 'react-router-dom';

function AddingProgramms() {
  return (
    <div style={{ marginTop: '40px', display: 'flex', gap: '325px' }}>
      <Link to="/programs/add">+ добавить программу</Link>
      <p>Ваши программы</p>
    </div>
  );
}

export default AddingProgramms;
