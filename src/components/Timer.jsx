import React, { useEffect, useState, useRef } from 'react';
import { Button, Space } from 'antd';

function Timer({ restTimeInSecs = 15 }) {
  const [seconds, setSeconds] = useState(0);
  const interval = useRef(null);
  const minutes = Math.floor(seconds / 60);

  const start = (deadline) => {
    clearInterval(interval.current);
    interval.current = setInterval(() => {
      const timeDiffInSecs = (deadline - Date.now()) / 1000;

      if (timeDiffInSecs < 0) {
        clearInterval(interval.current);
        setSeconds(0);
      } else {
        setSeconds(Math.round(timeDiffInSecs));
      }
    }, 1000);
  };

  const stop = () => {
    clearInterval(interval.current);
  };

  useEffect(() => {
    if (restTimeInSecs) {
      start(Date.now() + restTimeInSecs * 1000);
    }

    return () => clearInterval(interval.current);
  }, []);

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
      <h1 style={{ fontSize: '70px' }}>{`${
        minutes < 10 ? String(0) + minutes : minutes
      } : ${
        seconds % 60 < 10 ? String(0) + (seconds % 60) : seconds % 60
      }`}</h1>

      <Space wrap>
        <Button type="primary" onClick={stop}>
          Стоп
        </Button>
      </Space>
    </div>
  );
}

export default Timer;
