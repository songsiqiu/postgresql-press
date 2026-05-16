# 信息模式速查

信息模式是一组标准视图，用来查看数据库里有哪些表、列、约束等对象。它适合做跨数据库相对通用的结构查询。

## 你学完能干什么

- 知道 `information_schema` 是什么
- 能查询当前库里的表和列
- 能区分信息模式和 PostgreSQL 系统目录
- 能避免把结构查询写死在应用逻辑里

## 查表和列

```sql
SELECT table_schema, table_name
FROM information_schema.tables
WHERE table_schema = 'public';
```

```sql
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_schema = 'public'
  AND table_name = 'notes'
ORDER BY ordinal_position;
```

## 适合什么时候用

- 想列出某个模式下有哪些表
- 想查看某张表有哪些列
- 想做相对标准的元数据查询
- 工具需要读取数据库结构

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| 信息模式 | 标准化的结构信息视图 |
| 系统目录 | PostgreSQL 自己的内部元数据表 |
| 元数据 | 描述数据结构的数据 |
| `public` | 默认常见模式名 |

## 练习题

1. `information_schema.columns` 常用来查什么？
2. 信息模式保存业务数据，还是描述表结构？
3. `table_schema` 表示数据库名还是模式名？
4. 信息模式和系统目录是完全一样的吗？

::: tip 提示
要查“表里有哪些列”，先想到 `information_schema.columns`。
:::

::: details 答案
1. 查询列名、类型、是否允许为空等结构信息。
2. 描述表结构。
3. 模式名。
4. 不完全一样，信息模式更标准，系统目录更 PostgreSQL 专有。
:::

## 常见坑

- 把信息模式当成业务数据表
- 忘记用 `table_schema` 限定范围
- 需要 PostgreSQL 专有信息时仍只查信息模式
- 在高频业务请求里反复查元数据

## 先记住这三句

- 信息模式用来查结构。
- `columns` 看列，`tables` 看表。
- 标准信息查信息模式，专有细节看系统目录。
