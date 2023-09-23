import React from 'react';
import { Divider, Button } from 'antd';
import Sets from './Sets';

function Exercise() {
  return (
    <div>
      <Divider orientation="left">Тренировки</Divider>
      <Sets />
      <Sets />
      <div style={{ textAlign: 'center' }}>
        <Button>Завершить тренировку</Button>
      </div>
    </div>
  );
}

export default Exercise;
