// * 一个VuePress网站必要的配置文件是.vuepress/config.js
module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    port:8080,
    // * 侧边栏分组
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'CSS', link: '/css/' },
        { text: 'JS', link: '/js/',
          items: [
            { text: 'Chinese', link: '/language/chinese/' },
            { text: 'Japanese', link: '/language/japanese/' }
          ] 
        },
        { text: 'TS', link: '/ts/type/'},
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
        '/css/': [
          '',
          'priotiy',
          'color',
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