# SQL 核心

SQL 是你和 PostgreSQL 沟通的主要语言。新手不需要一开始就背完整语法，先掌握日常开发最常用的几类语句。

## 你学完能干什么

- 能写出最常用的查询、插入、修改和删除语句
- 能看懂一条 SQL 每个部分分别在做什么
- 能先用查询确认范围，再安全地修改数据
- 能理解关联查询和统计查询为什么常用

## 查询数据

```sql
SELECT id, title, created_at
FROM notes
WHERE title LIKE '%笔记%'
ORDER BY created_at DESC
LIMIT 20;
```

这条 SQL 做了几件事：

- `SELECT` 决定看哪些列
- `FROM` 决定从哪张表查
- `WHERE` 决定筛选条件
- `ORDER BY` 决定排序
- `LIMIT` 限制返回数量

## 写入数据

```sql
INSERT INTO notes (title, body)
VALUES ('SQL 学习', '先学查询，再学关联和统计');
```

## 修改数据

```sql
UPDATE notes
SET body = '已经更新内容'
WHERE id = 1;
```

`UPDATE` 一定要认真写 `WHERE`。没有条件时，它会修改整张表。

## 删除数据

```sql
DELETE FROM notes
WHERE id = 1;
```

`DELETE` 也一样，条件要明确。学习阶段可以先用 `SELECT` 查一遍条件命中的数据，再执行删除。

## 关联查询

真实业务里，数据通常分在多张表。比如 `users` 存用户，`notes` 存笔记：

```sql
SELECT n.id, n.title, u.name AS author_name
FROM notes n
JOIN users u ON u.id = n.user_id
WHERE u.name = 'Alice';
```

先把 `JOIN` 理解成“按条件把两张表的行拼起来”。

## 聚合统计

```sql
SELECT user_id, count(*) AS note_count
FROM notes
GROUP BY user_id
ORDER BY note_count DESC;
```

这类 SQL 常用于报表、列表统计和后台管理页面。

## 动手区：改一改 SQL 会发生什么

先假设有这样一张表：

| id | title | user_id | created_at |
| --- | --- | --- | --- |
| 1 | PostgreSQL 入门 | 10 | 2026-05-01 |
| 2 | SQL 查询练习 | 10 | 2026-05-02 |
| 3 | 索引笔记 | 11 | 2026-05-03 |

试着改下面这条 SQL：

```sql
SELECT id, title
FROM notes
WHERE user_id = 10
ORDER BY id DESC;
```

当前结果：

| id | title |
| --- | --- |
| 2 | SQL 查询练习 |
| 1 | PostgreSQL 入门 |

你可以尝试：

- 把 `user_id = 10` 改成 `user_id = 11`
- 把 `DESC` 改成 `ASC`
- 把 `SELECT id, title` 改成 `SELECT *`

## 容易混淆的词

| 词 | 一句话解释 |
| --- | --- |
| 查询 | 只读取数据，不修改数据 |
| 条件 | 决定哪些行会被选中 |
| 排序 | 决定结果显示顺序，不改变表里的真实存储顺序 |
| 关联 | 按条件把多张表的内容合起来看 |

## 练习题

1. 写一条 SQL，查出 `notes` 表里 `user_id = 10` 的所有笔记。
2. 把查询结果按 `created_at` 从新到旧排序。
3. 写一条 SQL，插入一条标题为 `事务练习` 的笔记。
4. 写一条 SQL，把 `id = 1` 的笔记标题改成 `PostgreSQL 基础入门`。
5. 删除数据前，应该先做哪一步？

::: tip 提示
先写 `SELECT`，再补 `FROM`，最后加 `WHERE` 和 `ORDER BY`。修改和删除前，先用同样条件查一遍。
:::

::: details 答案
1. `SELECT * FROM notes WHERE user_id = 10;`
2. `SELECT * FROM notes WHERE user_id = 10 ORDER BY created_at DESC;`
3. `INSERT INTO notes (title) VALUES ('事务练习');`
4. `UPDATE notes SET title = 'PostgreSQL 基础入门' WHERE id = 1;`
5. 先用同样的 `WHERE` 条件执行 `SELECT`，确认会命中哪些数据。
:::

## 常见坑

- 忘记 `WHERE` 就执行 `UPDATE` 或 `DELETE`
- 以为 `ORDER BY` 会改变表里数据的存储顺序
- `JOIN` 条件写错，导致结果数量突然变多

## 先记住这三句

- SQL 先从“查清楚”开始学。
- 修改和删除前，先确认命中范围。
- 关联和统计是后台系统里最常见的 SQL 场景。
