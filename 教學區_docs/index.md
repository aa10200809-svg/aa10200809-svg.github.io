---
title: 教學區
sidebar_label: 教學區
---

# 教學區

歡迎大家來到教學區！<br/>
目前這裡有 Markdown、HTML、CSS、MDX 的教學，快來看看！

---

<div className="row margin-top--lg" style={{ display: 'flex', alignItems: 'stretch' }}>
  {/* 第一張卡片 */}
  <div className="col col--6 margin-bottom--lg" style={{ display: 'flex' }}>
    <div className="card shadow--md" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <div className="card__header">
        <span className="badge badge--primary margin-bottom--xs">基礎篇</span>
        <h3 className="margin-top--xs">01. MD / HTML 基礎篇</h3>
      </div>
      <div className="card__body" style={{ flexGrow: 1 }}>
        <p>
          介紹最常用的 Markdown 語法、基礎 HTML 應用。
        </p>
      </div>
      <div className="card__footer">
        <a 
          className="button button--primary button--block button--lg" 
          style={{ fontSize: '1rem', fontWeight: 'bold' }} 
          href="/blog/my-blog-7/31"
        >
          閱讀文章
        </a>
      </div>
    </div>
  </div>

  {/* 第二張卡片 */}
  <div className="col col--6 margin-bottom--lg" style={{ display: 'flex' }}>
    <div className="card shadow--md" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <div className="card__header">
        <span className="badge badge--primary margin-bottom--xs">實戰篇</span>
        <h3 className="margin-top--xs">02. MDX 實戰篇</h3>
      </div>
      <div className="card__body" style={{ flexGrow: 1 }}>
        <p>
          學習如何在 MDX 檔案中引入 React 組件與編寫 Inline JSX。
        </p>
      </div>
      <div className="card__footer">
        <a 
          className="button button--primary button--block button--lg" 
          style={{ fontSize: '1rem', fontWeight: '500' }} 
          href="/blog/my-blog-8/9"
        >
          閱讀文章
        </a>
      </div>
    </div>
  </div>
</div>