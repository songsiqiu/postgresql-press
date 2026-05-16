# TOAST 存储

TOAST 是 PostgreSQL 处理大字段的一套机制。新手不用记底层细节，先理解“大字段不一定直接塞在主表行里”。

## 你学完能干什么

- 知道 PostgreSQL 为什么需要 TOAST
- 能理解大文本、大 JSON、大二进制字段的存储特点
- 知道查询大字段可能带来额外成本
- 能避免把所有内容都堆进一个超宽表

## 为什么需要 TOAST

PostgreSQL 数据页大小是固定的，常见是 8KB。一行数据太大时，不能简单跨很多页存放。

因此，对于很大的可变长度字段，PostgreSQL 可能会：

- 压缩字段值
- 把大字段拆成片段
- 把片段放到关联的 TOAST 表里
- 主表里只保留指向大字段的引用

这个过程对普通 SQL 基本透明，但性能上仍然要有概念。

## 一个业务例子

```sql
CREATE TABLE articles (
  id bigserial PRIMARY KEY,
  title text NOT NULL,
  body text NOT NULL
);
```

如果 `body` 很大，查询列表页时最好不要总是：

```sql
SELECT *
FROM articles
ORDER BY id DESC
LIMIT 20;
```

列表页通常只需要：

```sql
SELECT id, title
FROM articles
ORDER BY id DESC
LIMIT 20;
```

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| TOAST | PostgreSQL 处理大字段的机制 |
| 大字段 | 很长的文本、JSON、二进制等 |
| 主表行 | 表里普通查询最先看到的那部分行数据 |
| 压缩 | 减少存储体积 |
| 外部存储 | 大字段内容放到关联存储里 |

## 练习题

1. TOAST 主要为了解决什么问题？
2. 列表页为什么不建议总是 `SELECT *`？
3. 大字段处理对普通 SQL 是完全不可见的吗？
4. 很大的 `text`、`jsonb` 字段是否可能触发 TOAST？

::: tip 提示
看到“大文本、大 JSON、大文件内容”，就要想到它可能不是普通小字段。
:::

::: details 答案
1. 处理一行里过大的可变长度字段。
2. 可能读取不需要的大字段，增加 I/O 和传输成本。
3. 功能上大多透明，但性能上仍然有影响。
4. 可能。
:::

## 常见坑

- 所有页面都用 `SELECT *`
- 把列表摘要和大正文混在同一次查询里
- 以为大字段没有存储和读取成本
- 用数据库直接保存大量不该放入表字段的内容

## 先记住这三句

- TOAST 帮 PostgreSQL 处理大字段。
- 透明不等于没有成本。
- 列表页少查大字段。
