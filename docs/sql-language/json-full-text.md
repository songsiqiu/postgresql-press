# JSON 与全文检索

PostgreSQL 不只适合传统表结构，也支持 JSON 数据和全文检索。新手先知道它们适合什么场景，不要一上来滥用。

## 你学完能干什么

- 知道 `jsonb` 适合存什么
- 能理解 JSON 字段和普通列的取舍
- 知道全文检索和 `LIKE` 的区别
- 能判断什么时候先不要用复杂能力

## JSONB 适合什么

`jsonb` 适合保存结构不完全固定、但又需要放进数据库统一管理的数据。

```sql
CREATE TABLE events (
  id bigserial PRIMARY KEY,
  payload jsonb NOT NULL
);

INSERT INTO events (payload)
VALUES ('{"type": "login", "user_id": 10}');
```

查询 JSON 里的字段：

```sql
SELECT payload ->> 'type' AS event_type
FROM events;
```

结果：

| event_type |
| --- |
| login |

## 全文检索适合什么

`LIKE '%关键词%'` 可以做简单匹配，但复杂搜索更适合全文检索。

全文检索更关注词、词形、排序和匹配质量，不只是字符串里有没有一段字符。

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| `json` | 保存 JSON 文本 |
| `jsonb` | PostgreSQL 更常用的二进制 JSON 表示 |
| `LIKE` | 简单字符串匹配 |
| 全文检索 | 更适合文章、标题、描述这类文本搜索 |

## 练习题

1. `jsonb` 适合完全固定的核心字段吗？
2. 查询 JSON 字段里的文本值可以用哪个操作符？
3. `LIKE` 和全文检索分别适合什么？

::: tip 提示
稳定、常查、常关联的字段，优先考虑普通列，不要都塞进 JSON。
:::

::: details 答案
1. 不太适合。核心固定字段通常用普通列更清楚。
2. `->>`。
3. `LIKE` 适合简单字符串匹配，全文检索适合更复杂的文本搜索。
:::

## 常见坑

- 把所有字段都塞进 JSON，最后查询和约束都变难
- 用 `LIKE '%关键词%'` 扛所有搜索需求
- 没有想清楚索引和查询方式就大量使用 JSON

## 先记住这三句

- JSON 是补充能力，不是表结构替代品。
- 固定核心字段优先用普通列。
- 复杂文本搜索再考虑全文检索。

