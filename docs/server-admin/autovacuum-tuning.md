# autovacuum 调优

autovacuum 负责自动清理旧版本、维护统计信息。它不是可有可无的后台任务，而是 PostgreSQL 长期健康运行的重要机制。

## 你学完能干什么

- 知道 autovacuum 为什么重要
- 能理解清理旧版本和更新统计信息的关系
- 知道什么时候要关注 autovacuum 是否跟得上
- 能避免一遇到问题就关闭 autovacuum

## autovacuum 做什么

autovacuum 主要做两类事情：

- 清理不再需要的旧行版本
- 更新规划器需要的统计信息

如果它长期跟不上，可能出现表膨胀、统计信息过旧、执行计划变差等问题。

## 什么时候要排查

- 表频繁更新或删除
- 表大小持续增长但业务数据量没明显增加
- 查询计划突然变差
- 有长事务长期存在
- autovacuum 日志显示任务频繁被取消或耗时很长

## 排障步骤：怀疑 autovacuum 跟不上

先看表的更新、删除和清理时间：

```sql
SELECT relname, n_dead_tup, last_autovacuum, last_autoanalyze
FROM pg_stat_user_tables
ORDER BY n_dead_tup DESC
LIMIT 10;
```

再看是否有长事务：

```sql
SELECT pid, now() - xact_start AS xact_age, state, query
FROM pg_stat_activity
WHERE xact_start IS NOT NULL
ORDER BY xact_age DESC
LIMIT 10;
```

如果长事务一直存在，先处理长事务，再讨论调大 autovacuum。

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| autovacuum | 自动清理和统计维护机制 |
| VACUUM | 清理旧版本，让空间可复用 |
| ANALYZE | 更新统计信息 |
| 表膨胀 | 旧版本和空洞导致占用变大 |

## 练习题

1. autovacuum 只负责清理旧版本吗？
2. 统计信息过旧可能影响什么？
3. 遇到性能问题应该直接关闭 autovacuum 吗？
4. 长事务会不会影响清理？

::: tip 提示
autovacuum 不是噪音，它常常是在替你维持数据库健康。
:::

::: details 答案
1. 不只，它也会维护统计信息。
2. 执行计划。
3. 不应该。
4. 会。
:::

## 常见坑

- 觉得 autovacuum 占资源就直接关闭
- 只调参数，不处理长事务
- 不看表级别的更新删除频率
- 忽略统计信息对执行计划的影响
- 死盯全局参数，不看具体是哪张表跟不上

## 先记住这三句

- autovacuum 负责长期健康。
- 旧版本和统计信息都很重要。
- 不要轻易关闭 autovacuum。
