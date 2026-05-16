# 数据修改

数据修改主要是插入、更新和删除。和查询不同，这类语句会改变表里的数据。

## 你学完能干什么

- 插入一行或多行数据
- 按条件更新数据
- 按条件删除数据
- 避免误改整张表

```sql
INSERT INTO demo_tags (name) VALUES ('database');
UPDATE demo_tags SET name = 'postgresql' WHERE id = 1;
DELETE FROM demo_tags WHERE id = 1;
```

学习时先看清条件，再执行修改或删除。

## 插入数据

```sql
INSERT INTO demo_tags (name)
VALUES ('sql'), ('index'), ('transaction');
```

## 更新数据

```sql
UPDATE demo_tags
SET name = 'postgresql'
WHERE name = 'sql';
```

更新前建议先查：

```sql
SELECT *
FROM demo_tags
WHERE name = 'sql';
```

## 删除数据

```sql
DELETE FROM demo_tags
WHERE name = 'index';
```

删除前也建议先查。尤其是生产数据，不要凭感觉写条件。

## 练习题

1. 插入三条标签数据。
2. 把其中一条的名称改掉。
3. 删除一条数据前，先用同样条件查一遍。
4. 写一条只更新 `name = 'sql'` 的数据修改语句。
5. 说出 `UPDATE` 不写 `WHERE` 的风险。

::: tip 提示
修改和删除都先写 `SELECT` 验证条件，确认命中范围后再换成 `UPDATE` 或 `DELETE`。
:::

::: details 答案
1. `INSERT INTO demo_tags (name) VALUES ('sql'), ('index'), ('transaction');`
2. `UPDATE demo_tags SET name = 'postgresql' WHERE name = 'sql';`
3. `SELECT * FROM demo_tags WHERE name = 'index';`
4. `UPDATE demo_tags SET name = 'postgresql' WHERE name = 'sql';`
5. 会更新整张表，可能造成严重数据事故。
:::

## 常见坑

- 执行修改前没有先查命中范围
- 条件写得太宽，影响了不该影响的数据
- 把多步修改拆开执行，中间失败后数据不一致

## 先记住这三句

- `UPDATE` 和 `DELETE` 没有 `WHERE` 时会影响整张表。
- 修改数据前，先查一遍命中范围。
- 多步修改最好放进事务里。
