import React from 'react';
import { Button, Space } from 'antd';
import { useSelector } from 'react-redux';

import PostPreview from './PostPreview';
import blogList from '../blogData';

// TODO: remove duplicates of selector
const getNotesSelector = (state) => state.notes.notes;

function Home() {
  const elem = blogList[blogList.length - 1];
  const notes = useSelector(getNotesSelector);
  // TODO: make a selector for that feature
  const lastNote = Object.values(notes[notes.length - 1] || {})[1];

  return (
    <div>
      <article>
        <PostPreview post={elem} />
      </article>
      <article style={{ margin: '40px' }}>{lastNote}</article>
      <article style={{ margin: '40px' }}>
        <h2 style={{ textAlign: 'center' }}>Сегодня</h2>
        <Space
          wrap
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30px',
            gap: '30px',
          }}
        >
          <Button type="primary" ghost>
            Начать тренировку
          </Button>
          <Button type="primary" ghost>
            Отдых
          </Button>
          <Button type="primary" ghost>
            Растяжка
          </Button>
          <Button type="primary" ghost>
            Болезнь
          </Button>
        </Space>
      </article>
    </div>
  );
}

export default Home;
