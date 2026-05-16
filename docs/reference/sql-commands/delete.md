# DELETE 速查

`DELETE` 用来删除表里的行。它删除的是数据，不是表结构。

## 你学完能干什么

- 能理解 `DELETE` 和 `DROP` 的区别
- 知道删除前要先确认范围
- 能用事务保护删除动作
- 能避免漏写 `WHERE`

## 最小写法

```sql
DELETE FROM demo_tags
WHERE name = 'old-tag'
RETURNING id, name;
```

这条 SQL 会删除 `name = 'old-tag'` 的行，并返回被删除的数据。

## 删除前先查

```sql
SELECT id, name
FROM demo_tags
WHERE name = 'old-tag';
```

删除前先查，确认这些行确实应该被删。

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| `DELETE` | 删除表里的行 |
| `DROP TABLE` | 删除整张表结构 |
| `WHERE` | 指定要删除哪些行 |
| `RETURNING` | 返回被删除的行 |

## 练习题

1. `DELETE` 删除数据行还是删除表结构？
2. `DELETE FROM demo_tags` 不写 `WHERE` 有什么风险？
3. 删除前为什么要先用同条件查询？
4. `DROP TABLE` 和 `DELETE` 是一回事吗？

::: tip 提示
删除前把 `DELETE` 先改写成 `SELECT`，确认结果后再执行。
:::

::: details 答案
1. 删除数据行。
2. 可能删除整张表的数据。
3. 确认命中范围，避免误删。
4. 不是。`DROP TABLE` 删除表结构，`DELETE` 删除行。
:::

## 常见坑

- 把 `DELETE` 当成可以随便撤销的操作
- 漏写 `WHERE`
- 条件写错导致误删
- 忘记外键关系会影响删除结果

## 先记住这三句

- `DELETE` 删行，`DROP` 删对象。
- 删除前先查范围。
- 重要删除要放进事务里。
