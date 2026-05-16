# 日期时间函数速查

这一页不是完整函数手册，而是给新手先整理最常用、最容易查错的日期时间入口。

## 你学完能干什么

- 能知道常见时间函数大概做什么
- 能区分当前日期、当前时间和时间间隔
- 能快速找到适合列表筛选和报表统计的函数

## 常用入口

| 写法 | 用途 |
| --- | --- |
| `CURRENT_DATE` | 当前日期 |
| `CURRENT_TIMESTAMP` | 当前时间戳 |
| `now()` | 当前事务时间 |
| `date_trunc('day', ts)` | 截断到某个时间粒度 |
| `extract(year from ts)` | 取出年份等部分 |
| `ts + interval '7 days'` | 时间加一段间隔 |

## 常见例子

```sql
SELECT date_trunc('day', created_at) AS day, count(*) AS total
FROM notes
GROUP BY day
ORDER BY day DESC;
```

这类写法常用于按天统计。

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| `date_trunc` | 把时间截到天、月、小时等粒度 |
| `extract` | 从时间里取出某个部分 |
| `interval` | 一段时间 |
| 当前事务时间 | 同一事务里通常保持一致的当前时间 |

## 练习题

1. 当前日期可以用哪个常量？
2. 按天统计时，可以用哪个函数把时间截到天？
3. `interval '7 days'` 是时间点还是时间段？
4. 想从时间里取出年份，可以用哪个函数？

::: tip 提示
报表统计常见组合是 `date_trunc` 加 `GROUP BY`。
:::

::: details 答案
1. `CURRENT_DATE`。
2. `date_trunc('day', created_at)`。
3. 时间段。
4. `extract(year from ts)`。
:::

## 常见坑

- 用字符串函数处理时间
- 没考虑时区就做跨地区统计
- 把 `interval` 当成具体日期
- 按天统计时忘记统一时间粒度

## 先记住这三句

- 时间函数要配合正确的时间类型。
- 报表统计先统一粒度。
- `interval` 表示一段时间。
