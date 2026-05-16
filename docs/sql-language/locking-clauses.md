# 行锁子句

行锁子句让查询在读取行的同时锁住这些行，常用于“先查出来，再安全修改”的并发场景。

## 你学完能干什么

- 能理解 `FOR UPDATE` 的基本作用
- 知道行锁用于保护即将修改的数据
- 能看懂 `SKIP LOCKED` 的常见队列用法
- 能避免把锁开得太久

## FOR UPDATE

```sql
BEGIN;

SELECT id, status
FROM jobs
WHERE id = 10
FOR UPDATE;

UPDATE jobs
SET status = 'running'
WHERE id = 10;

COMMIT;
```

`FOR UPDATE` 会锁住查询到的行，避免其他事务同时修改这行。

## SKIP LOCKED

```sql
SELECT id
FROM jobs
WHERE status = 'ready'
ORDER BY id
FOR UPDATE SKIP LOCKED
LIMIT 10;
```

这类写法常用于多个 worker 抢任务：已经被别人锁住的行会被跳过。

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| 行锁 | 锁住具体数据行 |
| `FOR UPDATE` | 查询时为后续更新锁住行 |
| `SKIP LOCKED` | 跳过已经被锁的行 |
| 长事务 | 长时间不提交导致锁长期不释放 |

## 练习题

1. `FOR UPDATE` 主要锁表还是锁查询到的行？
2. `SKIP LOCKED` 会等待被锁的行还是跳过？
3. 行锁通常要放在事务里理解吗？
4. 为什么不能长时间持有行锁？

::: tip 提示
行锁要配合短事务使用，锁住后尽快完成修改并提交。
:::

::: details 答案
1. 查询到的行。
2. 跳过。
3. 要。
4. 会让其他事务等待，影响并发。
:::

## 常见坑

- 锁住行后事务长时间不提交
- 用锁掩盖业务流程设计问题
- 没有稳定排序就用 `SKIP LOCKED` 抢任务
- 不理解被跳过的数据仍然存在

## 先记住这三句

- `FOR UPDATE` 锁住要改的行。
- 行锁要尽快释放。
- `SKIP LOCKED` 适合任务抢占场景。
