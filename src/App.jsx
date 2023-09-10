import React from 'react';
import 'antd/dist/reset.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Progress from './components/Progress';
import Notes from './components/Notes';
import PostDetails from './components/PostDetails';
import Blog from './components/Blog';
import Timer from './components/Timer';
import Home from './components/Home';

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
        <Sider breakpoint="lg">
          <Navbar />
        </Sider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="notes" element={<Notes />} />
            <Route path="/blog/" element={<Blog />} />
            <Route path="/blog/:id" element={<PostDetails />} />
            <Route path="/timer/" element={<Timer />} />
          </Routes>
        </Layout>
      </Layout>
    </Layout>
  );
}
export default App;
