# retina-docs

## 注意事项

> 本项目依赖 webpack 3.x 推荐使用 yarn 安装而不是 npm(npm 会生成错误的依赖树)

## 静态资源展示

- .vuepress/public 文件夹下的文件打包时都会

- 直接引用
```
![Image from alias](/image/logo.png)
```

- webpack 别名(只能引用在 node_modules 下的文件)
```
![Image from alias](~@alias/logo.png)
```