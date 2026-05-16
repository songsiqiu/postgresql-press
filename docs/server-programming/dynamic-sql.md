# 动态 SQL

动态 SQL 是在函数运行时拼出要执行的 SQL。它适合处理对象名或条件不固定的少量场景，但也容易带来安全和维护风险。

## 你学完能干什么

- 知道什么时候会用到动态 SQL
- 能看懂 `EXECUTE` 的基本用法
- 知道值参数和对象名要分开处理
- 能避免把用户输入直接拼进 SQL

## 最小例子

```sql
CREATE FUNCTION app.count_rows(table_name text)
RETURNS bigint
LANGUAGE plpgsql
AS $$
DECLARE
  result bigint;
BEGIN
  EXECUTE format('SELECT count(*) FROM %I', table_name)
  INTO result;

  RETURN result;
END;
$$;
```

这里 `%I` 用来安全处理标识符，比如表名。

## 值参数用 USING

```sql
EXECUTE 'SELECT count(*) FROM app.notes WHERE user_id = $1'
INTO result
USING target_user_id;
```

值不要直接拼进字符串里，优先用 `USING` 传入。

## 可照着跑：统计指定模式里的表

```sql
CREATE SCHEMA IF NOT EXISTS app;

CREATE TABLE IF NOT EXISTS app.notes (
  id bigserial PRIMARY KEY,
  user_id bigint NOT NULL,
  body text NOT NULL
);

INSERT INTO app.notes (user_id, body)
VALUES (1, 'hello')
ON CONFLICT DO NOTHING;

CREATE OR REPLACE FUNCTION app.count_table_rows(schema_name text, table_name text)
RETURNS bigint
LANGUAGE plpgsql
AS $$
DECLARE
  result bigint;
BEGIN
  EXECUTE format('SELECT count(*) FROM %I.%I', schema_name, table_name)
  INTO result;

  RETURN result;
END;
$$;

SELECT app.count_table_rows('app', 'notes');
```

这里的模式名和表名都用 `%I` 处理。它们是对象名，不是普通条件值。

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| 动态 SQL | 运行时生成并执行的 SQL |
| `EXECUTE` | PL/pgSQL 中执行动态 SQL 的语句 |
| 标识符 | 表名、列名这类对象名 |
| 值参数 | 查询条件里的普通值 |

## 练习题

1. 动态 SQL 是编写时固定，还是运行时生成？
2. 表名这类对象名更适合用 `%I` 还是直接拼接？
3. 条件值更适合用 `USING` 还是字符串拼接？
4. 用户输入能不能直接拼进 SQL？

::: tip 提示
对象名和值参数要分开处理，这是动态 SQL 的第一条安全线。
:::

::: details 答案
1. 运行时生成。
2. `%I`。
3. `USING`。
4. 不能。
:::

## 常见坑

- 把用户输入直接拼进 SQL
- 对象名和值参数混用同一种处理方式
- 动态 SQL 写得太复杂，难以排查
- 能用普通 SQL 解决时也强行动态化

## 先记住这三句

- 动态 SQL 要少用、慎用。
- 对象名和值参数不是一回事。
- 用户输入不能直接拼接。
