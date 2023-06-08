import React from 'react';
import {
  HomeOutlined,
  ReadOutlined,
  RiseOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

const { Sider } = Layout;
const homeLabel = 'Домой';
const workoutLabel = 'Тренировки и прогресс';
const notesLabel = 'Заметки';
const blogLabel = 'Блог';

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
          { label: homeLabel, key: '1', icon: <HomeOutlined /> },
          {
            label: workoutLabel,
            key: '2',
            icon: <RiseOutlined />,
          },
          { label: notesLabel, key: '3', icon: <ReadOutlined /> },
          { label: blogLabel, key: '4', icon: <EditOutlined /> },
        ]}
      />
    </Sider>
  );
}

export default Navbar;
