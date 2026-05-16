# 超时设置

超时设置能防止应用和数据库互相长时间卡住。它不是为了掩盖慢 SQL，而是给系统设置可控边界。

## 你学完能干什么

- 能理解连接超时、语句超时和锁等待超时的区别
- 知道应用侧和数据库侧都可能设置超时
- 能避免请求无限等待
- 能根据场景给不同操作设置不同超时

## 常见超时

| 超时 | 新手解释 |
| --- | --- |
| 连接超时 | 连数据库多久没连上就放弃 |
| 语句超时 | SQL 执行多久没结束就取消 |
| 锁等待超时 | 等锁多久还拿不到就放弃 |
| 空闲事务超时 | 事务开着但不干活多久后终止 |

## 一个例子

```sql
SET statement_timeout = '5s';

SELECT *
FROM reports
WHERE created_at >= CURRENT_DATE - INTERVAL '30 days';
```

如果这条 SQL 超过 5 秒还没完成，会被取消。

## 应用里怎么写

可以在一次连接或一次事务开始时设置本次操作的边界：

```js
const client = await pool.connect()

try {
  await client.query('BEGIN')
  await client.query("SET LOCAL statement_timeout = '5s'")
  await client.query("SET LOCAL lock_timeout = '1s'")

  await client.query(
    'UPDATE accounts SET balance = balance - $1 WHERE id = $2',
    [amount, accountId]
  )

  await client.query('COMMIT')
} catch (error) {
  await client.query('ROLLBACK')
  throw error
} finally {
  client.release()
}
```

`SET LOCAL` 的作用范围在当前事务里，更适合给某个业务动作设置临时边界。

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| 取消 SQL | 当前语句停止执行 |
| 断开连接 | 整个数据库连接被关闭 |
| 锁等待 | SQL 在等其他事务释放锁 |
| 空闲事务 | 开了事务但没有继续执行 |

## 练习题

1. 连接超时解决的是执行慢 SQL 还是连不上数据库？
2. `statement_timeout` 主要限制什么？
3. 锁等待超时能帮助发现哪类问题？
4. 超时设置能不能替代 SQL 优化？

::: tip 提示
先分清是“连不上”“执行太久”“等锁太久”，再选对应超时。
:::

::: details 答案
1. 连不上数据库。
2. 单条 SQL 的执行时间。
3. 长事务或锁竞争。
4. 不能。
:::

## 常见坑

- 所有请求使用同一个超时时间
- 用很长超时掩盖慢查询
- 没有设置锁等待边界
- SQL 被取消后应用没有处理错误
- 把全局超时改得很激进，影响后台任务和报表任务

## 先记住这三句

- 超时是系统边界。
- 不同等待要用不同超时。
- 超时不能替代性能优化。
