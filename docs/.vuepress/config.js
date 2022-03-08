// * 一个VuePress网站必要的配置文件是.vuepress/config.js
module.exports = {
    title: 'FZYT',
    description: 'A fantastic blog',
    head: [
      ['link',{rel:'icon',href:'/image/logo.png'}]
    ],
    port:8080,
    // * 侧边栏分组
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'JS', link: '/js/',
          items: [
            { text: 'node', link: '/js/node/',
              items: [
                { text: '官方文档学习', link: '/js/node/document/frame' },
              ]
            },
          ]
        },
        { text: 'CSS', link: '/css/',
          items: [
            { text: '基础知识', link: '/css/base/priotiy/' },
            { text: '奇技淫巧', link: '/css/specific/20220222/' }
          ]
        },
        { text: 'TS', link: '/ts/why/'},
        {
          text: '前端框架', link: '/fe-frame/',
          items: [
            { text: 'vue', link: '/fe-frame/vue/',
              items: [
                { text: 'vue', link: '/fe-frame/vue/vue/' },
                { text: 'vue-router', link: '/fe-frame/vue/vue-router/install/' }
              ]
            },
            { text: 'react', link: '/fe-frame/react/',
              items: [
                { text: 'Hook', link: '/fe-frame/react/Hook/' },
              ]
            },
          ]
        },
        {
          text: 'leetcode', link: '/leetcode/',
          items: [
            { text: '链表', link: '/leetcode/listNode/',
              items: [
                { text: '2.两数相加', link: '/leetcode/listNode/2' },
              ]
            },
            { text: '滑动窗口', link: '/leetcode/window/',
              items: [
                { text: '3.无重复字符的最长子串', link: '/leetcode/window/3' },
              ]
            },
            { text: '前缀和', link: '/leetcode/prefix-sum/',
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
            { text: '基础', link: '/open-source/base/',
              items: [
                { text: 'ssh 配置', link: '/open-source/base/ssh-config' },
              ]
            },
          ]
        },
        {
          text: '其他', link: '/others/',
          items: [
            { text: '服务器', link: '/others/server/',
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
        '/js/node/document/': [
          { title: '整体结构', path: '/js/node/document/frame'},
        ],
        '/ts/': [
          { title: 'why', path: '/ts/why/'},
          { title: '类型和类型运算', path: '/ts/base/'},
          { title: '套路一', path: '/ts/one/'},
        ],
        '/leetcode/listNode/': [
          { title: '2.两数相加', path: '/leetcode/listNode/2'},
        ],
        '/leetcode/window/': [
          { title: '3.无重复字符的最长子串', path: '/leetcode/window/3' },
        ],
        '/leetcode/prefix-sum/': [
          { title: '238. 除自身以外数组的乘积', path: '/leetcode/prefix-sum/238' },
          { title: '2100. 适合打劫银行的日子', path: '/leetcode/prefix-sum/2100' },
        ],
        '/vue/vue-router/': [
          { title: 'install', path: '/vue/vue-router/install/'},
          { title: 'new VueRouter(options)', path: '/vue/vue-router/VueRouter/'},
          { title: 'HashHistory', path: '/vue/vue-router/HashHistory/'},
        ],
        '/css/base/': [
          { title: 'priotiy', path: '/css/base/priotiy/'},
          { title: 'color', path: '/css/base/color/'},
        ],
        '/css/specific/': [
          { title: '动态炫彩边框', path: '/css/specific/20220222/'},
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