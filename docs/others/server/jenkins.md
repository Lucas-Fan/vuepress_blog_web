## 安装

- 下载依赖

```shell
sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo
```

- 导入密钥

```shell
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
```

- 安装

```shell
yum install jenkins 
```

- systemctl 重新加载

```shell
systemctl daemon-reload
```

- 自启动

```shell
systemctl enable jenkins
```

- 启动 jenkins

```shell
systemctl start jenkins
```

- 关闭 jenkins

```shell
systemctl stop jenkins
```

## 删除

- rpm 卸载

```shell
rpm -e jenkins
```

- 检查是否卸载成功

```shell
rpm -ql jenkins
```

- 彻底删除残留文件

```shell
find / -iname jenkins | xargs -n 1000 rm -rf
```
