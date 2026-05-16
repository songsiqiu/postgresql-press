# 日期时间类型速查

日期时间类型用来保存日期、时间点和持续时间。新手最容易混淆的是 `timestamp` 和 `timestamptz`。

## 你学完能干什么

- 能区分日期和时间点
- 知道创建时间常用 `timestamptz`
- 能理解 `interval` 表示持续时间
- 能避免把时间保存成字符串

## 常见类型

| 类型 | 适合场景 |
| --- | --- |
| `date` | 只有日期，没有具体时刻 |
| `time` | 一天中的时间 |
| `timestamp` | 不带时区解释的时间戳 |
| `timestamptz` | 表示具体时间点，按时区显示 |
| `interval` | 一段持续时间 |

## 一个例子

```sql
CREATE TABLE events (
  id bigserial PRIMARY KEY,
  starts_at timestamptz NOT NULL,
  duration interval NOT NULL
);
```

`starts_at` 是具体时间点，`duration` 是持续多久。

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| 日期 | 年月日 |
| 时间点 | 现实中的一个具体时刻 |
| 时区 | 时间点显示成本地时间的规则 |
| 持续时间 | 一段长度，例如 2 小时 |

## 练习题

1. 只保存生日日期适合 `date` 还是 `timestamptz`？
2. 创建时间通常优先考虑哪种类型？
3. `interval` 表示时间点还是持续时间？
4. 时间适合保存成普通字符串吗？

::: tip 提示
问自己：这是一个日期、一个时间点，还是一段持续时间。
:::

::: details 答案
1. `date`。
2. `timestamptz`。
3. 持续时间。
4. 不适合。
:::

## 常见坑

- 把时间存成字符串
- 不区分日期和时间点
- 误以为 `timestamptz` 会保存时区名字
- 跨时区业务没有统一时间口径

## 先记住这三句

- 日期不是时间点。
- 创建时间常用 `timestamptz`。
- 持续时间用 `interval`。
