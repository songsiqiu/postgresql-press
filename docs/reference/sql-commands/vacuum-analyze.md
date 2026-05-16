# VACUUM 与 ANALYZE 速查

`VACUUM` 用来清理旧版本数据，`ANALYZE` 用来更新统计信息。它们帮助数据库保持健康和做出更好的执行计划。

## 你学完能干什么

- 知道 `VACUUM` 解决什么问题
- 知道 `ANALYZE` 更新什么信息
- 能理解 autovacuum 为什么重要
- 能避免把清理当成数据修复

## 常见写法

```sql
VACUUM notes;
```

清理 `notes` 表里不再需要的旧版本。

```sql
ANALYZE notes;
```

更新 `notes` 表的统计信息。

也可以一起执行：

```sql
VACUUM ANALYZE notes;
```

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| `VACUUM` | 清理旧版本，维护表健康 |
| `ANALYZE` | 更新统计信息 |
| autovacuum | 自动执行清理和统计维护的后台机制 |
| 统计信息 | 规划器估算查询成本时参考的数据 |

## 练习题

1. `VACUUM` 主要清理什么？
2. `ANALYZE` 主要更新什么？
3. autovacuum 可以随便关闭吗？
4. 统计信息过旧会影响执行计划吗？

::: tip 提示
记住：`VACUUM` 偏清理，`ANALYZE` 偏统计。
:::

::: details 答案
1. 不再需要的旧版本数据。
2. 表的统计信息。
3. 不建议随便关闭。
4. 会，规划器可能估算不准。
:::

## 常见坑

- 觉得 autovacuum 占资源就直接关掉
- 以为 `VACUUM` 会修复错误业务数据
- 大量导入后不更新统计信息
- 看到磁盘文件没立刻变小就以为清理没用

## 先记住这三句

- `VACUUM` 维护表健康。
- `ANALYZE` 维护统计信息。
- autovacuum 是数据库健康的基础机制。
