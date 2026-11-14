// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  favicon: 'img/logo2.png',

  url: 'https://aa10200809-svg.github.io',
  baseUrl: '/',

  organizationName: 'aa10200809-svg',
  projectName: 'my-website',

  onBrokenLinks: 'ignore',

  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
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
          blogSidebarCount: 5,
          blogSidebarTitle: '最新文章',
          feedOptions: {
            type: ['rss', 'atom'],
            title: 'Ting Blog',
            description: '關於音樂、生活與技術的隨筆',
            copyright: `Copyright © ${new Date().getFullYear()} 林筠庭`,
            language: 'zh-Hant',
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
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorial',          
        path: '教學區_docs',   
        routeBasePath: 'tutorial', 
        sidebarPath: false, 
      },
    ], 
    [
[
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
      }),
    ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      headTags: [
        {
          tagName: 'link',
          attributes: {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/img/logo2.png?v=1',
          },
        },
      ],      
      image: 'img/logo2.png',
      colorMode: {
        defaultMode: 'light',
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
            label: '最新', 
            position: 'left'
          },
          {
            to: '/blog/archive', 
            label: '列表', 
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
            to: '/tutorial/',       
            position: 'left',
            label: '教學區', 
          },
          {
            to: '/about/',       
            position: 'left',
            label: '關於我', 
          },
        ],
      },
      footer: {
        style: 'light',
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
              {
                label: '教學區',
                to: '/tutorial',
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
              {
                label: 'RSS 訂閱',
                href: 'https://tingblog.is-a.dev/blog/rss.xml',
              },
            ],
          },
        ],
        
        copyright: `Copyright © ${new Date().getFullYear()} Ting.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.github,
      },
    }),
};

export default config;
