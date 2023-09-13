/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Button, Form, Input, Select } from 'antd';

function EditExercise() {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Упражнение</h2>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}
        style={{
          maxWidth: formLayout === 'inline' ? 'none' : 600,
        }}
      >
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
