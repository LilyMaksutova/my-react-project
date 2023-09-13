import React from 'react';
import { Link } from 'react-router-dom';

import {
  ReadOutlined,
  EditOutlined,
  DashboardOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem([
    <Link to="/">
      <HomeOutlined style={{ marginRight: '20px' }} />
      Домой
    </Link>,
  ]),
  getItem([
    <Link to="/notes">
      <ReadOutlined style={{ marginRight: '20px' }} />
      Заметки
    </Link>,
  ]),
  getItem([
    <Link to="/blog">
      <EditOutlined style={{ marginRight: '20px' }} />
      Блог
    </Link>,
  ]),
  getItem([
    <Link to="/timer">
      <DashboardOutlined style={{ marginRight: '20px' }} />
      Таймер
    </Link>,
  ]),
  getItem([
    <Link to="/editex">
      <DashboardOutlined style={{ marginRight: '20px' }} />
      Редактировать упражнение
    </Link>,
  ]),
];

function Navbar() {
  return (
    <div>
      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        theme="dark"
        items={items}
      />
    </div>
  );
}

export default Navbar;
