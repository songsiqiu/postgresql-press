# 全文检索函数速查

全文检索函数用于把文本转换成可搜索的形式，并按词匹配查询。它比简单 `LIKE` 更适合复杂文本搜索。

## 你学完能干什么

- 知道 `tsvector` 和 `tsquery` 的基本关系
- 能看懂最小全文检索写法
- 理解全文检索和 `LIKE` 的区别
- 能避免把全文检索当成万能搜索引擎

## 最小例子

```sql
SELECT to_tsvector('simple', 'PostgreSQL search is useful')
       @@ to_tsquery('simple', 'search');
```

结果是 `true`。

更常见的表查询：

```sql
SELECT id, title
FROM notes
WHERE to_tsvector('simple', title) @@ plainto_tsquery('simple', 'postgresql search');
```

## 常见函数

| 函数 | 新手解释 |
| --- | --- |
| `to_tsvector` | 把文本变成可检索向量 |
| `to_tsquery` | 写查询条件 |
| `plainto_tsquery` | 把普通文本转换成查询条件 |
| `ts_rank` | 给匹配结果算相关度 |

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| `tsvector` | 文本处理后的检索形式 |
| `tsquery` | 全文检索查询条件 |
| 词典 | 文本分词和规范化规则 |
| 相关度 | 结果和查询的匹配程度 |

## 练习题

1. `to_tsvector` 处理文本还是数字？
2. `@@` 常用来判断什么？
3. `plainto_tsquery` 适合把普通搜索词转成查询条件吗？
4. 全文检索能完全替代专业搜索系统吗？

::: tip 提示
全文检索适合数据库内文本搜索，但复杂搜索仍要评估专门搜索系统。
:::

::: details 答案
1. 文本。
2. 全文检索是否匹配。
3. 适合。
4. 不一定，复杂场景要评估。
:::

## 常见坑

- 用 `LIKE '%词%'` 扛所有搜索需求
- 忽略语言和词典配置
- 在查询里重复计算 `to_tsvector` 却不考虑索引
- 把全文检索当成完整搜索平台

## 先记住这三句

- `tsvector` 是被检索文本。
- `tsquery` 是搜索条件。
- 全文检索比 `LIKE` 更适合文本搜索。
