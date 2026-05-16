# 条件函数速查

条件函数用于处理空值、默认值和条件选择。最常见的是 `coalesce`、`nullif` 和 `greatest`、`least`。

## 你学完能干什么

- 能用 `coalesce` 处理空值
- 能理解 `nullif` 的作用
- 知道 `greatest` 和 `least` 选最大最小值
- 能避免把空值当成空字符串

## 常见函数

```sql
SELECT coalesce(NULL, 'untitled');
```

结果是 `untitled`。

```sql
SELECT nullif('same', 'same');
```

结果是 `NULL`。

```sql
SELECT greatest(10, 20, 5);
```

结果是 `20`。

## 常见用途

| 函数 | 新手解释 |
| --- | --- |
| `coalesce(a, b)` | `a` 为空时用 `b` |
| `nullif(a, b)` | `a` 和 `b` 相等时返回 `NULL` |
| `greatest(...)` | 取最大值 |
| `least(...)` | 取最小值 |

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| `NULL` | 未知或缺失 |
| 默认显示值 | 空值时临时展示的替代值 |
| 条件函数 | 根据输入情况返回不同值 |
| 空字符串 | 长度为 0 的字符串，不等于 `NULL` |

## 练习题

1. `coalesce(NULL, 'x')` 的结果是什么？
2. `nullif('a', 'a')` 的结果是什么？
3. `greatest(1, 9, 3)` 的结果是什么？
4. `NULL` 和空字符串是一回事吗？

::: tip 提示
空值处理要明确：是数据真的缺失，还是只是展示时给默认值。
:::

::: details 答案
1. `x`。
2. `NULL`。
3. `9`。
4. 不是。
:::

## 常见坑

- 用 `coalesce` 掩盖数据质量问题
- 把 `NULL` 当成空字符串
- 在过滤条件里处理空值时没考虑索引
- 不区分存储值和展示值

## 先记住这三句

- `coalesce` 找第一个非空值。
- `nullif` 相等时返回空值。
- 空值不是空字符串。
