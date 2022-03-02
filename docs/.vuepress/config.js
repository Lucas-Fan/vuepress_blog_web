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
            { text: 'Chinese', link: '/language/chinese/' },
            { text: 'Japanese', link: '/language/japanese/' }
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
                { text: '2.两数相加', link: '/leetcode/listNode/2/' },
              ]
            },
            { text: '滑动窗口', link: '/leetcode/window/',
              items: [
                { text: '3.无重复字符的最长子串', link: '/leetcode/window/3/' },
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
        '/ts/': [
          { title: 'why', path: '/ts/why/'},
          { title: '类型和类型运算', path: '/ts/base/'},
          { title: '套路一', path: '/ts/one/'},
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