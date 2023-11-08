/* eslint-disable no-plusplus, react/jsx-props-no-spreading */

import React /*  { useState } */ from 'react';
import { useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import { Form, Input, Button, Select} from 'antd';
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';


function TrainingDayEdit() {
  const { trainingDays } = useSelector((store) => store.trainingDays);
  const { exercises } = useSelector((store) => store.exercises);
  const {id: programId} = useParams();
  const filterTrainingDays = trainingDays.filter(
    (trainingDay) => {
      const result = trainingDay.programId === programId;
      
     
      return result;
    }
  )[0];

  const initialValues = filterTrainingDays || {};
  

    console.log(initialValues);

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
      onFinish={null}
      onFinishFailed={null}
      autoComplete="off">
      <Form.Item label="Название дня" name="name">
        <Input />
      </Form.Item>
      <Form.Item label="Описание дня" name="description">
        <Input />
      </Form.Item>
      <Form.List
        name="exercises"    
      >
        {(fields, { add, remove }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item               
                label={index === 0 ? 'Упражнения' : ''}
                required={false}
                key={field.key}
              >
                <Form.Item
                  {...field}                               
                  noStyle
                >
                  <Select 
                    placeholder="Упражнение"
                    name='exerciseType'
                    style={{
                      width: '33%',
                    }}
                  > 
                  {exercises.map((exercise) => 
                     <Select.Option value={exercise.id} key={exercise.id}>{exercise.name}</Select.Option>
                  )}
                  </Select>
                
                </Form.Item> 
                <Form.Item
                  {...field}                               
                  noStyle
                >
                  <Input
                    placeholder="Подходы"
                    name='sets'
                    style={{
                      width: '33%',
                    }}
                  />
                </Form.Item>  
                <Form.Item
                  {...field}                               
                  noStyle
                >
                  <Input
                    placeholder="Повторения"
                    name='reps'
                    style={{
                      width: '33%',
                    }}
                  />
                </Form.Item> 
                {fields.length > 1 ? (
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  />
                ) : null}
              </Form.Item>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{
                  width: '60%',
                }}
                icon={<PlusOutlined />}
              >
                Добавить упражнение
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form>
    
  )
}

export default TrainingDayEdit;
