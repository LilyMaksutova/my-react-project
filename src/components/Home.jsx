import React from 'react';
import { Button, Space } from 'antd';
import { useSelector } from 'react-redux';

import PostPreview from './PostPreview';
import blogList from '../blogData';

// TODO: remove duplicates of selector
const getLastNoteSelector = (state) =>
  Object.values(state.notes.notes[state.notes.notes.length - 1] || {})[1];

function Home() {
  const elem = blogList[blogList.length - 1];
  const lastNote = useSelector(getLastNoteSelector);

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
