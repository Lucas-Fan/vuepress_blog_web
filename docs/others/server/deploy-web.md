## 安装插件

- Git plugin
- GitHub API Plugin
- NodeJS Plugin

## 配置

- Manage Jenkins -> System Configuration -> Global Tool Configuration 配置 git 和 nodejs
- 新建一个 Freestyle project
- General -> GitHub project
- Source Code Management -> git 
  - 配置全局 Credentials
  - 选择 SSH Username with private key
  - 将服务器的私钥粘贴到 Private Key
- Build -> Execute shell

```shell
yarn
yarn build
rm -rf /data/blog/nginx/html/*
mv /dist /data/blog/nginx/html/
```
