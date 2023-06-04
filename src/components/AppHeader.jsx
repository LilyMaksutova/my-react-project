import React from 'react';
import { Layout, Typography } from 'antd';

const { Title } = Typography;
const { Header } = Layout;

function AppHeader() {
  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Title level={1} style={{ color: 'white' }}>
        Home Page
      </Title>
    </Header>
  );
}

export default AppHeader;
