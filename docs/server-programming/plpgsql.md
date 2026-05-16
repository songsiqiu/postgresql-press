# PL/pgSQL 基础

PL/pgSQL 是 PostgreSQL 常用的过程语言。它让你在数据库里写带条件判断、变量和流程控制的函数。

## 你学完能干什么

- 知道 PL/pgSQL 和普通 SQL 函数的区别
- 能看懂一个最小 PL/pgSQL 函数
- 知道哪些逻辑适合放进去，哪些不适合

## 一个最小函数

```sql
CREATE FUNCTION price_with_tax(price numeric)
RETURNS numeric
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN price * 1.13;
END;
$$;
```

调用：

```sql
SELECT price_with_tax(100);
```

结果：

| price_with_tax |
| --- |
| 113.00 |

## 可照着跑：检查余额是否足够

```sql
CREATE TABLE demo_accounts (
  id bigint PRIMARY KEY,
  balance numeric NOT NULL CHECK (balance >= 0)
);

INSERT INTO demo_accounts (id, balance)
VALUES (1, 200.00)
ON CONFLICT (id) DO UPDATE
SET balance = EXCLUDED.balance;

CREATE OR REPLACE FUNCTION can_debit(account_id bigint, debit_amount numeric)
RETURNS boolean
LANGUAGE plpgsql
AS $$
DECLARE
  current_balance numeric;
BEGIN
  SELECT balance
  INTO current_balance
  FROM demo_accounts
  WHERE id = account_id;

  IF current_balance IS NULL THEN
    RETURN false;
  END IF;

  RETURN current_balance >= debit_amount;
END;
$$;

SELECT can_debit(1, 150.00);
```

预期结果是 `true`。这个例子展示了变量、查询结果写入变量、条件判断和返回值。

## 什么时候考虑 PL/pgSQL

- 逻辑必须靠近数据执行
- 多条 SQL 需要封装成一个数据库函数
- 需要条件判断或异常处理
- 需要被多个数据库调用点复用

## 不适合什么

- 大量业务流程编排
- 调用外部接口
- 复杂用户交互
- 应用层更容易测试和维护的逻辑

## 练习题

1. PL/pgSQL 比普通 SQL 函数多了哪些表达能力？
2. `RETURN` 在函数里做什么？
3. 为什么不建议把复杂业务流程都写进 PL/pgSQL？
4. 哪些逻辑适合靠近数据执行？

::: tip 提示
PL/pgSQL 是数据库里的过程语言，不是应用后端的替代品。
:::

::: details 答案
1. 变量、条件判断、流程控制、异常处理等。
2. 返回函数结果。
3. 测试、调试和维护成本会更高，也容易让业务逻辑分散。
4. 与数据强相关、需要复用、适合在数据库内完成的逻辑。
:::

## 常见坑

- 把应用层业务全塞进数据库函数
- 函数里做过多隐藏修改
- 没想清楚函数权限和调用身份
- 函数里查不到数据时，没有明确处理 `NULL`

## 先记住这三句

- PL/pgSQL 适合靠近数据的流程逻辑。
- 函数越复杂，越要重视测试和权限。
- 不要把数据库函数当成后端应用替代品。
