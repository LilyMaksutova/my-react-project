/* eslint-disable no-plusplus */
import React /*  { useState } */ from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addProgram } from '../store/programs.store';

function ProgramEdit() {
  const dispatch = useDispatch();
  const onFinishHandler = (formData) => {
    dispatch(addProgram(formData));
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
