# 从安装到第一条 SQL

这页是官方 Tutorial 的中文化起点。目标不是把每个命令背下来，而是先让你跑通完整流程。

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

