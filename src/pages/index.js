import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const styles = {};

export default function Home() {
  return (
    <Layout
      title="大家好 歡迎來到Ting Blog"
      description="渾渾噩噩的過日子 不如花點時間 創造屬於自己的東西">
      
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
        <p style={{ fontSize: '1.5rem', lineHeight: '2', color: '#000000' }}>
        日復一日 
        渾渾噩噩的過日子<br/>
        不如花點時間<br/>
        創造屬於自己的東西<br />
        </p>
        
        {/* 3. 網站區域列表 */}
        <div style={{ textAlign: 'left', marginTop: '4rem', borderTop: '1px solid #000000', paddingTop: '2rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#000000' }}>網站分為以下幾個區域：</h2>
          
          <div style={{marginBottom: '4rem'}} />

          {/* 最新貼文 區域 */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              <Link to="/blog" style={{ color: '#2e7d32', textDecoration: 'none', fontSize: '1.6rem' }}>
                最新貼文
              </Link>
            </h3>
            <p style={{ fontSize: '1.2rem', color: '#000000', paddingLeft: '1rem' }}> 
              最新鮮的貼文！！ 裡面有日常，希望你看過後能覺得開心，畢竟我的生活蠻可笑的
            </p>
          </div>

          {/* 列表 區域 */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              <Link to="/blog/archive" style={{ color: '#2e7d32', textDecoration: 'none', fontSize: '1.6rem' }}>
                列表
              </Link>
            </h3>
            <p style={{ fontSize: '1.2rem', color: '#000000', paddingLeft: '1rem' }}>所有寫過的文章，有些應該蠻水的</p>
          </div>

          {/* 樂譜 區域 */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              <Link to="/music" style={{ color: '#2e7d32', textDecoration: 'none', fontSize: '1.6rem' }}>
                樂譜
              </Link>
            </h3>
            <p style={{ fontSize: '1.2rem', color: '#000000', paddingLeft: '1rem' }}>
              這裡有我改編的流行音樂的樂譜，順便推廣鋼琴，希望大家都能從流行音樂中，找到彈鋼琴的樂趣
            </p>
          </div>

          {/* 名句 區域 */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              <Link to="/docs/首頁" style={{ color: '#2e7d32', textDecoration: 'none', fontSize: '1.6rem' }}>
                名句
              </Link>
            </h3>
            <p style={{ fontSize: '1.2rem', color: '#000000', paddingLeft: '1rem' }}>
              分享一些對我影響很深的語錄、名言，人生很長，不看點忠告，很快就會走不下去
            </p>
          </div>

          {/* 教學區 區域 */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              <Link to="/tutorial" style={{ color: '#2e7d32', textDecoration: 'none', fontSize: '1.6rem' }}>
                教學區
              </Link>
            </h3>
            <p style={{ fontSize: '1.2rem', color: '#000000', paddingLeft: '1rem' }}>
        一些自己整理的技術筆記與語法教學，寫得很簡單，快點擊看看！
            </p>
          </div>

        </div>

      </main>

    </Layout>
  );
}