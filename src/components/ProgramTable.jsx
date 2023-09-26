import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Space } from 'antd';
import { deleteProgram } from '../store/programs.store';

function ProgramTable() {
  const { programList } = useSelector((store) => store.programs);
  const dispatch = useDispatch();

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
          <button type="button" onClick={() => dispatch(deleteProgram())}>
            Delete
          </button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table
        pagination={false}
        style={{ display: 'flex ', justifyContent: 'space-between' }}
        columns={columns}
        dataSource={programList}
      />
    </div>
  );
}

export default ProgramTable;
