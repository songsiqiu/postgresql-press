import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'PostgreSQL Press',
  description: '参考 PostgreSQL 官方文档改造的新手友好中文站',
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    siteTitle: 'PostgreSQL Press',
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '新手路线', link: '/guide/' },
      { text: '官方目录', link: '/reference/' },
      { text: '翻译计划', link: '/project/translation-plan' },
      { text: '官方文档', link: 'https://www.postgresql.org/docs/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '先学会用',
          items: [
            { text: '学习路线', link: '/guide/' },
            { text: '基础入门', link: '/guide/getting-started' },
            { text: 'SQL 核心', link: '/guide/sql' },
            { text: '事务与并发', link: '/guide/transaction' },
            { text: '索引与性能', link: '/guide/performance' }
          ]
        }
      ],
      '/tutorial/': [
        {
          text: '官方教程中文改造',
          items: [
            { text: '总览', link: '/tutorial/' },
            { text: '从安装到第一条 SQL', link: '/tutorial/first-query' }
          ]
        }
      ],
      '/sql-language/': [
        {
          text: 'SQL 语言',
          items: [
            { text: '总览', link: '/sql-language/' },
            { text: '查询数据', link: '/sql-language/query' },
            { text: '数据定义', link: '/sql-language/ddl' },
            { text: '数据修改', link: '/sql-language/dml' }
          ]
        }
      ],
      '/server-admin/': [
        {
          text: '服务器管理',
          items: [
            { text: '总览', link: '/server-admin/' },
            { text: '安装与初始化', link: '/server-admin/setup' },
            { text: '备份与恢复', link: '/server-admin/backup' },
            { text: '权限与安全', link: '/server-admin/security' }
          ]
        }
      ],
      '/client-interfaces/': [
        {
          text: '客户端接口',
          items: [{ text: '总览', link: '/client-interfaces/' }]
        }
      ],
      '/server-programming/': [
        {
          text: '服务端编程',
          items: [{ text: '总览', link: '/server-programming/' }]
        }
      ],
      '/reference/': [
        {
          text: '官方目录映射',
          items: [
            { text: '总览', link: '/reference/' },
            { text: 'SQL 命令', link: '/reference/sql-commands/' }
          ]
        }
      ],
      '/internals/': [
        {
          text: '内部原理',
          items: [{ text: '总览', link: '/internals/' }]
        }
      ],
      '/appendix/': [
        {
          text: '附录',
          items: [
            { text: '总览', link: '/appendix/' },
            { text: '术语表', link: '/appendix/glossary' }
          ]
        }
      ],
      '/project/': [
        {
          text: '项目说明',
          items: [
            { text: '翻译计划', link: '/project/translation-plan' },
            { text: '翻译规范', link: '/project/style-guide' }
          ]
        }
      ]
    },
    footer: {
      message: '参考 PostgreSQL 官方文档，改造成更适合新手学习的中文站点。',
      copyright: 'PostgreSQL Press'
    },
    editLink: {
      pattern: 'https://github.com/songsiqiu/postgresql-press/edit/main/docs/:path',
      text: '编辑此页'
    },
    outline: [2, 3],
    search: {
      provider: 'local'
    },
    socialLinks: []
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }]
  ]
})
