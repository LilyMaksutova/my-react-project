import React, { useState } from 'react';
import { Layout, theme, Input, Button, List, Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Content } = Layout;

function Notes() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [newNote, setNewNote] = useState('');
  const [notes, setNotes] = useState([]);

  function addNote() {
    if (!newNote) {
      alert('Введите заметку');
      return;
    }

    const note = {
      id: Math.floor(Math.random() * 400),
      value: newNote,
    };

    setNotes((oldList) => [...oldList, note]);
    setNewNote('');
  }

  function deleteNote(id) {
    const arr = notes.filter((note) => note.id !== id);
    setNotes(arr);
  }

  return (
    <Content
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
        background: colorBgContainer,
      }}
    >
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
                onClick={() => deleteNote(note.id)}
              >
                <CloseOutlined />
              </button>{' '}
            </Typography.Text>
          </List.Item>
        )}
      />

      <form
        style={{
          display: 'grid',
          gridTemplateColumns: '4fr 1fr',
          gap: '20px',
          alignItems: 'center',
        }}
      >
        <TextArea
          rows={4}
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <Button type="primary" onClick={() => addNote()}>
          Добавить
        </Button>
      </form>
    </Content>
  );
}

export default Notes;
