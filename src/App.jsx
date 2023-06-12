import React from 'react';
import 'antd/dist/reset.css';
import './App.css';
import { Layout, theme } from 'antd';
import Sider from 'antd/es/layout/Sider';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Notes from './components/Notes';

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
        <Sider breakpoint="lg">
          <Navbar />
        </Sider>
        <Layout>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Notes />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
export default App;