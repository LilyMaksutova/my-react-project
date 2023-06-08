import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

function HeaderTitle(props) {
  const title = props;
  return (
    <Title level={1} style={{ color: 'white' }}>
      {title}
    </Title>
  );
}

export default HeaderTitle;
