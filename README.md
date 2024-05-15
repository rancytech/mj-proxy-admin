# midjourney-proxy-admin
[midjourney-proxy-plus](https://github.com/litter-coder/midjourney-proxy-plus) 的管理后台

# 主要功能

- [x] 支持MJ账户的增删改查功能
- [x] 支持MJ账户的详细信息查询和账户同步操作
- [x] 支持MJ账户的并发队列设置
- [x] 支持MJ的任务查询

# 后续计划

- [ ] 任务查询功能优化
- [ ] 支持MJ的账户settings修改
- [ ] 支持MJ的队列内容查询
- [ ] ...

# 使用示例

①登录页

<img src="https://raw.githubusercontent.com/litter-coder/midjourney-proxy-admin/main/docs/login.png" alt="登录页"/>

②欢迎页

<img src="https://raw.githubusercontent.com/litter-coder/midjourney-proxy-admin/main/docs/welcome.png" alt="欢迎页"/>

③账户管理

<img src="https://raw.githubusercontent.com/litter-coder/midjourney-proxy-admin/main/docs/account.png" alt="账户管理"/>

④添加账户

<img src="https://raw.githubusercontent.com/litter-coder/midjourney-proxy-admin/main/docs/account_add.png" alt="添加账户"/>

⑤账户详情

<img src="https://raw.githubusercontent.com/litter-coder/midjourney-proxy-admin/main/docs/account_info.png" alt="账户详情"/>

⑥任务列表

<img src="https://raw.githubusercontent.com/litter-coder/midjourney-proxy-admin/main/docs/task.png" alt="任务列表"/>

# 部署方式

## 1.运行环境

支持 Linux、MacOS、Windows 系统（可在Linux服务器上长期运行)，同时需安装 `node18`。

**(1) 克隆项目代码：**

```bash
git clone https://github.com/litter-coder/midjourney-proxy-admin
cd midjourney-proxy-admin/
```

**(2) 安装依赖 ：**

```bash
npm install
```

## 2.配置

配置文件在根目录的`.env`中：

```shell
# 账户名
ADMIN_NAME=admin
# 密码
PASS_WORD=123456
# MJ-SERVER
MJ_SERVER=http://127.0.0.1:8080
# mj.api-secret
UMI_APP_MJ_API_SECRET=123456
```

## 3.运行

使用nohup命令在后台运行程序：

```
nohup npm run start > out.log 2>&1 & disown
# 在后台运行程序
```

## 4.其他

### 1.查看进程

```shell
ps -ef | grep npm
```

### 2.结束进程

```sh
kill -9 [进程id]
```

# 联系我们

问题咨询和商务合作可联系

 <img src="https://raw.githubusercontent.com/litter-coder/midjourney-proxy-plus/main/docs/manager-qrcode.jpeg" width="240" alt="微信二维码"/>

