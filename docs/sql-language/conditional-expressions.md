# 条件表达式

条件表达式让 SQL 根据不同情况返回不同值。它常用于展示字段、兜底值和轻量分类。

## 你学完能干什么

- 能看懂 `CASE WHEN`
- 能使用 `COALESCE` 处理空值
- 知道条件表达式不是复杂业务流程
- 能让查询结果更容易给应用使用

## CASE WHEN

```sql
SELECT
  id,
  amount,
  CASE
    WHEN amount >= 1000 THEN 'large'
    WHEN amount >= 100 THEN 'medium'
    ELSE 'small'
  END AS order_size
FROM orders;
```

`CASE` 会按条件返回不同结果。

## COALESCE

```sql
SELECT
  id,
  COALESCE(nickname, name) AS display_name
FROM users;
```

`COALESCE` 返回第一个不是 `NULL` 的值。

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| `CASE` | 按条件返回不同值 |
| `WHEN` | 条件分支 |
| `ELSE` | 没有命中条件时的结果 |
| `COALESCE` | 取第一个非空值 |

## 练习题

1. `CASE WHEN` 主要用来做什么？
2. `COALESCE(nickname, name)` 会优先返回哪个非空值？
3. `ELSE` 是必须命中的条件吗？
4. 条件表达式适合承载很复杂的业务流程吗？

::: tip 提示
条件表达式适合让查询结果更清楚，不适合把大量业务流程塞进 SQL。
:::

::: details 答案
1. 按条件返回不同值。
2. `nickname`，如果它不是 `NULL`。
3. 不是，它是兜底结果。
4. 不适合。
:::

## 常见坑

- `CASE` 分支太多，查询很难读
- 忘记处理没有命中的情况
- 把 `NULL` 兜底逻辑散落在很多地方
- 用条件表达式掩盖数据模型问题

## 先记住这三句

- `CASE` 做条件返回。
- `COALESCE` 做空值兜底。
- SQL 里不要堆太复杂的业务流程。
