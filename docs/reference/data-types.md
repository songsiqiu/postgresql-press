# 数据类型

数据类型决定一列能存什么，也影响查询、索引和约束。新手不需要一开始背完整类型表，先掌握常见类型的选择原则。

## 你学完能干什么

- 能为常见字段选择基本类型
- 知道金额、时间、文本、布尔值该怎么选
- 不会随手把所有内容都存成字符串

## 常见类型速查

| 类型 | 适合存什么 | 细分页 |
| --- | --- |
| `bigint` | 整数编号、计数 | [数值类型速查](/reference/numeric-types) |
| `bigserial` | 自增主键 | [数值类型速查](/reference/numeric-types) |
| `text` | 长短不固定的文本 | [字符类型速查](/reference/character-types) |
| `boolean` | true/false | [布尔类型速查](/reference/boolean-types) |
| `numeric` | 金额、精确小数 | [数值类型速查](/reference/numeric-types) |
| `timestamptz` | 具体时间点 | [日期时间类型速查](/reference/datetime-types) |
| `date` | 日期 | [日期时间类型速查](/reference/datetime-types) |
| `jsonb` | 半结构化数据 | [JSONB 类型速查](/reference/jsonb-types) |
| `uuid` | 全局唯一标识 | [UUID 速查](/reference/uuid) |
| `text[]` | 文本数组 | [数组与范围类型速查](/reference/array-range-types) |
| `tstzrange` | 带时区时间范围 | [数组与范围类型速查](/reference/array-range-types) |

## 选择建议

- 金额用 `numeric`，不要随手用浮点数
- 时间点优先考虑 `timestamptz`
- 文本长度没有明确业务限制时，可以用 `text`
- 核心查询字段不要轻易藏进 `jsonb`

## 细分入口

- [数值类型速查](/reference/numeric-types)
- [字符类型速查](/reference/character-types)
- [布尔类型速查](/reference/boolean-types)
- [日期时间类型速查](/reference/datetime-types)
- [JSONB 类型速查](/reference/jsonb-types)
- [数组与范围类型速查](/reference/array-range-types)
- [UUID 速查](/reference/uuid)

## 练习题

1. 金额字段优先考虑哪个类型？
2. 只表示“是否启用”适合哪个类型？
3. 创建时间适合用哪个时间类型？
4. 为什么不要把所有字段都存成 `text`？

::: tip 提示
类型选择的目标是让数据更准确，而不是让建表看起来更简单。
:::

::: details 答案
1. `numeric`。
2. `boolean`。
3. `timestamptz`。
4. 会丢失数据库对格式、比较、计算和约束的帮助。
:::

## 常见坑

- 金额用浮点数
- 时间都存字符串
- 结构稳定的数据也塞进 JSON
- 用数组逃避一对多关系
- 忽略 `NULL` 和空字符串、空数组的区别

## 先记住这三句

- 类型是数据质量的一部分。
- 金额要精确，时间要语义清楚。
- 不要用字符串逃避建模。
