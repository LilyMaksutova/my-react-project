import React, { useState } from 'react';
import { Space, Input } from 'antd';

function Exercises() {
  const data = [
    { placeholder: 'Упражнение 1' },
    { placeholder: 'Упражнение 2' },
    { placeholder: 'Упражнение 3' },
  ];

  const [inputs, setInputs] = useState(data);

  const addInput = (input) => {
    setInputs([...inputs, input]);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '30px',
          marginBottom: '20px',
        }}
      >
        <h1>День 1</h1>
        <button type="button" style={{ border: '0' }} onClick={addInput}>
          +
        </button>
      </div>

      {inputs.map((input) => {
        const { placeholder } = input;
        return (
          <Space
            direction="vertical"
            style={{
              width: '25%',
            }}
          >
            <Input placeholder={placeholder} />
          </Space>
        );
      })}
    </>
  );
}

export default Exercises;
