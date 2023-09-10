import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Space } from 'antd';

function Today() {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Сегодня</h2>
      <Space
        wrap
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '30px',
          gap: '30px',
        }}
      >
        <Button type="primary" ghost>
          <Link to="/notes/">Начать тренировку</Link>
        </Button>
        <Button type="primary" ghost>
          <Link to="/notes/">Отдых</Link>
        </Button>
        <Button type="primary" ghost>
          Болезнь
        </Button>
      </Space>
    </div>
  );
}

export default Today;
