import React, { useState } from 'react';

export default function Quiz({ question, options, correctAnswerIndex, explanation }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleOptionClick = (index) => {
    if (submitted) return;
    setSelected(index);
  };

  const handleSubmit = () => {
    if (selected === null) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelected(null);
    setSubmitted(false);
  };

  return (
    <div style={{
      border: '1px solid var(--ifm-color-emphasis-300)',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px 0',
      backgroundColor: 'var(--ifm-card-background-color)'
    }}>
      {/* 題目 */}
      {question && (
        <h4 style={{ marginTop: 0, marginBottom: '12px', fontSize: '1.1rem' }}>
          {question}
        </h4>
      )}

      {/* 選項列表 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {options.map((option, idx) => {
          let optionBg = 'transparent';
          let borderColor = 'var(--ifm-color-emphasis-300)';

          if (selected === idx) {
            borderColor = 'var(--ifm-color-primary)';
            optionBg = 'var(--ifm-color-primary-lightest)';
          }

          if (submitted) {
            if (idx === correctAnswerIndex) {
              borderColor = 'var(--ifm-color-success)';
              optionBg = 'var(--ifm-color-success-lightest, rgba(0,200,0,0.1))';
            } else if (selected === idx) {
              borderColor = 'var(--ifm-color-danger)';
              optionBg = 'var(--ifm-color-danger-lightest, rgba(200,0,0,0.1))';
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleOptionClick(idx)}
              style={{
                textAlign: 'left',
                padding: '10px 14px',
                borderRadius: '6px',
                border: `2px solid ${borderColor}`,
                backgroundColor: optionBg,
                cursor: submitted ? 'default' : 'pointer',
                color: 'var(--ifm-font-color-base)',
                fontSize: '0.95rem',
                transition: 'all 0.2s',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>{option}</span>
              {submitted && idx === correctAnswerIndex && <span>🩵正確</span>}
              {submitted && selected === idx && idx !== correctAnswerIndex && <span>🥲錯誤</span>}
            </button>
          );
        })}
      </div>

      {/* 按鈕與結果提示 */}
      <div style={{ marginTop: '16px', display: 'flex', gap: '10px', alignItems: 'center' }}>
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={selected === null}
            style={{
              backgroundColor: selected === null ? '#ccc' : 'var(--ifm-color-primary)',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              padding: '6px 16px',
              cursor: selected === null ? 'not-allowed' : 'pointer',
              fontWeight: 'bold'
            }}
          >
            送出答案
          </button>
        ) : (
          <button
            onClick={handleReset}
            style={{
              backgroundColor: 'transparent',
              border: '1px solid var(--ifm-color-emphasis-500)',
              color: 'var(--ifm-font-color-base)',
              borderRadius: '4px',
              padding: '6px 12px',
              cursor: 'pointer'
            }}
          >
            重新作答
          </button>
        )}
      </div>

      {/* 解析區塊 */}
      {submitted && explanation && (
        <div style={{
          marginTop: '12px',
          paddingTop: '12px',
          borderTop: '1px dashed var(--ifm-color-emphasis-300)',
          color: 'var(--ifm-font-color-base)',
          fontSize: '0.9rem'
        }}>
          👍🏿<strong>解析：</strong>{explanation}
        </div>
      )}
    </div>
  );
}