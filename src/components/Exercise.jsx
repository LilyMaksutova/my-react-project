import React from 'react';
import { Divider, Button } from 'antd';
import Approaches from './Approaches';

function Exercise() {
  return (
    <div>
      <Divider orientation="left">Тренировки</Divider>
      <Approaches />
      <Approaches />
      <div style={{ textAlign: 'center' }}>
        <Button>Завершить тренировку</Button>
      </div>
    </div>
  );
}

export default Exercise;
