# 数组与枚举

PostgreSQL 支持数组和枚举。它们能让某些建模更自然，但也容易被滥用。

## 你学完能干什么

- 知道数组适合存什么
- 知道枚举适合稳定的小范围取值
- 能判断什么时候应该拆成关联表
- 不会把数组当成万能的一对多方案

## 数组例子

```sql
CREATE TABLE posts (
  id bigserial PRIMARY KEY,
  title text NOT NULL,
  tags text[] NOT NULL DEFAULT '{}'
);

INSERT INTO posts (title, tags)
VALUES ('PostgreSQL 入门', ARRAY['database', 'sql']);
```

查询包含某个标签的文章：

```sql
SELECT title
FROM posts
WHERE 'sql' = ANY(tags);
```

## 枚举例子

```sql
CREATE TYPE order_status AS ENUM ('pending', 'paid', 'cancelled');

CREATE TABLE orders (
  id bigserial PRIMARY KEY,
  status order_status NOT NULL
);
```

枚举适合状态值很稳定的场景。如果状态经常变，普通表可能更灵活。

## 什么时候慎用

- 需要频繁新增或调整枚举值
- 数组里的元素需要单独统计、授权或关联
- 数组内容会越来越大
- 未来可能要给数组元素加更多字段

## 练习题

1. `text[]` 表示什么？
2. 枚举适合经常变化的状态吗？
3. 如果标签需要单独统计和管理，数组一定合适吗？
4. 查询数组里是否包含某个值，可以想到哪个写法？

::: tip 提示
数组适合简单列表，枚举适合稳定状态。复杂关系优先考虑拆表。
:::

::: details 答案
1. 文本数组。
2. 不太适合。
3. 不一定，可能更适合单独建标签表和关联表。
4. `value = ANY(array_column)`。
:::

## 常见坑

- 用数组存复杂一对多关系
- 枚举值还没稳定就建枚举类型
- 后续需要统计数组元素时才发现查询复杂

## 先记住这三句

- 数组不是关系表的替代品。
- 枚举适合稳定的小范围取值。
- 建模先看未来怎么查和怎么维护。

