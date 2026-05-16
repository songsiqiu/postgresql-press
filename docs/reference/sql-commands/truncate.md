# TRUNCATE 速查

`TRUNCATE` 用来快速清空表里的所有行。它不是按条件删除，不能像 `DELETE` 那样加普通 `WHERE`。

## 你学完能干什么

- 知道 `TRUNCATE` 会清空整张表
- 能区分 `TRUNCATE` 和 `DELETE`
- 知道它可能影响关联表和序列
- 能避免误清空生产数据

## 最小写法

```sql
TRUNCATE TABLE demo_tags;
```

这会清空 `demo_tags` 表中的所有行。

如果要同时重置自增序列：

```sql
TRUNCATE TABLE demo_tags RESTART IDENTITY;
```

## 和 DELETE 的区别

| 命令 | 新手理解 |
| --- | --- |
| `DELETE` | 可以按条件删除行 |
| `TRUNCATE` | 快速清空整张表 |
| `DROP TABLE` | 删除表结构 |

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| 清空表 | 删除表里的所有行 |
| 重置序列 | 让自增编号从起点重新来 |
| 级联 | 同时影响依赖对象 |
| 表结构 | 列、约束、索引这些定义 |

## 练习题

1. `TRUNCATE` 能不能像普通 `DELETE` 一样加 `WHERE`？
2. `TRUNCATE TABLE demo_tags` 会删除表结构吗？
3. `RESTART IDENTITY` 和自增编号有没有关系？
4. 为什么生产库执行 `TRUNCATE` 前要特别谨慎？

::: tip 提示
看到 `TRUNCATE`，先把它当成“整表清空”来理解。
:::

::: details 答案
1. 不能。
2. 不会，表结构还在。
3. 有，它会重置相关序列。
4. 因为它会快速清空整张表的数据。
:::

## 常见坑

- 把 `TRUNCATE` 当成带条件删除
- 在生产库误清空整张表
- 忘记外键关系可能阻止或影响清空
- 没确认是否需要重置自增序列

## 先记住这三句

- `TRUNCATE` 是整表清空。
- `DELETE` 可以按条件删行。
- 清空生产数据前必须确认环境和备份。
