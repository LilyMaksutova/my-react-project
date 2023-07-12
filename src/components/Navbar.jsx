import React from 'react';
import { Link } from 'react-router-dom';

import { ReadOutlined, EditOutlined } from '@ant-design/icons';
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
    <Link to="/notes">
      <ReadOutlined style={{ marginRight: '20px' }} />
      Заметки
    </Link>,
  ]),
  getItem([
    <Link to="/blogs">
      <EditOutlined style={{ marginRight: '20px' }} />
      Блог
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
