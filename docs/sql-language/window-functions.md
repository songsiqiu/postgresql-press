# 窗口函数基础

窗口函数适合做排名、累计、分组内对比。它让你在不压缩行数的情况下做统计。

## 你学完能干什么

- 知道窗口函数和普通聚合的区别
- 能看懂 `OVER`、`PARTITION BY`、`ORDER BY`
- 能写出简单排名查询
- 知道哪些报表场景适合窗口函数

## 普通聚合会压缩行

```sql
SELECT user_id, count(*) AS note_count
FROM notes
GROUP BY user_id;
```

这会把每个用户压成一行。

## 窗口函数保留明细行

```sql
SELECT
  id,
  user_id,
  title,
  row_number() OVER (
    PARTITION BY user_id
    ORDER BY id DESC
  ) AS user_note_rank
FROM notes;
```

它会给每个用户自己的笔记按 `id` 倒序编号，但仍然保留每条笔记。

示例结果：

| id | user_id | title | user_note_rank |
| --- | --- | --- | --- |
| 3 | 10 | 索引笔记 | 1 |
| 2 | 10 | SQL 查询练习 | 2 |
| 5 | 11 | 事务笔记 | 1 |

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| 窗口函数 | 在一组相关行上计算，同时保留明细行 |
| `OVER` | 说明窗口范围 |
| `PARTITION BY` | 按什么分组计算 |
| `ORDER BY` | 组内按什么顺序计算 |

## 练习题

1. 窗口函数会像 `GROUP BY` 一样把行压缩掉吗？
2. `PARTITION BY user_id` 表示什么？
3. `row_number()` 常用于什么场景？
4. 为什么报表里经常用窗口函数？

::: tip 提示
想要“既保留明细，又做组内统计或排名”时，想想窗口函数。
:::

::: details 答案
1. 不会，窗口函数通常保留明细行。
2. 按 `user_id` 分组计算窗口结果。
3. 排名、编号、取每组最新记录等。
4. 报表经常需要明细和统计同时出现。
:::

## 常见坑

- 把窗口函数和 `GROUP BY` 混成一件事
- 忘记写组内排序，排名结果不可控
- 在简单统计里强行使用窗口函数

## 先记住这三句

- 聚合常压缩行，窗口函数常保留行。
- `OVER` 定义窗口。
- 排名、累计、组内对比常用窗口函数。

