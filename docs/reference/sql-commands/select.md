# SELECT 速查

`SELECT` 用来查询数据。它是最常用的 SQL 命令，也是学习 PostgreSQL 的第一站。

## 你学完能干什么

- 能知道 `SELECT` 的基本结构
- 能用 `WHERE`、`ORDER BY`、`LIMIT` 控制结果
- 能区分查询列和过滤条件
- 能避免一次查出过多数据

## 最小写法

```sql
SELECT id, title
FROM notes
WHERE user_id = 10
ORDER BY id DESC
LIMIT 20;
```

这条 SQL 的意思是：从 `notes` 表里找 `user_id = 10` 的记录，只展示 `id` 和 `title`，按 `id` 倒序，最多返回 20 行。

## 常见结构

| 片段 | 作用 |
| --- | --- |
| `SELECT` | 决定展示哪些列 |
| `FROM` | 决定从哪张表或结果集读取 |
| `WHERE` | 过滤行 |
| `ORDER BY` | 控制排序 |
| `LIMIT` | 限制返回数量 |

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| 查询列 | 最后展示出来的列 |
| 条件 | 决定哪些行会留下 |
| 排序 | 决定结果先后顺序 |
| 限制数量 | 防止一次返回太多行 |

## 练习题

1. `SELECT id, title` 决定的是展示列还是过滤条件？
2. `WHERE user_id = 10` 会保留哪些行？
3. `ORDER BY id DESC` 是从大到小还是从小到大？
4. 为什么列表查询常常要加 `LIMIT`？

::: tip 提示
读 `SELECT` 时先看 `FROM` 和 `WHERE`，再看展示列、排序和数量。
:::

::: details 答案
1. 展示列。
2. `user_id` 等于 10 的行。
3. 从大到小。
4. 避免一次返回太多数据，影响性能和阅读。
:::

## 常见坑

- 直接 `SELECT *`，结果列太多
- 没有 `WHERE`，查出不需要的数据
- 没有稳定排序就做分页
- 忘记 `LIMIT`，一次返回大量数据

## 先记住这三句

- `SELECT` 只读数据，不修改数据。
- `WHERE` 控制范围。
- 列表查询要注意排序和数量。
