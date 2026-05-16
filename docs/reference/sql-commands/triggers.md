# CREATE TRIGGER 与 DROP TRIGGER 速查

`CREATE TRIGGER` 用来创建触发器，`DROP TRIGGER` 用来删除触发器。触发器会在表发生插入、更新或删除时自动执行。

## 你学完能干什么

- 知道触发器什么时候会执行
- 能看懂触发器依赖触发器函数
- 能理解自动执行带来的排查成本
- 能避免把业务流程藏进触发器

## 创建触发器

```sql
CREATE TRIGGER notes_updated_at
BEFORE UPDATE ON notes
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();
```

这表示更新 `notes` 表每一行之前，执行 `set_updated_at()`。

删除触发器：

```sql
DROP TRIGGER notes_updated_at ON notes;
```

## 适合场景

- 自动维护更新时间
- 记录少量审计信息
- 保持数据库内部派生字段一致
- 不适合承载很长的业务流程

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| 触发器 | 表变化时自动执行的规则 |
| 触发器函数 | 触发器实际调用的函数 |
| `BEFORE` | 操作发生前执行 |
| `FOR EACH ROW` | 每一行变化都执行一次 |

## 练习题

1. 触发器是手动调用还是自动执行？
2. `DROP TRIGGER` 需要指定在哪张表上吗？
3. 触发器适合隐藏复杂业务流程吗？
4. `BEFORE UPDATE` 表示什么时候执行？

::: tip 提示
触发器越自动，越要保持简单，方便排查。
:::

::: details 答案
1. 自动执行。
2. 需要。
3. 不适合。
4. 更新发生前。
:::

## 常见坑

- 应用层看不到触发器逻辑，排查困难
- 一个表挂太多触发器
- 触发器函数里做慢操作
- 删除触发器前不确认依赖行为

## 先记住这三句

- 触发器会自动执行。
- 触发器依赖触发器函数。
- 触发器逻辑要短、清楚、可查。
