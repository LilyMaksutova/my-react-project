import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

function SetsBtn() {
  return (
    <div>
      <Button>
        <Link to="/timer/">Готово</Link>
      </Button>
    </div>
  );
}

export default SetsBtn;
