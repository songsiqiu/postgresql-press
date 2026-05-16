# 函数与触发器

函数和触发器能把一部分逻辑放进数据库里执行。它们很有用，但也要谨慎使用。

## 你学完能干什么

- 知道函数和触发器分别适合做什么
- 能看懂一个简单的触发器流程
- 知道哪些逻辑不应该随便塞进数据库

## 函数是什么

函数是一段可以在数据库里调用的逻辑。它可以接收参数，返回结果。

```sql
CREATE FUNCTION add_one(n integer)
RETURNS integer
LANGUAGE sql
AS $$
  SELECT n + 1;
$$;
```

调用：

```sql
SELECT add_one(5);
```

结果：

| add_one |
| --- |
| 6 |

## 触发器是什么

触发器是在插入、更新、删除时自动执行的逻辑。比如写入数据时自动维护更新时间。

## 可照着跑：自动维护更新时间

```sql
CREATE TABLE demo_notes (
  id bigserial PRIMARY KEY,
  body text NOT NULL,
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER demo_notes_set_updated_at
BEFORE UPDATE ON demo_notes
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

INSERT INTO demo_notes (body) VALUES ('first');
UPDATE demo_notes SET body = 'changed' WHERE id = 1;
SELECT id, body, updated_at FROM demo_notes;
```

这个例子适合触发器，因为它是明确、局部、靠近数据的自动维护逻辑。

## 练习题

1. 函数和普通 SQL 查询最大的区别是什么？
2. 触发器一般在什么时候执行？
3. 为什么不建议把所有业务逻辑都写进触发器？

::: tip 提示
函数适合复用明确的数据库逻辑，触发器适合自动维护和保护数据一致性。
:::

::: details 答案
1. 函数可以被命名和复用，还可以接收参数。
2. 常见是在插入、更新、删除前后自动执行。
3. 逻辑太隐蔽，应用侧不容易看见，排查问题会变难。
:::

## 常见坑

- 触发器里藏了太多业务逻辑
- 函数权限没有想清楚
- 递归触发或重复更新导致难排查
- 触发器改了数据，应用日志里却看不出是谁改的

## 先记住这三句

- 函数是可复用的数据库逻辑。
- 触发器是自动执行的数据库逻辑。
- 能放应用层的复杂业务，不要随便藏进触发器。
