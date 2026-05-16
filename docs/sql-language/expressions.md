# 表达式基础

表达式是 SQL 里能算出一个值的部分。列名、常量、函数调用、运算结果，都可以成为表达式。

## 你学完能干什么

- 知道表达式不是单独一种语句
- 能看懂 `SELECT`、`WHERE`、`ORDER BY` 里的表达式
- 能区分列值、常量、函数和运算
- 能避免把复杂表达式写到难以维护

## 最小例子

```sql
SELECT
  price,
  quantity,
  price * quantity AS total_amount
FROM order_items
WHERE price * quantity > 100;
```

这里的 `price * quantity` 就是表达式。它在 `SELECT` 中用于展示结果，在 `WHERE` 中用于筛选数据。

## 常见表达式

| 表达式 | 含义 |
| --- | --- |
| `price * quantity` | 算术运算 |
| `lower(email)` | 函数调用 |
| `created_at >= CURRENT_DATE` | 比较 |
| `archived = false AND owner_id = 10` | 逻辑组合 |
| `COALESCE(nickname, name)` | 空值处理 |

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| 表达式 | 能算出一个值的 SQL 片段 |
| 操作符 | 用来比较、计算或连接值的符号 |
| 函数调用 | 用函数处理输入并返回结果 |
| 别名 | 给表达式结果起一个展示名 |

## 练习题

1. `price * quantity` 是表达式吗？
2. `lower(email)` 属于哪类表达式？
3. `AS total_amount` 是在给什么起名字？
4. 表达式能不能出现在 `WHERE` 里？

::: tip 提示
看到一段 SQL 里“能算出一个结果”的部分，就可以先把它当成表达式理解。
:::

::: details 答案
1. 是。
2. 函数调用表达式。
3. 给表达式结果起别名。
4. 能。
:::

## 常见坑

- 把很复杂的表达式重复写很多遍
- 在高频筛选条件里套函数却不考虑索引影响
- 表达式别名起得不清楚
- 用表达式掩盖数据模型本身的问题

## 先记住这三句

- 表达式能算出一个值。
- 表达式可以出现在很多 SQL 子句里。
- 复杂表达式要注意可读性和性能。
