import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Table, Space } from 'antd';
import { deleteTrainingDay } from '../store/trainingDays.store';

function TrainingDayTable() {
  console.log(132);
  const { trainingDays } = useSelector((store) => store.trainingDays);
  const {id: programId} = useParams();
  const filterTrainingDays = trainingDays.filter(
    (trainingDay) => {
      const result = trainingDay.programId === programId;
      return result;
    }
  )[0];

  const dispatch = useDispatch();

  const deleteHandler = (trainingDayId, progId) => (e) => {
    e.preventDefault();
    dispatch(deleteTrainingDay({ trainingDayId, programId: progId}));
  };

  const columns = [
    {
      dataIndex: 'name',
    },
    {
      dataIndex: 'description',
    },
    {
      dataIndex: 'operation',
      render: (_text, trainingDay) => (
        <Space size="middle"> 
          <Link to={`/programs/${programId}/trainingDays/${trainingDay.id}/edit`}>Edit</Link>
          <a href="/" onClick={deleteHandler(programId, trainingDay.id)}>
            Delete
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
        dataSource={filterTrainingDays}
      />
    </div>
  );
}

export default TrainingDayTable;
