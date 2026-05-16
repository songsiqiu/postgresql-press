# 批处理与分页

应用访问 PostgreSQL 时，批处理和分页会直接影响性能和用户体验。新手要先学会避免“一次查太多”和“一条条慢慢写”。

## 你学完能干什么

- 能判断什么时候需要批量写入
- 知道分页不只是加 `LIMIT`
- 能理解大偏移分页为什么会越来越慢
- 能区分面向页面展示和面向后台任务的读取方式

## 批量写入

少量数据可以多条 `INSERT`，但大量导入通常要考虑批处理或 `COPY`。

```sql
INSERT INTO tags (name)
VALUES
  ('postgresql'),
  ('sql'),
  ('index');
```

一次提交一批，比每条数据单独开事务更稳。

## 普通分页

```sql
SELECT id, title
FROM notes
ORDER BY id DESC
LIMIT 20 OFFSET 40;
```

`OFFSET` 很直观，适合页数不深的列表。页数很深时，数据库仍然要跳过前面的很多行，成本会变高。

## 游标式分页

```sql
SELECT id, title
FROM notes
WHERE id < 1200
ORDER BY id DESC
LIMIT 20;
```

这种写法适合“加载更多”。它用上一页最后一条的 `id` 继续往后查，通常比很大的 `OFFSET` 更稳定。

## 应用里怎么写

第一页：

```js
const result = await db.query(
  'SELECT id, title FROM notes ORDER BY id DESC LIMIT $1',
  [20]
)
```

下一页：

```js
const result = await db.query(
  'SELECT id, title FROM notes WHERE id < $1 ORDER BY id DESC LIMIT $2',
  [lastSeenId, 20]
)
```

这里的 `lastSeenId` 来自上一页最后一条记录。接口返回时可以把它作为下一页游标交给前端。

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| 批处理 | 一次处理一批数据 |
| `LIMIT` | 限制返回数量 |
| `OFFSET` | 跳过前面多少行 |
| 游标式分页 | 用上一页边界继续查询 |
| `COPY` | PostgreSQL 常用的批量导入导出命令 |

## 练习题

1. `LIMIT 20 OFFSET 40` 表示跳过多少行？
2. 页数很深时，`OFFSET` 为什么可能变慢？
3. “加载更多”更适合普通页码分页还是游标式分页？
4. 大批量导入 CSV 时应该重点了解哪个命令？

::: tip 提示
列表页先确定排序字段，再决定用页码分页还是游标式分页。
:::

::: details 答案
1. 跳过 40 行。
2. 数据库仍然要处理并跳过前面的很多行。
3. 游标式分页。
4. `COPY`。
:::

## 常见坑

- 没有稳定排序就分页，导致翻页重复或漏数据
- 深分页仍然一直使用很大的 `OFFSET`
- 每条数据单独提交，批量导入很慢
- 后台任务一次性读完整张大表
- 游标字段不唯一或排序不稳定，导致翻页漏数据

## 先记住这三句

- 分页必须有稳定排序。
- 深分页要警惕大 `OFFSET`。
- 大批量导入优先了解 `COPY`。
