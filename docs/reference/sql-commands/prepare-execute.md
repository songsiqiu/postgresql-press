# PREPARE 与 EXECUTE 速查

`PREPARE` 用来准备一条带参数的 SQL，`EXECUTE` 用来执行已经准备好的语句。它们常用于重复执行结构相同的 SQL。

## 你学完能干什么

- 知道预处理语句解决什么问题
- 能看懂 `PREPARE` 和 `EXECUTE` 的关系
- 理解参数和直接拼接字符串的区别
- 能避免把用户输入拼进 SQL

## 准备并执行

```sql
PREPARE find_notes(bigint) AS
SELECT id, title
FROM notes
WHERE user_id = $1;
```

执行：

```sql
EXECUTE find_notes(10);
```

释放：

```sql
DEALLOCATE find_notes;
```

## 适合场景

- 同一 SQL 结构重复执行
- 参数值每次不同
- 希望减少重复解析成本
- 想让参数边界更清楚

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| 预处理语句 | 先准备 SQL 结构，再传参数执行 |
| 参数 | 执行时传入的值 |
| 拼接 SQL | 把字符串拼成 SQL，风险更高 |
| `DEALLOCATE` | 释放准备好的语句 |

## 练习题

1. `PREPARE` 是执行 SQL，还是准备 SQL 结构？
2. `EXECUTE find_notes(10)` 里的 `10` 是参数吗？
3. 用户输入适合直接拼进 SQL 吗？
4. 释放预处理语句用什么命令？

::: tip 提示
预处理语句的重点是“结构先固定，值后传入”。
:::

::: details 答案
1. 准备 SQL 结构。
2. 是。
3. 不适合。
4. `DEALLOCATE`。
:::

## 常见坑

- 把用户输入直接拼进 SQL
- 预处理语句长期不释放
- 以为预处理一定让所有查询变快
- 没分清数据库预处理和驱动层参数绑定

## 先记住这三句

- `PREPARE` 准备结构。
- `EXECUTE` 传值执行。
- 用户输入不要直接拼 SQL。
