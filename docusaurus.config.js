// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/logo2.png',

  future: {
    v4: true,
  },

  // 修正後的個人 GitHub Pages 網址與路徑
  url: 'https://aa10200809-svg.github.io',
  baseUrl: '/my-website/',

  // 修正後的個人專案設定（部署關鍵）
  organizationName: 'aa10200809-svg',
  projectName: 'my-website',

  onBrokenLinks: 'ignore',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs', 
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'music',          
        path: '新分頁_docs',   
        routeBasePath: 'music', 
        sidebarPath: './sidebars.js', 
      },
    ], 
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'about',          
        path: '關於我',   
        routeBasePath: 'about', 
        sidebarPath: false, 
      },
    ], 
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: '主頁',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo2.png',
        },
        items: [
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'
          },
          {
            to: '/music/',       
            position: 'left',
            label: '樂譜', 
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '名句',
          },
          {
            to: '/about/',       
            position: 'left',
            label: '關於我', 
          },
          {
            // 連導覽列右上角的 GitHub 連結也改成你自己的專案囉！
            href: 'https://github.com/aa10200809-svg/my-website',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '站內導覽',
            items: [
              {
                label: 'blog',
                to: '/blog',
              },
              {
                label: '樂譜',
                to: '/music',
              },
              {
                label: '名句',
                to: '/docs/首頁',
              },
            ],
          },
          {
            title: '社群媒體',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/tinglin_0809?utm_source=qr',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ting.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;