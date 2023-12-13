/* eslint-disable no-plusplus */
import React /*  { useState } */ from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { addProgram, updateProgram} from '../store/programs.store';

function ProgramEdit() {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams();
  const { programList } = useSelector((store) => store.programs);
  const editProgram = programList.filter(
    (program) => program.id === params.id
  )[0];

  const initialValues = editProgram || {};

  console.log(editProgram)
  // добавить условие, которое буде вызывать создание новой сущности, либо обновление существующей
  const onFinishHandler = (formData) => {
    if (editProgram?.id)  { // editProgram && editProgram.id
    dispatch(updateProgram({...editProgram, ...formData}))}
    else {
    dispatch(addProgram({...formData, id: uuidv4()})) 
    }
  };


  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 8,
      }}
      initialValues={initialValues}
      onFinish={onFinishHandler}
      onFinishFailed={null}
      autoComplete="off"
    >
      <Form.Item label="Наименование" name="name">
        <Input />
      </Form.Item>
      <Form.Item label="Направление" name="direction">
        <Input />
      </Form.Item>
      <Form.Item label="Описание" name="description">
        <Input />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        {location.pathname.split('/').includes('edit') ? (
          <Link to={`/programs/${editProgram.id}/trainingDays`}>
            Настроить дни тренировок
          </Link>
        ) : (
          ''
        )}
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default ProgramEdit;
