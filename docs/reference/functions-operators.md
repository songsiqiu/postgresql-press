# 函数与操作符

函数和操作符让 SQL 不只是读取字段，还能计算、转换、比较和处理文本。

## 你学完能干什么

- 能区分函数和操作符
- 知道常见文本、时间、聚合函数的用途
- 能查函数时先按用途分类

## 函数和操作符有什么区别

函数通常像这样：

```sql
SELECT lower('PostgreSQL');
```

操作符通常像这样：

```sql
SELECT 10 + 5;
```

两者都能表达计算，只是写法不同。

## 常见分类

| 分类 | 示例 | 用途 |
| --- | --- | --- |
| 文本 | `lower`、`length` | 转小写、计算长度 |
| 时间 | `now`、`date_trunc` | 当前时间、截断时间 |
| 聚合 | `count`、`sum`、`avg` | 统计数量、求和、平均 |
| 条件 | `coalesce`、`nullif` | 处理空值和条件值 |
| JSON | `->`、`->>` | 读取 JSON 字段 |
| 数组 | `array_length`、`unnest` | 数组长度、展开数组 |
| 范围 | `@>`、`&&` | 包含、重叠 |
| 全文检索 | `to_tsvector`、`@@` | 文本检索 |
| 序列 | `nextval`、`setval` | 取序列值、调整序列 |
| 网络地址 | `inet`、`cidr` 操作符 | IP 和网段判断 |

## 常查入口

- [字符串函数速查](/reference/string-functions)
- [日期时间函数速查](/reference/datetime-functions)
- [JSON 函数速查](/reference/json-functions)
- [数学函数速查](/reference/math-functions)
- [聚合函数速查](/reference/aggregate-functions)
- [数组函数速查](/reference/array-functions)
- [范围函数速查](/reference/range-functions)
- [全文检索函数速查](/reference/full-text-functions)
- [序列函数速查](/reference/sequence-functions)
- [网络地址函数速查](/reference/network-functions)
- [条件函数速查](/reference/conditional-functions)

## 练习题

1. `count(*)` 常用来做什么？
2. `lower('ABC')` 的结果是什么？
3. `coalesce(a, b)` 大概解决什么问题？
4. `->>` 在 JSON 查询里常用来取什么？

::: tip 提示
查函数时不要从字母表硬找，先按“文本、时间、聚合、JSON”分类。
:::

::: details 答案
1. 统计行数。
2. `abc`。
3. 当第一个值为空时，返回后面的可用值。
4. 取 JSON 字段里的文本值。
:::

## 常见坑

- 在 `WHERE` 里对列做函数处理，导致索引不好用
- 忽略空值，导致结果和预期不同
- 把 JSON 操作符和普通列查询混淆
- 用数组替代复杂关系建模
- 把全文检索当成完整搜索平台
- 把序列当成连续业务流水号保证

## 先记住这三句

- 函数负责计算和转换。
- 操作符也是表达逻辑的一种方式。
- 空值处理要特别小心。
