import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

function ApproachesBtn() {
  return (
    <div>
      <Button>
        <Link to="/timer/">Готово</Link>
      </Button>
    </div>
  );
}

export default ApproachesBtn;
