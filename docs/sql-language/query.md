# 查询数据

查询是 SQL 最常见的部分。先学会查询，后面再学修改和建表会轻松很多。

## 你学完能干什么

- 从一张表里筛选数据
- 控制返回列、排序和数量
- 看懂简单的关联查询
- 知道什么时候该先查再改

```sql
SELECT *
FROM demo_messages
WHERE id > 10
ORDER BY id DESC;
```

这一类语句负责把结果找出来，不改数据。

## 查询语句的阅读顺序

新手读 SQL 时，可以按这个顺序看：

1. `FROM`：数据从哪里来
2. `WHERE`：过滤掉哪些行
3. `SELECT`：最后展示哪些列
4. `ORDER BY`：结果怎么排序
5. `LIMIT`：最多返回多少行

## 常见查询模板

```sql
SELECT id, message
FROM demo_messages
WHERE message LIKE '%PostgreSQL%'
ORDER BY id DESC
LIMIT 10;
```

这里的 `LIKE` 用来做简单文本匹配。真实系统里如果要做复杂搜索，后面还会涉及全文检索。

## 关联查询

```sql
SELECT m.id, m.message, u.name AS author_name
FROM demo_messages m
JOIN demo_users u ON u.id = m.user_id
WHERE u.name = 'Alice';
```

`JOIN` 可以先理解成：把两张表按条件拼起来，再从拼好的结果里挑数据。

## 动手区：一步步改查询结果

假设当前有这些消息：

| id | user_id | message |
| --- | --- | --- |
| 1 | 10 | PostgreSQL 入门 |
| 2 | 10 | SQL 查询练习 |
| 3 | 11 | 事务笔记 |
| 4 | 10 | 索引基础 |

先看这条 SQL：

```sql
SELECT id, message
FROM demo_messages
WHERE user_id = 10
ORDER BY id DESC
LIMIT 2;
```

结果是：

| id | message |
| --- | --- |
| 4 | 索引基础 |
| 2 | SQL 查询练习 |

现在可以试着改三处：

- 把 `LIMIT 2` 改成 `LIMIT 3`，结果会多一行。
- 把 `ORDER BY id DESC` 改成 `ORDER BY id ASC`，顺序会从旧到新。
- 把 `WHERE user_id = 10` 改成 `WHERE user_id = 11`，只会看到 `事务笔记`。

## 练习题

1. 把上面的 `LIMIT 10` 改成 `LIMIT 3`，观察返回数量。
2. 把 `ORDER BY id DESC` 改成 `ORDER BY id ASC`，观察排序变化。
3. 新增一个 `WHERE id >= 5` 条件，看看结果范围怎么变化。
4. 把 `SELECT id, message` 改成只查询 `message`。
5. 尝试写一条按作者名称筛选的关联查询。

::: tip 提示
先从 `FROM` 和 `WHERE` 判断数据范围，再看 `SELECT` 决定展示哪些列。
:::

::: details 答案
1. `LIMIT 3` 最多只返回 3 行。
2. `ASC` 是从小到大，`DESC` 是从大到小。
3. `WHERE id >= 5` 只保留 `id` 大于等于 5 的行。
4. `SELECT message FROM demo_messages ...`
5. 可以参考 `JOIN demo_users u ON u.id = m.user_id WHERE u.name = 'Alice'`。
:::

## 常见坑

- 把 SQL 的书写顺序当成数据库真实执行顺序
- 查询太多列，导致结果不容易看
- 忘记限制返回数量，一次查出过多数据

## 先记住这三句

- 查询不会修改数据。
- 条件越明确，结果越可控。
- 修改或删除前，最好先用同样条件查一遍。
