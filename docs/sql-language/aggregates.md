# 聚合进阶

聚合不只是 `count(*)`。真实业务里，聚合常常和分组、过滤、排序、去重一起出现。

## 你学完能干什么

- 能写出常见分组统计 SQL
- 能理解 `count(*)`、`count(column)` 和 `count(DISTINCT column)` 的区别
- 能用 `FILTER` 给聚合加条件
- 能知道聚合结果为什么需要配合 `GROUP BY`

## 常见聚合

```sql
SELECT user_id, count(*) AS note_count
FROM notes
GROUP BY user_id
ORDER BY note_count DESC;
```

这条 SQL 按用户统计笔记数量。

## 条件聚合

```sql
SELECT
  user_id,
  count(*) AS all_notes,
  count(*) FILTER (WHERE archived = false) AS active_notes
FROM notes
GROUP BY user_id;
```

`FILTER` 可以让一个查询里同时统计总数和某类数据数量，读起来比堆很多子查询更清楚。

## 去重统计

```sql
SELECT count(DISTINCT user_id) AS active_user_count
FROM notes
WHERE created_at >= CURRENT_DATE - INTERVAL '7 days';
```

`DISTINCT` 会先去重再统计，适合“有多少不同用户”这类问题。

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| 聚合 | 把多行算成一个结果 |
| 分组 | 先按某个字段分堆，再分别聚合 |
| `count(*)` | 统计行数 |
| `count(column)` | 统计该列不是 `NULL` 的行 |
| `DISTINCT` | 去掉重复值 |

## 练习题

1. 统计每个用户有多少笔记，应该用哪个子句分组？
2. `count(*)` 会不会忽略整行？
3. `count(column)` 会统计该列为 `NULL` 的行吗？
4. 想统计不同用户数，应该配合哪个关键字？

::: tip 提示
看到“每个”“按什么分别统计”，通常就要想到 `GROUP BY`。
:::

::: details 答案
1. `GROUP BY`。
2. 不会，它统计行数。
3. 不会。
4. `DISTINCT`。
:::

## 常见坑

- 忘记 `GROUP BY`，把全表算成一个结果
- 把 `count(*)` 和 `count(column)` 当成完全一样
- 分组字段太多，结果被拆得过细
- 在应用里循环统计，导致大量重复 SQL

## 先记住这三句

- 聚合是把多行变成统计结果。
- “每个谁”就要想 `GROUP BY`。
- `count(*)` 和 `count(column)` 不完全一样。
