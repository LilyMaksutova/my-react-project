/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Form, Input, Button, List, Typography, message } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { notesActions } from '../store/notes.store';

const { TextArea } = Input;

function Notes() {
  const dispatch = useDispatch();
  const getNotesSelector = (state) => state.notes.notes;
  const notes = useSelector(getNotesSelector);
  const addNoteHandler = (note) => dispatch(notesActions.addNote(note));

  function onFinish(formData) {
    if (!formData.noteText) {
      message.error('Введите заметку');
      return;
    }

    const note = {
      id: Math.floor(Math.random() * 400),
      value: formData.noteText,
    };

    addNoteHandler(note);
  }

  function deleteNoteHandler(id) {
    dispatch(notesActions.deleteNote(id));
  }

  return (
    <>
      <List
        style={{ marginBottom: '35px' }}
        dataSource={notes}
        renderItem={(note) => (
          <List.Item>
            <Typography.Text>
              {note.value}{' '}
              <button
                type="button"
                style={{ border: 'none' }}
                onClick={() => {
                  deleteNoteHandler(note.id);
                }}
              >
                <CloseOutlined />
              </button>{' '}
            </Typography.Text>
          </List.Item>
        )}
      />

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item label="Note Text" name="noteText">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Добавить
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default Notes;
