import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Table, Space, Button } from 'antd';
import { deleteTrainingDay} from '../store/trainingDays.store';

function TrainingDayTable() {
  const { trainingDays } = useSelector((store) => store.trainingDays);
  const {id: programId} = useParams();
  const filterTrainingDays = trainingDays.filter(
    (trainingDay) => {
      const result = trainingDay.programId === programId;
      return result;
    }
  );

  const dispatch = useDispatch();

  const deleteHandler = (trainingDayId, progId) => (e) => {
    e.preventDefault();
    dispatch(deleteTrainingDay({ trainingDayId, programId: progId}));
  };

  const navigate = useNavigate();

  const goToNew = () => {
    navigate(`/programs/${programId}/trainingDays/add`)
  }

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
      <Button onClick={goToNew}> Добавить новый тренировочный день</Button>
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
