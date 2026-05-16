# 从安装到第一条 SQL

这页是官方 Tutorial 的中文化起点。目标不是把每个命令背下来，而是先让你跑通完整流程。

## 你学完能干什么

- 能从空表开始完成一次写入和查询
- 能看懂最基础的建表语句
- 能知道第一条 SQL 成功后下一步该学什么

## 你要先做什么

1. 启动 PostgreSQL
2. 打开 `psql`
3. 连接到一个数据库
4. 创建一张练习表
5. 插入一条数据
6. 查询这条数据

## 一个最小流程

```sql
CREATE TABLE demo_messages (
  id bigserial PRIMARY KEY,
  message text NOT NULL
);

INSERT INTO demo_messages (message)
VALUES ('Hello, PostgreSQL');

SELECT * FROM demo_messages;
```

## 读完这一页你应该知道什么

- PostgreSQL 可以先当成一个独立服务来理解
- `psql` 是最常见的命令行入口
- SQL 可以先从“建表、写入、查出”这一条闭环开始

## 动手区：改一条消息

把插入语句改成你自己的文字：

```sql
INSERT INTO demo_messages (message)
VALUES ('我正在学习 PostgreSQL');
```

查询结果会变成：

| id | message |
| --- | --- |
| 1 | 我正在学习 PostgreSQL |

## 练习题

1. `CREATE TABLE` 在做什么？
2. `INSERT INTO` 在做什么？
3. `SELECT *` 表示什么？
4. 把示例里的消息换成你自己的文字。

::: tip 提示
第一遍只需要跑通，不需要理解 PostgreSQL 的所有能力。
:::

::: details 答案
1. 创建一张表。
2. 向表里插入数据。
3. 查询表里的所有列。
4. 修改 `VALUES (...)` 里的文本即可。
:::

## 常见坑

- 表已经创建过，再执行同名 `CREATE TABLE` 会报错
- SQL 结尾忘记分号
- 插入文本时忘记使用英文单引号

## 先记住这三句

- 先跑通，再深入。
- 建表、写入、查询是第一条闭环。
- 出错时先读错误信息，不要急着重装。
