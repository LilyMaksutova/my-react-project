import React from 'react';
import { List } from 'antd';
import ApproachesBtn from './ApproachesBtn';

function Approaches() {
  const data = ['Подход 1', 'Подход 2', 'Подход 3'];
  return (
    <div>
      <List
        style={{ marginBottom: '30px' }}
        header={<div>Упражнение</div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item style={{ display: 'flex' }}>
            {item}
            <ApproachesBtn />
          </List.Item>
        )}
      />
    </div>
  );
}

export default Approaches;
