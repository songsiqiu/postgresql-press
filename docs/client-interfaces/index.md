# 客户端接口

这一组内容对应官方的客户端接口章节，主要讲应用怎么连 PostgreSQL、怎么跟它交互。

## 你学完能干什么

- 知道应用连接数据库要关注哪些信息
- 能理解连接池、参数化查询和事务边界
- 知道接下来该读哪几页

## 建议阅读顺序

1. [连接方式](/client-interfaces/connections)
2. [连接串](/client-interfaces/connection-strings)
3. [libpq C 客户端库](/client-interfaces/libpq)
4. [ECPG 嵌入式 SQL](/client-interfaces/ecpg)
5. [应用开发注意点](/client-interfaces/app-patterns)
6. [连接池与事务边界](/client-interfaces/pooling-transactions)
7. [错误处理与重试](/client-interfaces/error-handling)
8. [事务重试](/client-interfaces/transaction-retry)
9. [预处理语句与参数](/client-interfaces/prepared-statements)
10. [驱动与 ORM 选择](/client-interfaces/drivers-orm)
11. [数据库迁移工具](/client-interfaces/migrations)
12. [批处理与分页](/client-interfaces/batching-pagination)
13. [COPY 流式接入](/client-interfaces/copy-streaming)
14. [读写分离](/client-interfaces/read-write-splitting)
15. [超时设置](/client-interfaces/timeouts)
16. [取消查询](/client-interfaces/cancel-query)
17. [LISTEN 与 NOTIFY](/client-interfaces/listen-notify)

## 练习题

1. 应用连接数据库至少需要哪些信息？
2. 为什么应用通常会使用连接池？
3. 用户输入为什么不能直接拼进 SQL？
4. 哪些数据库错误不应该盲目重试？
5. 迁移文件主要记录什么？

::: tip 提示
客户端接口先抓三件事：怎么连、怎么安全传参数、怎么管理事务。
:::

::: details 答案
1. 地址、端口、数据库名、用户名、密码。
2. 复用连接，减少频繁创建连接的成本。
3. 容易造成 SQL 注入或语句错误。
4. 语法错误、权限错误、约束冲突通常不应该盲目重试。
5. 数据库结构变化。
:::

## 常见坑

- 连接信息写对了，但角色权限不够
- 每个请求都新建连接
- 直接拼接用户输入
- 所有错误都自动重试
- 只重试最后一条 SQL，而不是重跑完整事务
- 以为 ORM 能替代 SQL 和执行计划
- 生产库手工改结构却不留迁移记录
- 没有稳定排序就做分页
- 大批量数据仍然一条条提交
- 刚写完数据就读只读副本，导致用户看到旧数据
- 没有超时边界，请求一直卡住
- 查询取消后应用仍当成成功处理
- 把数据库通知当成可靠消息队列
- 把生产连接串提交到代码仓库
- 没校验就把 COPY 数据导入正式表

## 先记住这三句

- 应用先要正确连接数据库。
- 输入参数要交给驱动绑定。
- 事务边界要跟业务动作一致。
