// * 一个VuePress网站必要的配置文件是.vuepress/config.js
module.exports = {
  title: 'FZYT',
  description: 'A fantastic blog',
  theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  head: [
    [
      'script', {}, `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?14f438f040699e0c206571e9c07a4adb";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      </script>
      `
    ],
    ['link', { rel: 'icon', href: '/image/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.png', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'baidu-site-verification', content: 'code-RQvUAi3H3W' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
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
    ],
    [
      "vuepress-plugin-nuggets-style-copy", {
        copyText: "复制代码",
        tip: {
          content: "复制成功"
        }
      }
    ],
    [
      'copyright',
      {
        authorName: 'FZYT', // 选中的文字将无法被复制
        minLength: 20, // 如果长度超过  30 个字符
      },
    ],
    // [
    //   '@vuepress-reco/vuepress-plugin-bgm-player',
    //   {
    //     audios: [
    //       {
    //         name: 'Lemon',
    //         artist: '米津玄師',
    //         url: 'https://www.ytmp3.cn/down/75600.mp3',
    //         cover: 'https://t15.baidu.com/it/u=3016151325,4032277337&fm=179&app=42&size=w931&n=0&f=JPEG&fmt=auto?s=A1D1CB3065535A6514481D5E0300E0F1&sec=1647190800&t=5771af9d1b8ec91be98753a0c2c9d1a4'
    //       }
    //     ],
    //     // 是否默认缩小
    //     autoShrink: true,
    //     // 缩小时缩为哪种模式
    //     shrinkMode: 'float',
    //     // 悬浮窗样式
    //     floatStyle: { bottom: '10px', 'z-index': '999999' }
    //   }
    // ],
    [
      'cursor-effects', {
        size: 2, // size of the particle, default: 2
        shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
      }
    ],
    [
      'dynamic-title',
      {
        showIcon: '/image/favicon.ico',
        showText: '客官欢迎回来~',
        hideIcon: '/image/favicon.ico',
        hideText: '客官不要走嘛~',
        recoverTime: 2000,
      }
    ],
    [
      '@vssue/vuepress-plugin-vssue', {
        platform: 'github',
        owner: 'Lucas-Fan',
        repo: 'vuepress_blog_web',
        clientId: '901f3c7de293636a6d90',
        clientSecret: '0708089775c83b80eb32a5c1f83c04c8f449b588',
      },
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          return new Date(timestamp).toLocaleDateString()
        }
      }
    ],
    [
      'sitemap', {
        hostname: 'https://fzyt.fun'
      }
    ],
    ['seo', {
      siteTitle: (_, $site) => 'FZYT',
      title: $page => $page.title,
      description: $page => $page.frontmatter.description,
      author: (_, $site) => 'FZYT',
      type: $page => 'article',
      url: (_, $site, path) => 'https://fzyt.fun' + path,
      image: ($page, $site) => "/image/favicon.ico",
      publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
      modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
    }],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-222722871-1'
      }
    ],
  ],
  port: 8080,
  // * 侧边栏分组
  themeConfig: {
    lastUpdated: '上次更新',
    subSidebar: 'auto',
    // valineConfig: {
    //   appId: 'R9J1bEH1DcjanKtHTcIPGi9F-9Nh9j0Va',// your appId
    //   appKey: 'HRmkGEmcJYfFIPxOH9A6qP53', // your appKey
    // },
    // vssueConfig: {
    //   platform: 'github',
    //   owner: 'Lucas-Fan',
    //   repo: 'vuepress_blog_web',
    //   clientId: '901f3c7de293636a6d90',
    //   clientSecret: '0708089775c83b80eb32a5c1f83c04c8f449b588',
    // },
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'JS', link: '/js/',
        items: [
          {
            text: '基础', link: '/js/base/',
            items: [
              { text: '原型和原型链', link: '/js/base/prototype' },
              { text: '词法作用域和动态作用域', link: '/js/base/scope' },
              { text: '执行上下文栈', link: '/js/base/context-stack' },
              { text: '变量对象', link: '/js/base/vo' },
              { text: '作用域链', link: '/js/base/scope-chain' },
              { text: 'this', link: '/js/base/this' },
              { text: '闭包', link: '/js/base/closure' },
              { text: '按值传递', link: '/js/base/param' },
              { text: 'call 和 apply', link: '/js/base/call-apply' },
              { text: 'bind', link: '/js/base/bind' },
              { text: 'new', link: '/js/base/new' },
              { text: '类数组', link: '/js/base/link-array' },
            ]
          },
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
          {
            text: '后续遍历', link: '/leetcode/LRD/',
            items: [
              { text: '590. N 叉树的后序遍历', link: '/leetcode/LRD/590' },
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
      '/js/base/': [
        { title: '原型和原型链', path: '/js/base/prototype' },
        { title: '词法作用域和动态作用域', path: '/js/base/scope' },
        { title: '执行上下文栈', path: '/js/base/context-stack' },
        { title: '变量对象', path: '/js/base/vo' },
        { title: '作用域链', path: '/js/base/scope-chain' },
        { title: 'this', path: '/js/base/this' },
        { title: '闭包', path: '/js/base/closure' },
        { title: '按值传递', path: '/js/base/param' },
        { title: 'call 和 apply', path: '/js/base/call-apply' },
        { title: 'bind', path: '/js/base/bind' },
        { title: 'new', path: '/js/base/new' },
        { title: '类数组', path: '/js/base/link-array' },
      ],
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
      '/leetcode/LRD/': [
        { title: '590. N 叉树的后序遍历', path: '/leetcode/LRD/590' },
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