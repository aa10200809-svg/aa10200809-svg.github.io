import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="大家好 歡迎來到Ting Blog"
      description="k k k ">
      
      <main style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto',
      }}>
        {/* 1. 主標題 */}
        <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
         大家好 歡迎來到Ting Blog
        </h1>

        {/* 2. 心情文字 */}
        <p style={{ fontSize: '1.5rem', lineHeight: '2', color: '#c9b9b9' }}>
          雖然還不知道要寫什麼<br /> 
          但我想慢慢來<br />
          創造屬於自己的東西<br />
          剩下的之後再說
        </p>
        
        {/* 3. 網站區域列表 */}
        <div style={{ textAlign: 'left', marginTop: '4rem', borderTop: '1px solid #eee', paddingTop: '2rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#ffffff' }}>網站分為以下幾個區域：</h2>
          
          {/* 區域 1：Blog */}
          <div style={{ marginBottom: '2rem' }}>
           
       <Link to="/blog" style={{ color: '#00a3e0', textDecoration: 'none' ,fontSize: '1.6rem' }}>Blog</Link>
      
    
            <p style={{ fontSize: '1.2rem', color: '#ffffff', paddingLeft: '1rem' }}>
              我每天的日記，記錄一下人生
            </p>
          </div>

          {/* 區域 2：樂譜 */}
          <div style={{ marginBottom: '2rem' }}>
           
            <Link to="/music" style={{ color: '#dc9935', textDecoration: 'none' ,fontSize: '1.6rem' }}>樂譜</Link>
            <p style={{ fontSize: '1.2rem', color: '#ffffff', paddingLeft: '1rem' }}>
              存放我改編流行音樂的樂譜 敬請期待！！
            </p>
          </div>

           {/* 區域 3：動漫名言 */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              {/* 這裡把註解拿掉了，並且改了正確的路徑 */}
              <Link to="/docs/首頁" style={{ color: '#8bd76b', textDecoration: 'none',fontSize: '1.6rem'  }}>名句</Link>
            </h3>
            <p style={{ fontSize: '1.2rem', color: '#ffffff', paddingLeft: '1rem' }}>
              這裡分享一些對我影響很深的語錄、名言
            </p>
          </div>
        </div>

      </main>

    </Layout>
  );
}