# 索引与性能

这一章回答一个很常见的问题：为什么同样是查数据，有些 SQL 很快，有些 SQL 很慢。

## 你学完能干什么

- 能用 `EXPLAIN` 看 PostgreSQL 打算怎么查
- 能知道哪些条件可能适合建索引
- 能理解索引不是越多越好
- 能先收集证据，再判断性能问题

## 先看执行计划

PostgreSQL 提供 `EXPLAIN` 来查看它准备怎么执行一条 SQL：

```sql
EXPLAIN
SELECT id, title
FROM notes
WHERE title = 'SQL 学习';
```

如果想看真实执行情况，可以用：

```sql
EXPLAIN ANALYZE
SELECT id, title
FROM notes
WHERE title = 'SQL 学习';
```

`EXPLAIN ANALYZE` 会真的执行 SQL。对会修改数据的语句要谨慎使用。

## 索引能解决什么

索引可以让 PostgreSQL 更快找到符合条件的数据。比如经常按标题查笔记，可以建索引：

```sql
CREATE INDEX idx_notes_title ON notes (title);
```

但索引不是越多越好。它会占空间，也会让写入和更新变慢。

## 新手先关注四件事

- `WHERE` 里经常用的列，可能需要索引
- `JOIN` 关联列，通常要关注索引
- `ORDER BY` 和分页慢时，要看排序成本
- 表很小时，顺序扫描不一定是坏事

## 不要急着猜

性能问题不要只凭感觉改。先拿到 SQL、参数、表数据量和执行计划，再判断该改索引、改 SQL，还是改业务查询方式。

## 动手区：模拟索引前后

假设 `notes` 表有 100 万行，经常执行：

```sql
SELECT id, title
FROM notes
WHERE user_id = 10
ORDER BY created_at DESC
LIMIT 20;
```

没有合适索引时，数据库可能要扫描很多行再排序。可以考虑：

```sql
CREATE INDEX idx_notes_user_created_at
ON notes (user_id, created_at DESC);
```

有了这个索引后，PostgreSQL 更容易先找到 `user_id = 10` 的数据，并按时间顺序取前 20 条。

这不是说所有查询都该这样建索引，而是先看查询条件和排序方式是否稳定。

## 容易混淆的词

| 词 | 一句话解释 |
| --- | --- |
| 执行计划 | 数据库准备怎么执行一条 SQL |
| 顺序扫描 | 从表里一行行看过去 |
| 索引扫描 | 先通过索引定位数据 |
| 统计信息 | PostgreSQL 用来估算数据分布的信息 |

## 练习题

1. 哪个命令可以查看执行计划？
2. `EXPLAIN ANALYZE` 和 `EXPLAIN` 最大区别是什么？
3. 经常按 `user_id` 筛选的表，可能需要关注哪个列的索引？
4. 为什么索引不是越多越好？
5. 表很小时，顺序扫描一定是坏事吗？

::: tip 提示
性能优化先看证据，不要只凭“感觉这列应该加索引”。
:::

::: details 答案
1. `EXPLAIN`
2. `EXPLAIN ANALYZE` 会真的执行 SQL，并展示实际执行信息。
3. `user_id`
4. 索引占空间，也会增加写入、更新和维护成本。
5. 不一定。小表顺序扫描可能更快、更简单。
:::

## 常见坑

- 只看 SQL 文本，不看执行计划
- 一遇到慢查询就乱加索引
- 忽略排序、分页和数据量变化带来的影响

## 先记住这三句

- 慢查询先看执行计划。
- 索引要服务具体查询，不是装饰品。
- 数据量、条件和排序一起决定性能。
