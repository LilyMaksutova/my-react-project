import React, { useEffect, useRef, useState } from 'react';
import { Button, Space } from 'antd';

function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(5);
  let timer = useRef();

  const start = () => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);

      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }

      if (minutes === 0 && seconds === 0) {
        setHours(hours - 1);
        setMinutes(59);
      }

      if (hours === 0 && minutes === 0 && seconds === 0) {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);
  };

  useEffect(() => {
    start();
    return () => clearInterval(timer);
  });

  const reset = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  const stop = () => {
    clearInterval(timer);
  };

  const restart = () => {};

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
      <h1>
        {hours < 10 ? `0${hours}` : hours}:
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </h1>

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
          onClick={reset}
          style={{ backgroundColor: 'red' }}
        >
          Сброс
        </Button>
        <Button type="primary" onClick={stop}>
          Стоп
        </Button>
        <Button
          type="primary"
          style={{ backgroundColor: 'orange' }}
          onClick={restart}
        >
          Перезапуск
        </Button>
      </Space>
    </div>
  );
}

export default Timer;
