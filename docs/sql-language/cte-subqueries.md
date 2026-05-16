# CTE 与子查询

CTE 和子查询能把复杂查询拆开写。它们不是为了炫技，而是为了让查询更容易阅读和复用中间结果。

## 你学完能干什么

- 能看懂 `WITH` 开头的查询
- 能区分 CTE 和子查询的大致用途
- 能把复杂查询拆成更清楚的步骤
- 知道什么时候不要过度嵌套查询

## 子查询是什么

子查询就是嵌在另一条 SQL 里的查询。

```sql
SELECT id, title
FROM notes
WHERE user_id IN (
  SELECT id
  FROM demo_users
  WHERE name = 'Alice'
);
```

这条 SQL 先找出名为 Alice 的用户，再查这些用户的笔记。

## CTE 是什么

CTE 常用 `WITH` 写在查询前面，像给中间结果取名字。

```sql
WITH alice_users AS (
  SELECT id
  FROM demo_users
  WHERE name = 'Alice'
)
SELECT n.id, n.title
FROM notes n
JOIN alice_users u ON u.id = n.user_id;
```

这和上面的目标类似，但阅读顺序更清楚。

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| 子查询 | 写在另一条 SQL 里面的查询 |
| CTE | 用 `WITH` 命名的中间查询结果 |
| 中间结果 | 查询过程中临时得到的一组数据 |
| 嵌套 | 查询里再套查询 |

## 练习题

1. CTE 通常用哪个关键字开头？
2. 子查询一定写在 `WITH` 里吗？
3. 为什么复杂查询可以拆成 CTE？
4. 查询嵌套太多有什么问题？

::: tip 提示
当一条 SQL 很难一眼读懂时，可以先想“能不能把中间步骤命名”。
:::

::: details 答案
1. `WITH`。
2. 不一定，子查询可以出现在 `WHERE`、`FROM` 等位置。
3. 给中间结果取名字后，阅读和维护更容易。
4. 可读性变差，也更难排查性能问题。
:::

## 常见坑

- 为了拆而拆，简单查询也写成很多层
- CTE 名字太随意，反而更难懂
- 不看执行计划就断定 CTE 一定更快

## 先记住这三句

- 子查询是查询里的查询。
- CTE 是给中间查询结果取名字。
- 复杂 SQL 先追求清楚，再谈优化。

