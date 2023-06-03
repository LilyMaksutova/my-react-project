import React from 'react';
import 'antd/dist/reset.css';
import './App.css';

import {
  HomeOutlined,
  ReadOutlined,
  RiseOutlined,
  EditOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, Typography, Avatar } from 'antd';

const { Title, Text } = Typography;
const { Header, Content, Sider } = Layout;

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Title level={1} style={{ color: 'white' }}>
          Home Page
        </Title>
      </Header>
      <Layout>
        <Sider
          width={300}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={[
              { label: 'Домой', key: '1', icon: <HomeOutlined /> },
              {
                label: 'Тренировки и прогресс',
                key: '2',
                icon: <RiseOutlined />,
              },
              { label: 'Заметки', key: '3', icon: <ReadOutlined /> },
              { label: 'Блог', key: '4', icon: <EditOutlined /> },
            ]}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <div
            style={{
              margin: '16px 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>LOGO</div>
            <div
              style={{
                gap: '10px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Avatar icon={<UserOutlined />} />
              <Text>username</Text>
            </div>
          </div>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
export default App;

// import Header from './components/Header';
// import Navbar from './components/Navbar';
// import Info from './components/Info';
// import Notes from './components/Notes';
// function App() {
//   return (
//     <div className="wrapper">
//       <Header />
//       <Info />
//       <Navbar />
//       <Notes />
//     </div>
//   );
// }

// export default App;
