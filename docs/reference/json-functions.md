# JSON 函数速查

JSON 函数和操作符用来读取、构造和处理 JSON/JSONB 数据。新手先掌握取字段、判断包含和展开数组。

## 你学完能干什么

- 能查到常见 JSONB 操作入口
- 知道 `->` 和 `->>` 的区别
- 能理解包含查询和索引的关系
- 知道 JSONB 不应该替代所有表结构设计

## 常用写法

| 写法 | 用途 |
| --- | --- |
| `data -> 'name'` | 取 JSON 值 |
| `data ->> 'name'` | 取文本值 |
| `data @> '{"vip": true}'` | 判断是否包含 |
| `jsonb_array_elements(data)` | 展开 JSONB 数组 |
| `jsonb_build_object('id', id)` | 构造 JSONB 对象 |

## 一个例子

```sql
SELECT id, profile ->> 'name' AS name
FROM users
WHERE profile @> '{"vip": true}';
```

这条 SQL 从 `profile` 中取出 `name`，并筛选包含 `vip: true` 的用户。

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| `json` | 保存 JSON 文本 |
| `jsonb` | 更适合查询和索引的二进制格式 |
| `->` | 返回 JSON 值 |
| `->>` | 返回文本 |
| 包含 | 判断 JSONB 是否包含某个结构 |

## 练习题

1. `->>` 返回 JSON 值还是文本？
2. 判断 JSONB 是否包含某个结构，可以用哪个操作符？
3. JSONB 适合替代所有关系表设计吗？
4. 经常按 JSONB 内容查询时，是否需要考虑索引？

::: tip 提示
取字段先分清你要 JSON 值，还是要文本值。
:::

::: details 答案
1. 文本。
2. `@>`。
3. 不适合。
4. 需要。
:::

## 常见坑

- 分不清 `->` 和 `->>`
- 把所有可变字段都塞进 JSONB，导致约束和查询变复杂
- 高频 JSONB 查询不考虑索引
- JSONB 结构没有版本和口径管理

## 先记住这三句

- JSONB 适合半结构化数据。
- `->` 取 JSON，`->>` 取文本。
- 高频 JSONB 查询要考虑索引。
