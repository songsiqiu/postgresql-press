# psql 常用命令

`psql` 是 PostgreSQL 最常见的命令行客户端。它既能执行 SQL，也有自己的反斜杠命令。

## 你学完能干什么

- 能区分 SQL 命令和 `psql` 命令
- 能用常见命令查看数据库、表和连接信息
- 知道新手排查时先看哪些命令

## SQL 和 psql 命令的区别

SQL 会发给 PostgreSQL 执行：

```sql
SELECT current_database();
```

`psql` 命令由客户端处理，通常以反斜杠开头：

```text
\dt
```

## 常用命令

| 命令 | 用途 |
| --- | --- |
| `\l` | 查看数据库列表 |
| `\c database_name` | 连接到另一个数据库 |
| `\dt` | 查看当前模式下的表 |
| `\d table_name` | 查看表结构 |
| `\du` | 查看角色 |
| `\conninfo` | 查看当前连接信息 |
| `\q` | 退出 |

## 练习题

1. 查看当前有哪些表，常用哪个命令？
2. `\d notes` 大概能看到什么？
3. `SELECT current_database();` 是 SQL 还是 `psql` 命令？
4. 退出 `psql` 用什么命令？

::: tip 提示
反斜杠开头的多半是 `psql` 客户端命令，不是 SQL。
:::

::: details 答案
1. `\dt`。
2. `notes` 表的结构。
3. SQL。
4. `\q`。
:::

## 常见坑

- 把 `\dt` 写进应用 SQL
- 连错数据库却没看 `\conninfo`
- 不知道 `\d 表名` 可以快速看表结构

## 先记住这三句

- SQL 发给数据库，反斜杠命令由 `psql` 处理。
- 查表结构先试 `\d`。
- 不确定连到哪里，先看 `\conninfo`。

