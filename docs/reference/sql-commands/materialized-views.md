# CREATE MATERIALIZED VIEW 与 REFRESH 速查

物化视图保存查询结果，`REFRESH MATERIALIZED VIEW` 用来刷新结果。它适合把较重的查询结果提前存下来。

## 你学完能干什么

- 能区分普通视图和物化视图
- 知道物化视图保存的是查询结果
- 能理解为什么需要刷新
- 能避免把物化视图当成实时表

## 创建物化视图

```sql
CREATE MATERIALIZED VIEW user_note_counts AS
SELECT user_id, count(*) AS note_count
FROM notes
GROUP BY user_id;
```

查询它：

```sql
SELECT *
FROM user_note_counts;
```

刷新结果：

```sql
REFRESH MATERIALIZED VIEW user_note_counts;
```

## 适合场景

- 报表查询比较重
- 结果不需要实时到秒级
- 可以接受定时刷新
- 希望减少重复计算

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| 普通视图 | 保存查询定义 |
| 物化视图 | 保存查询结果 |
| 刷新 | 重新计算并更新结果 |
| 过期数据 | 结果还没刷新，和最新表数据不一致 |

## 练习题

1. 物化视图保存查询定义还是查询结果？
2. 表数据变化后，物化视图会自动实时更新吗？
3. 刷新物化视图用什么命令？
4. 报表查询适合考虑物化视图吗？

::: tip 提示
物化视图的关键问题不是能不能查，而是结果什么时候刷新。
:::

::: details 答案
1. 查询结果。
2. 不会自动实时更新。
3. `REFRESH MATERIALIZED VIEW`。
4. 适合。
:::

## 常见坑

- 把物化视图当成实时结果
- 忘记设计刷新时机
- 不评估刷新成本
- 底层表变化后不检查物化视图是否仍符合业务

## 先记住这三句

- 物化视图保存结果。
- 结果需要刷新。
- 它适合重查询，不适合默认实时数据。
