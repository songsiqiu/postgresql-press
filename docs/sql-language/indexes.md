# 索引基础

索引是 SQL 语言和性能之间最常见的交叉点。它不是为了“显得专业”，而是为了让数据库更快找到需要的数据。

## 你学完能干什么

- 知道什么时候应该考虑索引
- 能区分主键索引、普通索引和唯一索引
- 能理解索引会提高读取，也会增加写入成本
- 能用查询条件反推可能需要的索引

## 最小例子

如果经常按 `user_id` 查笔记：

```sql
SELECT id, title
FROM notes
WHERE user_id = 10;
```

可以考虑：

```sql
CREATE INDEX idx_notes_user_id ON notes (user_id);
```

这表示给 `notes.user_id` 建一个普通索引。

## 组合索引

如果查询经常同时筛选用户并按时间排序：

```sql
SELECT id, title
FROM notes
WHERE user_id = 10
ORDER BY created_at DESC
LIMIT 20;
```

可以考虑：

```sql
CREATE INDEX idx_notes_user_created_at
ON notes (user_id, created_at DESC);
```

组合索引的列顺序很重要。新手先记住：把最稳定、最常用的筛选条件放在前面。

## 动手区：给查询选索引

先看三条查询：

```sql
-- A：按用户查最近笔记
SELECT id, title
FROM notes
WHERE user_id = 10
ORDER BY created_at DESC
LIMIT 20;

-- B：按标题精确查
SELECT id, title
FROM notes
WHERE title = 'SQL 学习';

-- C：只查最近 20 条
SELECT id, title
FROM notes
ORDER BY created_at DESC
LIMIT 20;
```

可以这样思考：

| 查询 | 更可能考虑的索引 | 原因 |
| --- | --- | --- |
| A | `(user_id, created_at DESC)` | 先筛用户，再按时间取前几条 |
| B | `(title)` | 条件只看标题 |
| C | `(created_at DESC)` | 没有用户条件，只按时间排序 |

如果把 A 的 `WHERE user_id = 10` 去掉，原来的组合索引就不一定还是最合适的选择。

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| 普通索引 | 帮助查询定位数据 |
| 唯一索引 | 既帮助查询，也保证值不重复 |
| 组合索引 | 多列一起组成一个索引 |
| 主键索引 | 主键背后通常会有唯一索引支持 |

## 练习题

1. 经常按 `email` 查用户，可能给哪一列建索引？
2. 如果 `email` 不能重复，应该考虑普通索引还是唯一约束？
3. 为什么索引太多会影响写入？
4. `WHERE user_id = 10 ORDER BY created_at DESC` 可能适合哪种组合索引？

::: tip 提示
索引从真实查询出发，不从字段列表出发。
:::

::: details 答案
1. `email`。
2. 唯一约束，数据库会用唯一索引支持它。
3. 插入、更新、删除数据时，索引也要同步维护。
4. `(user_id, created_at DESC)`。
:::

## 常见坑

- 给每个字段都建索引
- 不看查询条件，只看字段名猜索引
- 建了组合索引，却把列顺序写反

## 先记住这三句

- 索引服务具体查询。
- 唯一约束也能帮助保证数据质量。
- 索引会加快一些读取，也会增加写入成本。
