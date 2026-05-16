# EXPLAIN 速查

`EXPLAIN` 用来查看 PostgreSQL 打算怎么执行一条 SQL。它是理解慢查询的入口。

## 你学完能干什么

- 能知道 `EXPLAIN` 用来干什么
- 能区分 `EXPLAIN` 和 `EXPLAIN ANALYZE`
- 能看懂常见计划节点的大概含义
- 能避免对修改语句随便执行 `EXPLAIN ANALYZE`

## 查看计划

```sql
EXPLAIN
SELECT id, title
FROM notes
WHERE user_id = 10;
```

这会显示 PostgreSQL 计划怎么查，但不会真正返回业务结果。

如果使用：

```sql
EXPLAIN ANALYZE
SELECT id, title
FROM notes
WHERE user_id = 10;
```

它会真的执行 SQL，并显示实际执行信息。

## 常见节点

| 节点 | 新手解释 |
| --- | --- |
| `Seq Scan` | 顺序扫描表 |
| `Index Scan` | 使用索引查找 |
| `Sort` | 排序 |
| `Hash Join` | 用哈希方式关联数据 |

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| 执行计划 | 数据库准备怎么执行 SQL |
| cost | 规划器估算成本，不是毫秒 |
| `ANALYZE` | 在这里表示实际执行并统计 |
| 节点 | 执行计划里的一个步骤 |

## 练习题

1. `EXPLAIN` 会返回业务查询结果吗？
2. `EXPLAIN ANALYZE` 会真的执行 SQL 吗？
3. cost 是实际耗时毫秒吗？
4. 看到 `Seq Scan` 一定代表坏事吗？

::: tip 提示
先用普通 `EXPLAIN` 看计划，再决定是否需要 `EXPLAIN ANALYZE`。
:::

::: details 答案
1. 不会，它返回执行计划。
2. 会。
3. 不是。
4. 不一定，小表或需要扫大量数据时可能正常。
:::

## 常见坑

- 把 cost 当成真实耗时
- 看到顺序扫描就一定认为有问题
- 对修改语句随便执行 `EXPLAIN ANALYZE`
- 只看一个节点，不看整条计划

## 先记住这三句

- `EXPLAIN` 看计划。
- `EXPLAIN ANALYZE` 会真的执行。
- 执行计划要结合数据量和条件一起看。
