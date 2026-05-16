# SQL 核心

SQL 是你和 PostgreSQL 沟通的主要语言。新手不需要一开始就背完整语法，先掌握日常开发最常用的几类语句。

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
