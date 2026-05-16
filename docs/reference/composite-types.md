# 复合类型速查

复合类型是一组字段组成的类型。每张表本身都会隐式产生一个同名复合类型，也可以用 `CREATE TYPE` 显式创建。

## 你学完能干什么

- 知道复合类型是什么
- 能创建一个简单复合类型
- 知道普通表设计不需要为了新奇而滥用复合类型

## 可运行例子

```sql
CREATE TYPE money_with_currency AS (
  amount numeric,
  currency text
);

CREATE TABLE invoices (
  id bigserial PRIMARY KEY,
  total money_with_currency NOT NULL
);

INSERT INTO invoices (total)
VALUES (ROW(99.90, 'CNY')::money_with_currency);

SELECT (total).amount, (total).currency
FROM invoices;
```

访问复合类型里的字段时，可以使用 `(字段名).子字段`。

## 容易混淆的词

| 词 | 区别 |
| --- | --- |
| 复合类型 | 多个字段组成的一个类型 |
| 表 | 保存多行数据的关系对象 |
| 行类型 | 表对应的一行结构，也是一种复合结构 |
| JSONB | 灵活半结构化数据，不提供固定子字段类型 |

## 练习题

1. 复合类型能包含多个字段吗？
2. 每张表是否会对应一种行结构？
3. 访问复合字段里的 `amount` 可以怎么写？
4. 所有嵌套数据都应该优先用复合类型吗？

::: tip 提示
复合类型适合表达稳定的一组字段，但复杂关系仍然优先考虑正常建表。
:::

::: details 答案
1. 能。
2. 会。
3. `(total).amount`。
4. 不应该。
:::

## 常见坑

- 用复合类型逃避表关系设计
- 子字段需要单独索引和约束时仍塞进复合类型
- 和 JSONB 的适用边界混淆
- 查询复合字段时忘记加括号

## 先记住这三句

- 复合类型是一组字段组成的类型。
- 表的一行也可以理解成一种复合结构。
- 复杂关系不要靠复合类型硬藏起来。
