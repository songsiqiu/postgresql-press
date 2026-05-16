# 约束与关系

约束用来保护数据质量。它不是为了让建表变复杂，而是为了让错误数据尽早被挡住。

## 你学完能干什么

- 知道主键、外键、唯一约束、非空约束分别解决什么问题
- 能看懂两张表之间的关系
- 明白为什么数据库层也要做限制

## 常见约束

| 约束 | 解决什么问题 |
| --- | --- |
| `PRIMARY KEY` | 每行有唯一身份 |
| `NOT NULL` | 关键字段不能空 |
| `UNIQUE` | 某个值不能重复 |
| `CHECK` | 值必须满足条件 |
| `FOREIGN KEY` | 关联到另一张表的有效记录 |

## 外键例子

```sql
CREATE TABLE demo_users (
  id bigserial PRIMARY KEY,
  name text NOT NULL
);

CREATE TABLE demo_notes (
  id bigserial PRIMARY KEY,
  user_id bigint NOT NULL REFERENCES demo_users (id),
  title text NOT NULL
);
```

这里的 `demo_notes.user_id` 必须指向一个真实存在的用户。

## 新手容易误解的点

- 外键不是“查询时自动关联”，它主要负责保证关系有效。
- 唯一约束不是索引的同义词，但 PostgreSQL 会用索引来支持唯一约束。
- 约束越清楚，应用代码越不容易把脏数据写进去。

## 练习题

1. 给用户表加一个 `email text UNIQUE` 字段。
2. 给笔记表加一个 `CHECK (title <> '')` 约束。
3. 尝试插入一个不存在用户的笔记，观察数据库怎么拒绝。
4. 说出主键和唯一约束的区别。
5. 为什么外键能减少“孤儿数据”？

::: tip 提示
约束不是为了麻烦开发，而是为了让错误数据尽早被数据库挡住。
:::

::: details 答案
1. `ALTER TABLE demo_users ADD COLUMN email text UNIQUE;`
2. `ALTER TABLE demo_notes ADD CONSTRAINT demo_notes_title_not_empty CHECK (title <> '');`
3. 会因为外键找不到对应用户而失败。
4. 主键用于标识每一行，通常不为空；唯一约束用于保证某列或某组列不重复。
5. 因为子表必须引用父表里真实存在的记录。
:::

## 常见坑

- 以为外键会自动帮你写关联查询
- 该唯一的数据没有唯一约束
- 把所有校验都放在应用层，数据库不设防

## 先记住这三句

- 主键回答“这一行是谁”。
- 外键回答“它关联的对象是否真实存在”。
- 约束越清楚，脏数据越难进入系统。
