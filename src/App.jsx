import React from 'react';
import 'antd/dist/reset.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout, theme } from 'antd';
import Sider from 'antd/es/layout/Sider';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Notes from './components/Notes';
import Blogs from './components/Blogs';
import Blog from './components/Blog';

// import blogList from './data';

const { Header } = Layout;
const { Content } = Layout;

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
          <Content
            style={{
              // padding: 24,
              margin: 0,
              // minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {/* <Notes /> */}
          </Content>
          <Routes>
            <Route path="notes" element={<Notes />} />
            <Route exact path="/blogs/" element={<Blogs />} />
            <Route path="/blogs/:id" element={<Blog />} />
          </Routes>
        </Layout>
      </Layout>
    </Layout>
  );
}
export default App;
