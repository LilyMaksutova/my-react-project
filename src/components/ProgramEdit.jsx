/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { useDispatch } from 'react-redux';
import { addProgram } from '../store/programs.store';
import Exercises from './Exercises';

function ProgramEdit() {
  const dispatch = useDispatch();
  const onFinishHandler = (formData) => {
    dispatch(addProgram(formData));
  };

  const options = [
    { value: '1', label: '1 раз в неделю' },
    { value: '2', label: '2 раз в неделю' },
    { value: '3', label: '3 раз в неделю' },
    { value: '4', label: '4 раз в неделю' },
    { value: '5', label: '5 раз в неделю' },
    { value: '6', label: '6 раз в неделю' },
    { value: '7', label: '7 раз в неделю' },
  ];

  const [columns, setColumns] = useState(1);

  const handleChange = () => {
    options.map((option) => {
      const value = +option.value;
      return setColumns(value);
    });
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{}}
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
        <Form.Item label="Тренировочные дни" name="days">
          <Select
            defaultValue="1"
            style={{ width: 120 }}
            onChange={handleChange}
            options={options}
          />
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

      <Exercises />
    </>
  );
}

export default ProgramEdit;
