# 数据定义

DDL 主要处理表、模式、索引、约束这些结构问题。它决定数据能怎么存、哪些数据不允许进表。

## 你学完能干什么

- 创建一张表
- 选择基本字段类型
- 给表加主键、唯一约束和非空约束
- 理解为什么结构改动要谨慎

```sql
CREATE TABLE demo_tags (
  id bigserial PRIMARY KEY,
  name text NOT NULL UNIQUE
);
```

结构类语句会影响后续整个表的使用方式，所以通常要比查询更谨慎。

## 建表时先问四个问题

1. 这张表表示什么业务对象？
2. 每一行表示什么？
3. 哪些列不能为空？
4. 哪些列不能重复？

## 常见字段类型

| 类型 | 常见用途 |
| --- | --- |
| `bigint` | 整数编号、计数 |
| `bigserial` | 自增编号 |
| `text` | 文本 |
| `boolean` | 是或否 |
| `numeric` | 需要精确的小数 |
| `timestamptz` | 时间点 |
| `jsonb` | 半结构化数据 |

## 修改表结构

```sql
ALTER TABLE demo_tags
ADD COLUMN created_at timestamptz NOT NULL DEFAULT now();
```

结构变更会影响已有数据。线上改表前，要先确认表大小、默认值、锁影响和回滚方案。

## 练习题

1. 给 `demo_tags` 增加一个 `description text` 字段。
2. 新建一张 `demo_users` 表，包含 `id`、`name`、`created_at`。
3. 思考：`name` 应不应该加唯一约束？为什么？
4. 给 `demo_users` 的 `name` 加上 `NOT NULL`。
5. 说出 `numeric` 和普通浮点小数在使用场景上的区别。

::: tip 提示
建表先想“每一行表示什么”，再决定字段和约束。
:::

::: details 答案
1. `ALTER TABLE demo_tags ADD COLUMN description text;`
2. 可以写成：`CREATE TABLE demo_users (id bigserial PRIMARY KEY, name text NOT NULL, created_at timestamptz NOT NULL DEFAULT now());`
3. 要看业务。如果用户名不能重复，可以加；如果允许重名，就不该加。
4. 建表时写 `name text NOT NULL`，已有表可用 `ALTER TABLE` 调整。
5. `numeric` 适合金额这类需要精确的小数。
:::

## 常见坑

- 还没想清楚业务含义就建表
- 该限制的数据不加约束，全靠应用代码记住
- 在线上大表上随手改结构

## 先记住这三句

- 表结构决定数据怎么进入系统。
- 约束是保护数据的第一道门。
- 线上改表要先评估影响。
