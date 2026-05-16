# 保存点

保存点让一个事务内部可以局部回退。它适合处理“整体事务还要继续，但某一步可以撤回”的场景。

## 你学完能干什么

- 能理解保存点和事务提交的区别
- 能写出 `SAVEPOINT` 和 `ROLLBACK TO SAVEPOINT`
- 知道保存点只在当前事务里有效
- 能避免把保存点当成真正提交

## 最小例子

```sql
BEGIN;

UPDATE accounts
SET balance = balance - 100
WHERE id = 1;

SAVEPOINT after_debit;

UPDATE accounts
SET balance = balance + 100
WHERE id = 999;

ROLLBACK TO SAVEPOINT after_debit;

COMMIT;
```

这里第二条更新如果发现目标账户不对，可以回到保存点，但事务本身还可以继续。

## 命令速记

| 命令 | 用途 |
| --- | --- |
| `SAVEPOINT name` | 创建保存点 |
| `ROLLBACK TO SAVEPOINT name` | 回到保存点 |
| `RELEASE SAVEPOINT name` | 释放保存点 |
| `COMMIT` | 提交整个事务 |

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| 保存点 | 事务里的局部回退位置 |
| 回滚到保存点 | 撤回保存点之后的操作 |
| 释放保存点 | 不再需要这个回退位置 |
| 提交 | 让整个事务最终生效 |

## 练习题

1. 保存点是在事务内还是事务外使用？
2. `ROLLBACK TO SAVEPOINT` 会结束整个事务吗？
3. `COMMIT` 提交的是保存点还是整个事务？
4. 保存点适合完全替代事务吗？

::: tip 提示
保存点是事务里的“局部撤回”，不是最终保存。
:::

::: details 答案
1. 事务内。
2. 不会。
3. 整个事务。
4. 不适合。
:::

## 常见坑

- 把保存点当成一次真正提交
- 事务外使用保存点
- 保存点太多，让流程难读
- 异常后忘记事务仍需要最终提交或回滚

## 先记住这三句

- 保存点只在事务里有效。
- 保存点能局部回退。
- 最终生效仍靠 `COMMIT`。
