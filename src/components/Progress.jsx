import React from 'react';
import TrainingCalendar from './TrainingCalendar';
import Today from './Today';

function Progress() {
  return (
    <div>
      <TrainingCalendar />
      <Today />
    </div>
  );
}

export default Progress;
