import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Space } from 'antd';
import { deleteProgram, makeProgramActive } from '../store/programs.store';

function ProgramTable() {
  const { programList } = useSelector((store) => store.programs);
  const dispatch = useDispatch();

  const makeActiveHandler = (id) => (e) => {
    e.preventDefault();
    dispatch(makeProgramActive(id));
  };

  const deleteProgramHandler = (id) => (e) => {
    e.preventDefault();
    dispatch(deleteProgram({ id }));
  };

  const makeActiveProgramComponent = (program) => (
    <a href="/" onClick={makeActiveHandler(program.id)}>
      Сделать текущей
    </a>
  );

  const columns = [
    {
      dataIndex: 'name',
    },
    {
      dataIndex: 'operation',
      render: (_text, program) => (
        <Space size="middle">
          {program.isActive ? '' : makeActiveProgramComponent(program)}
          <a href="/">Edit</a>
          <a href="/" onClick={deleteProgramHandler(program.id)}>
            Удалить
          </a>
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
