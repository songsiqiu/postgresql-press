# 索引与性能

这一章回答一个很常见的问题：为什么同样是查数据，有些 SQL 很快，有些 SQL 很慢。

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
