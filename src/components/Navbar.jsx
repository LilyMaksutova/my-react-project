import React from 'react';
import {
  HomeOutlined,
  ReadOutlined,
  RiseOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';

const homeLabel = 'Домой';
const workoutLabel = 'Тренировки и прогресс';
const notesLabel = 'Заметки';
const blogLabel = 'Блог';

function Navbar() {
  return (
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
  );
}

export default Navbar;
