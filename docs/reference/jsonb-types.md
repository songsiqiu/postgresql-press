# JSONB 类型速查

`jsonb` 用来保存半结构化数据。它适合灵活属性，但不应该替代所有关系表设计。

## 你学完能干什么

- 知道 `jsonb` 适合什么数据
- 能理解 JSONB 和普通文本不同
- 知道核心查询字段不应轻易藏进 JSONB
- 能避免把 JSONB 当成万能字段

## 一个例子

```sql
CREATE TABLE events (
  id bigserial PRIMARY KEY,
  name text NOT NULL,
  payload jsonb NOT NULL
);
```

查询 JSONB 字段：

```sql
SELECT payload ->> 'source'
FROM events;
```

`->>` 会取出文本值。

## 适合场景

- 外部事件原始载荷
- 属性不稳定的补充信息
- 少量低频查询的灵活字段
- 不适合核心关系和高频过滤字段

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| JSON | 文本格式的数据结构 |
| JSONB | 更适合查询和索引的二进制 JSON |
| `->` | 取 JSON 值 |
| `->>` | 取文本值 |

## 练习题

1. `jsonb` 适合保存半结构化数据吗？
2. `->>` 取出的通常是 JSON 值还是文本值？
3. 核心查询字段适合都藏进 JSONB 吗？
4. JSONB 和普通 `text` 是一回事吗？

::: tip 提示
JSONB 解决灵活属性，不解决所有建模问题。
:::

::: details 答案
1. 适合。
2. 文本值。
3. 不适合。
4. 不是。
:::

## 常见坑

- 用 JSONB 替代所有表设计
- 高频过滤字段藏在 JSONB 里
- 不考虑 JSONB 索引策略
- JSON 结构没有版本和校验口径

## 先记住这三句

- JSONB 适合半结构化数据。
- 核心字段优先建成普通列。
- JSONB 也需要索引和校验设计。
