import React from 'react';
import { Table, Space } from 'antd';

function ProgramTable() {
  const columns = [
    {
      dataIndex: 'name',
    },
    {
      dataIndex: 'operation',
      render: () => (
        <Space size="middle">
          <a href="/">Сделать текущей</a>
          <a href="/">Edit</a>
          <a href="/">Delete</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'Программа 1',
    },
    {
      key: '3',
      name: 'Программа 3',
    },
  ];
  return (
    <div>
      <Table
        pagination={false}
        style={{ display: 'flex ', justifyContent: 'space-between' }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
}

export default ProgramTable;
