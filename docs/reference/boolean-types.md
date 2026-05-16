# 布尔类型速查

布尔类型用来保存 true、false，以及可能的 `NULL`。它适合表达“是否启用”“是否删除”这类二值状态。

## 你学完能干什么

- 能用 `boolean` 表达真假
- 知道布尔字段可能为 `NULL`
- 能避免把真假存成字符串
- 能理解 `NULL` 不等于 `false`

## 一个例子

```sql
CREATE TABLE feature_flags (
  id bigserial PRIMARY KEY,
  name text NOT NULL,
  enabled boolean NOT NULL DEFAULT false
);
```

`enabled` 明确表示是否启用，默认是 `false`。

查询启用项：

```sql
SELECT name
FROM feature_flags
WHERE enabled = true;
```

也可以简写成：

```sql
SELECT name
FROM feature_flags
WHERE enabled;
```

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| `true` | 真 |
| `false` | 假 |
| `NULL` | 未知或缺失 |
| 默认值 | 没传时数据库自动填入的值 |

## 练习题

1. 是否启用适合用什么类型？
2. `NULL` 和 `false` 是一回事吗？
3. `boolean NOT NULL DEFAULT false` 能避免空值吗？
4. 真假状态适合保存成 `'yes'`、`'no'` 字符串吗？

::: tip 提示
真假就用布尔类型，别用字符串绕一圈。
:::

::: details 答案
1. `boolean`。
2. 不是。
3. 能。
4. 不适合。
:::

## 常见坑

- 把布尔值存成字符串
- 忘记 `NULL` 会带来第三种状态
- 条件里没考虑空值
- 字段名没有表达清楚真假含义

## 先记住这三句

- 布尔类型表达真假。
- `NULL` 不是 `false`。
- 真假字段名要清楚。
