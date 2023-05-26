## 什么是 Git

`Git` 是 `Linux` 发明者 Linus 开发的一款新时代的版本控制系统，那什么是版本控制系统呢？

它的功能很强大,可以帮助我们去管理代码,同步代码,协作开发等等.

但是,我们今天的学习目标仅仅是: **使用 `git` 将我们的笔记上传到`github`或者`gitee`社区仓库**

## 什么是 tortoise git(小乌龟)

因为 `git` 的操作都是在黑窗口当中输入命令执行的,所以对新手不是很友好

`tortoise git`是一款可视化操作 git 的工具

## 安装 Git
+ `git` 官网 下载安装即可

## 配置 Git

> 相当于注册git账户

- 设置用户名

```
git config --global user.name "John Doe"
```

- 设置邮箱

```
git config --global user.email "johndoe@example.com"
```

- 查看配置信息列表

查看自己有户名和邮箱是否配置成功

```
git config --list
```
## 下载/安装 小乌龟

+ [下载](https://download.tortoisegit.org/tgit/2.11.0.0/)
![](http://doc.bufanui.com/uploads/html-css/images/m_a905ba9b61f871b547ef99ceb308f487_r.png)

+ 选择安装程序(32位/64位)
+ 选择语言包(32位/64位)
+ 先安装程序, 再安装语言包. 一路下一步.
+ 安装完语言包之后，右键→tortogit→setting，把language项改为中文，确定即可
![](http://doc.bufanui.com/uploads/html-css/images/m_b262dc975bd1f6d24475f7333b2cac5d_r.png)

## 使用 Git
首先需要找一个 `代码托管` 平台, 比如 `github` 或者 `gitee(码云)`, 如果没有的自行注册账号

我们接下来使用 `gitee` 进行演示

### 新建远程仓库
![](http://doc.bufanui.com/uploads/html-css/images/m_c580eb28bc6d216125ec0ff6a64207f1_r.png)
![](http://doc.bufanui.com/uploads/html-css/images/m_dd479cf52b031b118d69985c8f02b1d6_r.gif)

### 新建本地文件夹(本地仓库)
托管中心的操作基本就完成了，接下来就是我们本地的操作了
随便新建一个文件夹，例如`笔记`
进入文件夹内部，右键 → Git在这里创建版本库，不要勾选直接确认
![](http://doc.bufanui.com/uploads/html-css/images/m_3ae5688f21ed2d0ed4720ee8a4daea14_r.gif)

### 关联本地仓库与远程仓库
+ 文件夹内部 -> 右键 -> tortoisegit -> 设置

+ 将你托管中心 `gitee` 的用户名和邮箱填进去

![](http://doc.bufanui.com/uploads/html-css/images/m_49f0d808e05003b86145c89da468e23e_r.png)

+ 开始关联仓库

![](http://doc.bufanui.com/uploads/html-css/images/m_1c42090d28264dc11d761705398c49ef_r.gif)

### 提交代码/笔记/文件
![](http://doc.bufanui.com/uploads/html-css/images/m_1382391e4b471e8485cd01290277a24d_r.gif)

### 注意事项
目前, 我们只需要掌握 `git` 上传文件的操作
如果想让 远程仓库 保存的文件更改, 只能通过修改本地仓库文件, 再同步到 远程仓库
切忌不要直接 进入进入远程仓库修改文件