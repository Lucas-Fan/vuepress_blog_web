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
        { text: 'Github', link: 'https://github.com/Lucas-Fan' },
      ],
      sidebar: {
        '/': [
          { title: 'Home', path: '/' },
          { title: 'CSS', path: '/css/' },
          { title: 'JS', path: '/js/'},
        ],
        '/css/': [
          '',
          'priotiy',
          'color',
        ]
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