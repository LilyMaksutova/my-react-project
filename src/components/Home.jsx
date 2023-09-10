import React from 'react';
import { useSelector } from 'react-redux';
import PostPreview from './PostPreview';
import blogList from '../blogData';
import Today from './Today';

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
        <Today />
      </article>
    </div>
  );
}

export default Home;
