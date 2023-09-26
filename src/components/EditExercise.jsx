/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Button, Form, Input, Select } from 'antd';

function EditExercise() {
  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 14,
    },
  };

  const buttonItemLayout = {
    wrapperCol: {
      span: 14,
      offset: 4,
    },
  };
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Упражнение</h2>
      <Form {...formItemLayout} layout="horizontal" form={form}>
        <Form.Item label="Наименование">
          <Input placeholder="Название" />
        </Form.Item>
        <Form.Item label="Ссылка">
          <Input placeholder="Ссылка на видео" />
        </Form.Item>
        <Form.Item label="Описание">
          <Input.TextArea placeholder="Описание" />
        </Form.Item>
        <Form.Item label="Основная группа мышц">
          <Select>
            <Select.Option value="demo">Выпадашка</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary">Сохранить</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default EditExercise;
