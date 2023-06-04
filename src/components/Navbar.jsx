import React from 'react';
import {
  HomeOutlined,
  ReadOutlined,
  RiseOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

const { Sider } = Layout;

function Navbar() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider
      width={300}
      style={{
        background: colorBgContainer,
      }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['']}
        style={{
          height: '100%',
          borderRight: 0,
        }}
        items={[
          { label: 'Домой', key: '1', icon: <HomeOutlined /> },
          {
            label: 'Тренировки и прогресс',
            key: '2',
            icon: <RiseOutlined />,
          },
          { label: 'Заметки', key: '3', icon: <ReadOutlined /> },
          { label: 'Блог', key: '4', icon: <EditOutlined /> },
        ]}
      />
    </Sider>
  );
}

export default Navbar;
