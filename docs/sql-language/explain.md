# EXPLAIN 读法

`EXPLAIN` 用来查看 PostgreSQL 准备怎么执行一条 SQL。它是排查慢查询的第一入口。

## 你学完能干什么

- 知道 `EXPLAIN` 和 `EXPLAIN ANALYZE` 的区别
- 能看懂顺序扫描、索引扫描、排序这些常见节点
- 知道 cost 不是毫秒
- 能用执行计划判断下一步该查什么

## 最小例子

```sql
EXPLAIN
SELECT id, title
FROM notes
WHERE user_id = 10;
```

它不会真的返回业务数据，而是返回执行计划。

如果要看真实执行情况：

```sql
EXPLAIN ANALYZE
SELECT id, title
FROM notes
WHERE user_id = 10;
```

`EXPLAIN ANALYZE` 会真的执行 SQL。对修改数据的语句要非常谨慎。

## 常见节点

| 节点 | 新手解释 |
| --- | --- |
| Seq Scan | 顺序扫描，逐行看表 |
| Index Scan | 通过索引查找数据 |
| Sort | 排序 |
| Hash Join | 用哈希方式做关联 |
| Nested Loop | 一层循环套另一层查 |

## 先看什么

1. 是否扫了远超预期的数据
2. 是否做了很重的排序
3. 是否没有用到预期索引
4. 估算行数和实际行数差距是否很大

## 动手区：从计划猜下一步

假设你看到这段简化计划：

```text
Seq Scan on notes
  Filter: (user_id = 10)
```

先别马上加索引，按顺序问三件事：

1. `notes` 表有多少行？
2. `user_id = 10` 会命中很多行还是很少行？
3. 这个查询是不是经常执行？

如果表只有几十行，顺序扫描可能没问题。

如果表有几百万行、命中很少、查询又很频繁，再考虑：

```sql
CREATE INDEX idx_notes_user_id ON notes (user_id);
```

然后重新看执行计划，确认它是否从 `Seq Scan` 变成更合适的索引相关扫描。

## 练习题

1. `EXPLAIN ANALYZE` 会真的执行 SQL 吗？
2. cost 是实际毫秒数吗？
3. `Seq Scan` 一定是坏事吗？
4. 估算行数和实际行数差距很大，可能说明什么？

::: tip 提示
执行计划先看“数据库实际走了哪条路”，再判断要不要改 SQL、索引或统计信息。
:::

::: details 答案
1. 会。
2. 不是，是规划器估算单位。
3. 不一定，小表顺序扫描可能很正常。
4. 统计信息可能不准，或条件选择性估算有偏差。
:::

## 常见坑

- 把 cost 当成毫秒
- 对 `UPDATE` 直接用 `EXPLAIN ANALYZE`，导致真的修改数据
- 看到顺序扫描就立刻加索引

## 先记住这三句

- 慢查询先看执行计划。
- `EXPLAIN ANALYZE` 会真的执行。
- 顺序扫描不一定错，要结合数据量看。
