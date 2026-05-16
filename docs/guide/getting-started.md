# 基础入门

PostgreSQL 是一个开源关系数据库。你可以先把它理解成一个负责长期保存、查询和保护数据的服务。

这一页对应官方文档里的入门教程、服务器管理和客户端工具部分，但会先用新手能操作的顺序讲。

## 你学完能干什么

- 能说清楚实例、数据库、模式、表之间的关系
- 能用 `psql` 连接 PostgreSQL
- 能创建一张简单表并插入数据
- 能完成“建表 -> 写入 -> 查询”的最小闭环

## 先记住这几个概念

| 概念 | 可以先这样理解 |
| --- | --- |
| 实例 | 正在运行的一套 PostgreSQL 服务 |
| 数据库 | 一个相对独立的数据空间 |
| 模式 | 数据库里的分类目录，常见默认值是 `public` |
| 表 | 真正存放一类数据的地方 |
| 行 | 表里的一条记录 |
| 列 | 每条记录上的一个字段 |
| 角色 | 谁可以连接、读写和管理数据库 |

## 第一次连接

本地装好 PostgreSQL 后，最常见的连接方式是 `psql`：

```bash
psql -U postgres
```

连接成功后，可以先试两条命令：

```sql
SELECT version();
SELECT current_database();
```

第一条看当前 PostgreSQL 版本，第二条看自己连到哪个数据库。

## 建一个练习表

```sql
CREATE TABLE notes (
  id bigserial PRIMARY KEY,
  title text NOT NULL,
  body text,
  created_at timestamptz NOT NULL DEFAULT now()
);
```

这里先不用急着背所有类型。先知道：

- `bigserial` 常用于自增编号
- `text` 存文本
- `timestamptz` 存带时区语义的时间
- `PRIMARY KEY` 表示主键
- `NOT NULL` 表示不能为空
- `DEFAULT now()` 表示默认取当前时间

## 插入和查询

```sql
INSERT INTO notes (title, body)
VALUES ('第一条笔记', '我已经连上 PostgreSQL 了');

SELECT id, title, created_at
FROM notes
ORDER BY id DESC;
```

到这里，你已经完成了最小闭环：连接数据库、建表、写入数据、查出数据。

## 新手最容易混淆的点

- PostgreSQL 服务启动了，不代表你已经连上某个数据库
- 一个实例里可以有多个数据库
- 一个数据库里可以有多个模式
- 表名、字段名、权限和连接用户是不同问题
- SQL 结尾的分号很重要，少了分号时 `psql` 会继续等你输入

## 小例子：看懂一条完整闭环

```sql
CREATE TABLE notes (
  id bigserial PRIMARY KEY,
  title text NOT NULL
);

INSERT INTO notes (title)
VALUES ('PostgreSQL 第一课');

SELECT id, title
FROM notes;
```

结果：

| id | title |
| --- | --- |
| 1 | PostgreSQL 第一课 |

## 练习题

1. 用一句话解释“数据库”和“表”的区别。
2. 写出查看当前数据库的 SQL。
3. 建一张 `demo_users` 表，包含 `id` 和 `name`。
4. 向 `demo_users` 插入一条名字为 `Alice` 的数据。
5. 查询 `demo_users` 的所有数据。

::: tip 提示
先照着“建表、插入、查询”三步走，不要一开始就纠结所有字段类型。
:::

::: details 答案
1. 数据库是一个数据空间，表是数据库里存放某类数据的结构。
2. `SELECT current_database();`
3. `CREATE TABLE demo_users (id bigserial PRIMARY KEY, name text NOT NULL);`
4. `INSERT INTO demo_users (name) VALUES ('Alice');`
5. `SELECT * FROM demo_users;`
:::

## 常见坑

- 以为 PostgreSQL 服务启动了就等于已经连上数据库
- 把数据库、模式、表混成一个概念
- SQL 语句忘记写分号

## 先记住这三句

- PostgreSQL 是服务，数据库是空间，表是存数据的结构。
- 先跑通建表、写入、查询这条闭环。
- 新手先学常用类型，不急着背完整类型表。
