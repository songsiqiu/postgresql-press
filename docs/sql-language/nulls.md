# NULL 与三值逻辑

`NULL` 表示未知或缺失。它不是空字符串，也不是数字 0。很多 SQL 判断出错，都是因为没有理解 `NULL`。

## 你学完能干什么

- 知道 `NULL` 和空字符串、0 的区别
- 能理解为什么不能用 `= NULL`
- 能看懂 `IS NULL` 和 `IS NOT NULL`
- 知道 `NULL` 会影响条件判断和聚合

## 判断 NULL

错误写法：

```sql
SELECT *
FROM notes
WHERE body = NULL;
```

正确写法：

```sql
SELECT *
FROM notes
WHERE body IS NULL;
```

判断不是空值：

```sql
SELECT *
FROM notes
WHERE body IS NOT NULL;
```

## 三值逻辑

SQL 的判断结果不只有 true 和 false，还可能是 unknown。

比如 `body = NULL` 不会得到 true，而是 unknown。`WHERE` 只保留结果为 true 的行，所以这种条件通常不会返回你想要的数据。

## 常见影响

- `count(*)` 统计所有行
- `count(column)` 通常不统计该列为 `NULL` 的行
- `NULL` 参与比较时容易得到 unknown
- 唯一约束和 `NULL` 的关系也要按数据库规则理解

## 练习题

1. `NULL` 是空字符串吗？
2. 判断某列为空应该用什么？
3. `count(*)` 和 `count(body)` 一定相同吗？
4. 为什么 `body = NULL` 不是正确判断？

::: tip 提示
遇到空值判断，先想 `IS NULL`，不要用等号。
:::

::: details 答案
1. 不是。
2. `IS NULL`。
3. 不一定，`count(body)` 不统计 `body` 为 `NULL` 的行。
4. 因为和 `NULL` 比较结果通常是 unknown，不是 true。
:::

## 常见坑

- 用 `= NULL` 判断空值
- 把 `NULL`、空字符串、0 混成一类
- 不知道聚合函数会受 `NULL` 影响

## 先记住这三句

- `NULL` 表示未知或缺失。
- 判断空值用 `IS NULL`。
- SQL 判断可能是 true、false、unknown。

