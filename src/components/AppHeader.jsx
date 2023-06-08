import React from 'react';
import { Layout } from 'antd';
// import HeaderTitle from './HeaderTitle';

const { Header } = Layout;

function AppHeader() {
  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* <HeaderTitle title="Notes Page" /> */}
    </Header>
  );
}

export default AppHeader;
