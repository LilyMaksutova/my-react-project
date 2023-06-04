import React from 'react';
import 'antd/dist/reset.css';
import './App.css';

import { Layout } from 'antd';
import AppHeader from './components/AppHeader';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Notes from './components/Notes';

function App() {
  return (
    <Layout>
      <AppHeader />
      <Layout>
        <Navbar />
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Info />
          <Notes />
        </Layout>
      </Layout>
    </Layout>
  );
}
export default App;
