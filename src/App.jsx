import React from 'react';
import 'antd/dist/reset.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Notes from './components/Notes';
import PostDetails from './components/PostDetails';
import Blog from './components/Blog';

// import Post from './components/Post';

const { Header } = Layout;

function App() {
  return (
    <Layout>
      <Header
        style={{
          background: 'lightgray',
        }}
      >
        <Info />
      </Header>
      <Layout hasSider>
        <Sider breakpoint="lg" style={{ minHeight: '100%' }}>
          <Navbar />
        </Sider>
        <Layout>
          <Routes>
            <Route path="notes" element={<Notes />} />
            <Route path="/blogs/" element={<Blog />} />
            <Route path="/blogs/:id" element={<PostDetails />} />
          </Routes>
        </Layout>
      </Layout>
    </Layout>
  );
}
export default App;
