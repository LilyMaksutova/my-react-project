import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Typography, Avatar } from 'antd';

const { Text } = Typography;

function Info() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div>LOGO</div>
      <div
        style={{
          gap: '10px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Avatar icon={<UserOutlined />} />
        <Text>username</Text>
      </div>
    </div>
  );
}

export default Info;
