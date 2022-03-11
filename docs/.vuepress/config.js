// * 一个VuePress网站必要的配置文件是.vuepress/config.js
module.exports = {
  title: 'FZYT',
  description: 'A fantastic blog',
  head: [
    ['link', { rel: 'icon', href: '/image/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/image/logo.png' }],
    ['link', { rel: 'mask-icon', href: '/image/logo.png', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/image/logo.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    ]
  ],
  port: 8080,
  // * 侧边栏分组
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'JS', link: '/js/',
        items: [
          {
            text: 'es6', link: '/js/es6/',
            items: [
              { text: 'let const', link: '/js/es6/letConst' },
              { text: '变量解构赋值', link: '/js/es6/Destructuring' },
              { text: 'Set Map', link: '/js/es6/setMap' },
            ]
          },
          {
            text: 'node', link: '/js/node/',
            items: [
              { text: '官方文档学习', link: '/js/node/document/frame' },
            ]
          },
          {
            text: 'promise', link: '/js/promise/',
            items: [
              { text: 'promise', link: '/js/promise/base/promise' },
            ]
          },
        ]
      },
      {
        text: 'CSS', link: '/css/',
        items: [
          { text: '基础知识', link: '/css/base/priotiy/' },
          { text: '奇技淫巧', link: '/css/specific/20220222/' }
        ]
      },
      { text: 'TS', link: '/ts/why/' },
      {
        text: '前端框架', link: '/fe-frame/',
        items: [
          {
            text: 'vue', link: '/fe-frame/vue/',
            items: [
              { text: 'vue', link: '/fe-frame/vue/vue/' },
              { text: 'vue-router', link: '/fe-frame/vue/vue-router/install/' }
            ]
          },
          {
            text: 'react', link: '/fe-frame/react/',
            items: [
              { text: 'Hook', link: '/fe-frame/react/Hook/' },
            ]
          },
        ]
      },
      {
        text: 'leetcode', link: '/leetcode/',
        items: [
          {
            text: '链表', link: '/leetcode/listNode/',
            items: [
              { text: '2.两数相加', link: '/leetcode/listNode/2' },
            ]
          },
          {
            text: '滑动窗口', link: '/leetcode/window/',
            items: [
              { text: '3.无重复字符的最长子串', link: '/leetcode/window/3' },
            ]
          },
          {
            text: '前缀和', link: '/leetcode/prefix-sum/',
            items: [
              { text: '238. 除自身以外数组的乘积', link: '/leetcode/prefix-sum/238' },
              { text: '2100. 适合打劫银行的日子', link: '/leetcode/prefix-sum/2100' },
            ]
          },
        ]
      },
      {
        text: '开源', link: '/open-source/',
        items: [
          {
            text: '基础', link: '/open-source/base/',
            items: [
              { text: 'ssh 配置', link: '/open-source/base/ssh-config' },
            ]
          },
        ]
      },
      {
        text: '其他', link: '/others/',
        items: [
          {
            text: '服务器', link: '/others/server/',
            items: [
              { text: 'jenkins 安装与删除', link: '/others/server/jenkins' },
              { text: 'jenkins 配置自动化部署前端工程', link: '/others/server/deploy-web' },
            ]
          },
        ]
      },
      { text: 'Github', link: 'https://github.com/Lucas-Fan' },
    ],
    sidebar: {
      // '/': [
      //   { title: 'Home', path: '/' },
      //   { title: 'CSS', path: '/css/' },
      //   { title: 'JS', path: '/js/'},
      // ],
      '/js/es6/': [
        { title: 'let const', path: '/js/es6/letConst' },
      ],
      '/js/node/document/': [
        { title: '整体结构', path: '/js/node/document/frame' },
      ],
      '/js/promise/base/': [
        { title: 'promise', path: '/js/promise/base/promise' },
      ],
      '/ts/': [
        { title: 'why', path: '/ts/why/' },
        { title: '类型和类型运算', path: '/ts/base/' },
        { title: '套路一', path: '/ts/one/' },
      ],
      '/leetcode/listNode/': [
        { title: '2.两数相加', path: '/leetcode/listNode/2' },
      ],
      '/leetcode/window/': [
        { title: '3.无重复字符的最长子串', path: '/leetcode/window/3' },
      ],
      '/leetcode/prefix-sum/': [
        { title: '238. 除自身以外数组的乘积', path: '/leetcode/prefix-sum/238' },
        { title: '2100. 适合打劫银行的日子', path: '/leetcode/prefix-sum/2100' },
      ],
      '/vue/vue-router/': [
        { title: 'install', path: '/vue/vue-router/install/' },
        { title: 'new VueRouter(options)', path: '/vue/vue-router/VueRouter/' },
        { title: 'HashHistory', path: '/vue/vue-router/HashHistory/' },
      ],
      '/css/base/': [
        { title: 'priotiy', path: '/css/base/priotiy/' },
        { title: 'color', path: '/css/base/color/' },
      ],
      '/css/specific/': [
        { title: '动态炫彩边框', path: '/css/specific/20220222/' },
      ],
    }
  },
  // * 对 webpack 进行配置
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'image'
      }
    }
  }
}