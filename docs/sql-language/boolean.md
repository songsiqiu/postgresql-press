# 布尔类型

布尔类型用来表达真和假。它看起来简单，但在 SQL 里还要和 `NULL` 一起理解。

## 你学完能干什么

- 能使用 `boolean` 保存真假状态
- 知道 `true`、`false` 和 `NULL` 不是一回事
- 能写出清楚的布尔条件
- 能避免把真假值保存成字符串

## 最小例子

```sql
CREATE TABLE tasks (
  id bigserial PRIMARY KEY,
  title text NOT NULL,
  done boolean NOT NULL DEFAULT false
);
```

查询未完成任务：

```sql
SELECT id, title
FROM tasks
WHERE done = false;
```

也可以写成：

```sql
SELECT id, title
FROM tasks
WHERE NOT done;
```

## 和 NULL 的关系

如果布尔列允许 `NULL`，就会出现三种状态：

| 值 | 含义 |
| --- | --- |
| `true` | 是 |
| `false` | 否 |
| `NULL` | 未知或未填写 |

如果业务只有“是/否”，建议用 `NOT NULL DEFAULT false`。

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| `true` | 真 |
| `false` | 假 |
| `NULL` | 未知或缺失 |
| 默认值 | 插入时不填就使用的值 |

## 练习题

1. 保存是否完成，适合用哪个类型？
2. `NULL` 等于 `false` 吗？
3. 只有是/否两种状态时，为什么常加 `NOT NULL`？
4. `DEFAULT false` 解决什么问题？

::: tip 提示
先问业务到底是两种状态，还是允许“未知”。
:::

::: details 答案
1. `boolean`。
2. 不等于。
3. 避免出现第三种未知状态。
4. 插入时不填也能得到明确的默认假值。
:::

## 常见坑

- 把布尔值保存成 `'Y'`、`'N'` 字符串
- 没想清楚是否允许 `NULL`
- 把 `NULL` 当成 `false`
- 条件写得过于绕，别人读不懂

## 先记住这三句

- 布尔值表达真和假。
- `NULL` 不是 `false`。
- 两态字段常用 `NOT NULL DEFAULT false`。
