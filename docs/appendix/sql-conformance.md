# SQL 兼容性

SQL 兼容性说明 PostgreSQL 和 SQL 标准之间哪些地方一致，哪些地方有扩展或差异。

## 你学完能干什么

- 知道“能在 PostgreSQL 跑”不等于“所有数据库都能跑”
- 能区分 SQL 标准能力和 PostgreSQL 扩展能力
- 迁移数据库时知道要检查语法差异

## 可运行例子

下面这类写法很常见，但迁移到别的数据库前要确认支持情况：

```sql
INSERT INTO demo_users (email, name)
VALUES ('a@example.com', 'A')
ON CONFLICT (email) DO UPDATE
SET name = EXCLUDED.name;
```

在 PostgreSQL 里这叫 UPSERT。别的数据库可能有不同语法。

## 容易混淆的词

| 词 | 区别 |
| --- | --- |
| SQL 标准 | 多个数据库共同参考的语言规范 |
| PostgreSQL 扩展 | PostgreSQL 提供的额外能力或语法 |
| 兼容性 | 语法和行为是否符合某个标准或目标数据库 |
| 可移植性 | 换数据库时 SQL 是否容易迁移 |

## 练习题

1. PostgreSQL 能执行的 SQL 是否一定能在所有数据库执行？
2. 数据库迁移前为什么要检查 SQL 兼容性？
3. `ON CONFLICT` 这类能力迁移时要注意什么？

::: tip 提示
先让 SQL 在 PostgreSQL 里写清楚；需要跨数据库时，再专门检查兼容性。
:::

::: details 答案
1. 不一定。
2. 不同数据库的语法和行为可能不同。
3. 要确认目标数据库是否支持同样语法，或是否需要改写。
:::

## 常见坑

- 把 PostgreSQL 扩展当成所有数据库通用语法
- 只检查语法，不检查 NULL、时间、事务等行为差异
- 迁移前没有列出关键 SQL 清单

## 先记住这三句

- PostgreSQL 支持 SQL 标准，也有自己的扩展。
- 能跑不代表跨库可移植。
- 迁移数据库前要检查关键 SQL。
