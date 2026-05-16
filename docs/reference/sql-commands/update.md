# UPDATE 速查

`UPDATE` 用来修改已有数据。它很常用，也很容易因为条件写错造成大范围误改。

## 你学完能干什么

- 能看懂 `UPDATE` 的基本结构
- 知道修改前要先确认命中范围
- 能用 `RETURNING` 查看修改结果
- 能避免漏写 `WHERE`

## 最小写法

```sql
UPDATE demo_tags
SET name = 'postgresql'
WHERE name = 'sql'
RETURNING id, name;
```

这条 SQL 会把 `name = 'sql'` 的行改成 `postgresql`，并返回修改后的结果。

## 修改前先查

```sql
SELECT id, name
FROM demo_tags
WHERE name = 'sql';
```

先用同样条件查询，确认会影响哪些行，再执行 `UPDATE`。

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| `SET` | 指定要改哪些列 |
| `WHERE` | 指定改哪些行 |
| `RETURNING` | 返回修改后的行 |
| 命中范围 | 这次会被影响的数据行 |

## 练习题

1. `SET` 决定改哪些列，还是改哪些行？
2. `WHERE` 漏写会有什么风险？
3. 修改前为什么建议先写同条件 `SELECT`？
4. `RETURNING` 能不能查看修改后的结果？

::: tip 提示
把 `UPDATE` 看成“先圈定行，再修改列”。
:::

::: details 答案
1. 改哪些列。
2. 可能修改整张表。
3. 确认命中范围，避免误改。
4. 能。
:::

## 常见坑

- 漏写 `WHERE`
- 条件写得太宽，改了不该改的数据
- 多步更新没有放进事务
- 修改后不检查影响行数或返回结果

## 先记住这三句

- `UPDATE` 会改变已有数据。
- 修改前先查命中范围。
- 没有 `WHERE` 可能影响整张表。
