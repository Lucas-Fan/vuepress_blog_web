# 多个 github 账号、github 和 gitee 不同账号如何配置 ssh key
## 写在前面

> 本文基于 `macOs` 编写

当我们 `github` 和 `gitee` 都有账号、`github` 有多个账号的时候，就会出现 `ssh key` 配置问题，本文用以解决多个代码托管平台和一个代码平台多个账号的 `ssh key` 配置问题。

场景一：

大学的时候创建了自己的 `github` 账号，查找了各种资料来配置 `ssh key`。

该场景下面的 **基本配置** 可以解决

场景二：

工作了渐渐的发现公司的会与自己 `github` 的 `ssh key` 冲突。

该场景下面的 **ssh 配置不同域名** 可以解决

场景三：

为了在 `github` 上面和别人一起开发代码，创建了第二个 `github` 账号，又产生了冲突。

该场景下面的 **配置多个账号 ssh key** 可以解决

## 基本配置

### ssh 介绍

`SSH` 为 `Secure Shell` 的缩写，由 `IETF` 的网络小组（`Network Working Group`）所制定；`SSH` 为建立在应用层基础上的安全协议。`SSH` 是较可靠，专为远程登录会话和其他网络服务提供安全性的协议。

### github ssh keys

`github` 利用 `ssh` 协议进行安全的提交代码，需要配置 `ssh keys`。

### 配置流程

#### 1.使用 ssh-keygen 在本地生成 ssh 公钥私钥

```shell
(base) ➜  .ssh ssh-keygen -t rsa -C "youer_email@example.com"
Generating public/private rsa key pair.
# 下面这步是让你输入你密钥保存位置和名
# 例如输入 /Users/fzyt/.ssh/github/id_rsa_github 回车(需要提前创建 /Users/fzyt/.ssh/github/ 文件夹)
Enter file in which to save the key (/Users/fzyt/.ssh/id_rsa): 
# 下面这步是设置密钥文件的查看密码，结合自己情况设置，不设置回车即可
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 

# id_rsa_github 是私钥，id_rsa_github.pub 公钥
(base) ➜  github ls
id_rsa_github     id_rsa_github.pub
```

#### 2.配置 ssh config

- 在 `/Users/fzyt/.ssh` 新建 `config` 文件
- 配置 `github` 相关信息

```shell
# github
Host github.com
    HostName github.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/github/id_rsa_github

# 配置文件参数
# Host : 别名，Host 可以看作是一个你要识别的模式，对识别的模式，进行配置对应的的主机名和ssh文件
# Port : 端口 (22(default))
# HostName : 要登录主机的主机名
# User : 登录名
# PreferredAuthentications : 强制使用 Public Key 验证 (no(default)/yes)
# IdentitiesOnly : 只接受SSH key 登录
# IdentityFile : 指明上面User对应的 identityFile 路径 (就是私钥)
```

配置好了可以使用如下命令测试

```shell
(base) ➜  .ssh ssh -T git@github.com 
Hi youer_name! You've successfully authenticated, but GitHub does not provide shell access.
```

#### 3.将生成的公钥添加到 github settings 上

- 使用 `cat` 命令将公钥复制下来

```shell
(base) ➜  github cat id_rsa_github.pub 
ssh-rsa ...
...
...= youer_email@example.com
```
- 打开 `github` 点击头像选择 `Settings`
- 点击左侧菜单中的 `SSH and GPS keys`
- 点击 <kbd>New SSH key</kbd> 将公钥复制到 `Key` 中，Title 起个名字
- 点击 <kbd>Add SSH key</kbd>

#### 4.clone 代码

接下来 `clone` 代码即可

```shell
git clone git@github.com/test.git
```

### ssh 配置不同域名

- 完成基本配置，如已配置 `github ssh key`
- 生成 `gitee ssh key`，即在 `/Users/fzyt/.ssh/gitee/` 下有有效的公钥私钥
- 在 `/Users/fzyt/.ssh/config` 中添加以下配置

```shell
# gitee
Host gitee.com
    HostName gitee.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/gitee/id_rsa_gitee
```

- 使用命令测试

```shell
(base) ➜  .ssh ssh -T git@gitee.com 
Hi youer_name! You've successfully authenticated, but GITEE.COM does not provide shell access.
```

### 配置多个账号 ssh key

- 完成基本配置，如已配置一个工作账号的 `github ssh key`
- 生成私有的 `github ssh key`，即在 `/Users/fzyt/.ssh/gitee/` 下有有效的公钥私钥
- 在 `/Users/fzyt/.ssh/config` 中添加以下配置

```shell
# github work
Host github.com
    HostName github.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/github/id_rsa_github_work
# github me
Host me.github.com
    HostName github.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/github/id_rsa_github_me
```

- 使用命令测试

```shell
(base) ➜  .ssh ssh -T git@github.com 
Hi youer_name! You've successfully authenticated, but GitHub does not provide shell access.
```

```shell
(base) ➜  .ssh ssh -T git@me.github.com 
Hi youer_name! You've successfully authenticated, but GitHub does not provide shell access.
```

- `clone` 代码

```shell
git clone git@github.com/test.git
```

```shell
git clone git@me.github.com/test.git
```

> 可以将 `me` 改成别的以达到配置多个账号 `ssh key` 的目的
