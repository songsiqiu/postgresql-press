# 事务命令速查

事务命令用来控制一组 SQL 是一起生效，还是整体撤回。新手先掌握 `BEGIN`、`COMMIT`、`ROLLBACK`。

## 你学完能干什么

- 能查到常见事务命令的作用
- 能区分提交和回滚
- 知道保存点适合局部撤回
- 能避免事务开了不结束

## 常用命令

| 命令 | 用途 |
| --- | --- |
| `BEGIN` | 开启事务 |
| `COMMIT` | 提交事务，让修改生效 |
| `ROLLBACK` | 回滚事务，撤回未提交修改 |
| `SAVEPOINT name` | 创建保存点 |
| `ROLLBACK TO SAVEPOINT name` | 回到某个保存点 |
| `RELEASE SAVEPOINT name` | 释放保存点 |

## 常见例子

```sql
BEGIN;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

COMMIT;
```

如果中间发现问题：

```sql
ROLLBACK;
```

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| 提交 | 确认修改生效 |
| 回滚 | 放弃未提交修改 |
| 保存点 | 事务中的局部回退位置 |
| 长事务 | 长时间不提交也不回滚的事务 |

## 练习题

1. 开启事务用哪个命令？
2. 确认修改生效用哪个命令？
3. 撤回未提交修改用哪个命令？
4. 事务中想局部回退，可以先创建什么？

::: tip 提示
事务命令可以先记成：开始、确认、撤回、局部撤回。
:::

::: details 答案
1. `BEGIN`。
2. `COMMIT`。
3. `ROLLBACK`。
4. 保存点，`SAVEPOINT`。
:::

## 常见坑

- `BEGIN` 后忘记 `COMMIT` 或 `ROLLBACK`
- 把保存点当成真正提交
- 在事务里等待用户操作
- 事务失败后继续执行后续业务逻辑

## 先记住这三句

- 事务开始后一定要结束。
- `COMMIT` 生效，`ROLLBACK` 撤回。
- 保存点只是在事务内部局部回退。
