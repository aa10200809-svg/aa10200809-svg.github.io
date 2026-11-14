import React, { useState, useEffect } from 'react';

export default function Password({ children, password, storageKey = 'unlocked_article' }) {
  const [inputPass, setInputPass] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  // 網頁載入時，檢查 sessionStorage 裡是不是已經解鎖過（同一個分頁有效）
  useEffect(() => {
    const savedAuth = sessionStorage.getItem(storageKey);
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, [storageKey]);

  const handleUnlock = (e) => {
    e.preventDefault();
    if (inputPass === password) {
      setIsAuthenticated(true);
      setError(false);
      // 驗證成功後，寫入 sessionStorage（關閉分頁後就會自動清除）
      sessionStorage.setItem(storageKey, 'true');
    } else {
      setError(true);
    }
  };

  if (isAuthenticated) {
    return <div style={{ marginTop: '2rem' }}>{children}</div>;
  }

  return (
    <div style={{
      width: '100%',
      maxWidth: '380px',
      aspectRatio: '1 / 1',
      margin: '3rem auto',
      padding: '2rem',
      borderRadius: '24px',
      backgroundColor: 'transparent',
      backgroundImage: 'linear-gradient(135deg, rgba(37, 99, 235, 0.28) 0%, rgba(29, 78, 216, 0.15) 100%)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(34, 94, 192, 0.25)',
      boxShadow: '0 20px 40px -15px rgba(59, 130, 246, 0.15), 0 0 20px rgba(59, 130, 246, 0.08)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      boxSizing: 'border-box'
    }}>
      <div style={{
        fontSize: '5.2rem',
        marginBottom: '0.75rem',
        lineHeight: '1'
      }}>
        🔐
      </div>

      <h3 style={{
        margin: '0 0 1rem 0',
        fontSize: '1.35rem',
        fontWeight: '700',
        letterSpacing: '-0.02em',
        color: 'var(--ifm-font-color-base)'
      }}>
        付費解鎖！
      </h3>

      <form onSubmit={handleUnlock} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <input
          type="password"
          value={inputPass}
          onChange={(e) => setInputPass(e.target.value)}
          placeholder="輸入密碼"
          style={{
            padding: '0.8rem 1rem',
            borderRadius: '16px',
            border: '2px solid rgba(59, 130, 246, 0.3)',
            backgroundColor: 'var(--ifm-background-color)',
            color: 'var(--ifm-font-color-base)',
            fontSize: '1.1rem',
            outline: 'none',
            textAlign: 'center',
            width: '100%',
            boxSizing: 'border-box',
            transition: 'border-color 0.2s, box-shadow 0.2s'
          }}
        />
        <button
          type="submit"
          style={{
            padding: '0.8rem 1rem',
            backgroundColor: '#3b82f6',
            color: '#ffffff',
            border: 'none',
            borderRadius: '12px',
            fontSize: '0.95rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'transform 0.1s, filter 0.2s',
            width: '100%',
            letterSpacing: '0.03em'
          }}
        >
          解鎖文章
        </button>
      </form>

      {error && (
        <p style={{
          color: 'var(--ifm-color-danger)',
          marginTop: '0.6rem',
          marginBottom: 0,
          fontSize: '0.8rem',
          fontWeight: '500'
        }}>
          密碼不正確
        </p>
      )}
    </div>
  );
}