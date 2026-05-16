# 安全定义者函数

安全定义者函数可以让函数按创建者的权限执行。它很有用，也很危险，新手要先知道它为什么不能随便用。

## 你学完能干什么

- 能理解 `SECURITY DEFINER` 和普通函数的区别
- 知道它适合封装少量受控操作
- 能意识到搜索路径和权限边界的风险
- 知道不要用它绕过正常授权设计

## 最小例子

```sql
CREATE FUNCTION app.create_note(note_title text)
RETURNS bigint
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  new_id bigint;
BEGIN
  INSERT INTO app.notes (title)
  VALUES (note_title)
  RETURNING id INTO new_id;

  RETURN new_id;
END;
$$;
```

调用者执行这个函数时，函数内部操作会按函数拥有者的权限执行。

## 可照着跑：固定搜索路径

安全定义者函数要尽量写清楚对象所在模式，并固定搜索路径：

```sql
CREATE OR REPLACE FUNCTION app.create_note(note_title text)
RETURNS bigint
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = app, pg_temp
AS $$
DECLARE
  new_id bigint;
BEGIN
  INSERT INTO app.notes (title)
  VALUES (note_title)
  RETURNING id INTO new_id;

  RETURN new_id;
END;
$$;
```

`SET search_path = app, pg_temp` 是为了减少对象名被解析到非预期位置的风险。敏感函数里不要依赖模糊的默认搜索路径。

## 什么时候适合

- 只开放一个非常明确的动作
- 不想把底层表权限直接给应用角色
- 函数内部会严格校验输入
- 函数拥有者和执行者权限边界清楚

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| `SECURITY INVOKER` | 默认方式，按调用者权限执行 |
| `SECURITY DEFINER` | 按函数拥有者权限执行 |
| 搜索路径 | PostgreSQL 查找对象名的路径 |
| 函数拥有者 | 创建或拥有函数的角色 |

## 练习题

1. 普通函数默认按调用者权限还是拥有者权限执行？
2. `SECURITY DEFINER` 函数按谁的权限执行？
3. 它适合封装大段复杂业务吗？
4. 为什么要小心搜索路径？

::: tip 提示
只要函数能“替别人做有权限的事”，就要把它当成安全边界来设计。
:::

::: details 答案
1. 调用者权限。
2. 函数拥有者权限。
3. 不适合，越复杂越难审计和排查。
4. 对象名解析不清楚时，可能调用到非预期对象。
:::

## 常见坑

- 用安全定义者函数绕过正常权限设计
- 函数里没有严格校验输入
- 搜索路径不明确，留下安全风险
- 函数拥有者权限过大
- 函数里使用未限定模式的对象名

## 先记住这三句

- `SECURITY DEFINER` 是权限边界，不是偷懒工具。
- 函数越敏感，逻辑越要小。
- 搜索路径和函数拥有者要认真检查。
