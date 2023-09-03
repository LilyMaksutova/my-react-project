import React, { useEffect, useState } from 'react';
import { Button, Space } from 'antd';

function Timer({ restTimeInSecs = 10 }) {
  const [seconds, setSeconds] = useState(0);
  const deadline = Date.now() + restTimeInSecs * 1000;

  const start = () => {
    const interval = setInterval(() => {
      const timeDiffInSecs = (deadline - Date.now()) / 1000;
      setSeconds(Math.round(timeDiffInSecs));

      if (timeDiffInSecs < 0) {
        clearInterval(interval);
      }
    }, 1000);
  };

  useEffect(start, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
        height: '100%',
      }}
    >
      <h1>{`${Math.floor(seconds / 60)} : ${seconds % 60} `}</h1>

      <Space wrap>
        <Button
          type="primary"
          onClick={start}
          style={{ backgroundColor: 'green' }}
        >
          Старт
        </Button>
        <Button
          type="primary"
          /* onClick={reset} */
          style={{ backgroundColor: 'red' }}
        >
          Сброс
        </Button>
        <Button type="primary" /* onClick={stop} */>Стоп</Button>
        <Button
          type="primary"
          style={{ backgroundColor: 'orange' }}
          /* onClick={restart} */
        >
          Перезапуск
        </Button>
      </Space>
    </div>
  );
}

export default Timer;
