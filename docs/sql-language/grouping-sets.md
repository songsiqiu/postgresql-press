# 分组统计扩展

分组统计扩展能在一条 SQL 里同时得到多种分组结果。常见写法包括 `GROUPING SETS`、`ROLLUP` 和 `CUBE`。

## 你学完能干什么

- 知道为什么普通 `GROUP BY` 有时不够
- 能理解小计、合计和多维统计
- 能看懂 `ROLLUP` 的层级汇总
- 能避免把报表 SQL 写成很多重复查询

## ROLLUP

```sql
SELECT region, product, sum(amount) AS total
FROM sales
GROUP BY ROLLUP (region, product);
```

这会得到：

- 每个地区、每个产品的销售额
- 每个地区的合计
- 全部合计

## GROUPING SETS

```sql
SELECT region, product, sum(amount) AS total
FROM sales
GROUP BY GROUPING SETS (
  (region, product),
  (region),
  ()
);
```

这比写多条查询再 `UNION` 更集中。

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| 小计 | 某个层级的局部汇总 |
| 合计 | 全部数据的汇总 |
| `ROLLUP` | 按层级逐级汇总 |
| `CUBE` | 多个维度的组合汇总 |

## 练习题

1. `ROLLUP (region, product)` 会不会产生地区小计？
2. 空分组 `()` 通常表示什么？
3. 分组统计扩展适合报表场景吗？
4. `GROUPING SETS` 能减少重复查询吗？

::: tip 提示
看到“明细、小计、总计都要”，就可以想到分组统计扩展。
:::

::: details 答案
1. 会。
2. 全部合计。
3. 适合。
4. 能。
:::

## 常见坑

- 不理解合计行里维度字段可能是 `NULL`
- 把复杂报表拆成大量重复查询
- 没给汇总行做清楚展示标识
- 在数据量很大时不评估报表成本

## 先记住这三句

- 分组统计扩展服务报表汇总。
- `ROLLUP` 适合层级小计。
- 合计行要在展示时标清楚。
