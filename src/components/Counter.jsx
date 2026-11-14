import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      padding: '15px',
      border: '2px dashed #3eaf7c',
      borderRadius: '8px',
      textAlign: 'center',
      margin: '15px 0',
      backgroundColor: 'var(--ifm-card-background-color)'
    }}>
      <p style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 10px 0' }}>
        敲木魚功德數：{count}
      </p>
      <button 
        style={{
          padding: '8px 16px',
          backgroundColor: '#3eaf7c',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px'
        }}
        onClick={() => setCount(count + 1)}
      >
        叩！功德 +1
      </button>
    </div>
  );
}

