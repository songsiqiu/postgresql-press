# 连接池与事务边界

连接池和事务边界是应用接 PostgreSQL 时最容易出问题的地方。它们一个管连接资源，一个管数据一致性。

## 你学完能干什么

- 知道连接池为什么不能无限调大
- 能理解事务应该围绕一个业务动作
- 能避免连接泄漏和长事务
- 能判断什么时候要把多条 SQL 放进同一个事务

## 连接池解决什么

应用每次访问数据库都新建连接，成本很高。连接池会提前准备一些连接，请求来了就借一个，用完归还。

你可以把它理解成：

1. 从连接池借连接
2. 执行 SQL
3. 用完归还连接

如果第 3 步没做好，连接就会被耗尽。

## 应用里怎么写

下面是接近真实应用的伪代码，重点看 `try/finally`：

```js
const client = await pool.connect()

try {
  await client.query('BEGIN')

  await client.query(
    'INSERT INTO orders(user_id, total_amount) VALUES ($1, $2)',
    [userId, totalAmount]
  )

  await client.query(
    'UPDATE inventory SET stock = stock - 1 WHERE sku = $1 AND stock > 0',
    [sku]
  )

  await client.query('COMMIT')
} catch (error) {
  await client.query('ROLLBACK')
  throw error
} finally {
  client.release()
}
```

这段代码要记住三点：

- 借出来的连接一定要归还
- 同一个业务事务里的 SQL 要用同一个连接
- 出错后先回滚，再把错误交给上层处理

## 事务边界怎么定

事务边界应该跟业务动作一致。比如创建订单：

```sql
BEGIN;

INSERT INTO orders (user_id, total_amount)
VALUES (10, 199.00);

UPDATE inventory
SET stock = stock - 1
WHERE sku = 'book-001';

COMMIT;
```

订单写入和库存扣减要一起成功。如果库存扣减失败，就应该回滚订单写入。

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| 连接 | 应用和数据库之间的一条通道 |
| 连接池 | 复用连接的一组管理工具 |
| 事务边界 | 从 `BEGIN` 到 `COMMIT` 或 `ROLLBACK` 的范围 |
| 连接泄漏 | 用完连接却没有归还 |
| 长事务 | 开着事务很久不提交也不回滚 |

## 练习题

1. 为什么连接池不能无限调大？
2. 创建订单和扣库存为什么适合放进同一个事务？
3. 一个接口结束后，连接应该怎么处理？
4. 事务里为什么不适合等待用户操作？

::: tip 提示
连接池关注资源，事务关注一致性。它们经常一起出现，但不是一件事。
:::

::: details 答案
1. 数据库可承受连接有限，过大可能占满资源。
2. 两个动作必须一起成功或一起失败。
3. 归还连接池。
4. 会让事务和锁保持很久，影响其他请求。
:::

## 常见坑

- 每个请求都新建数据库连接
- 连接用完不归还
- `BEGIN` 在一个连接上执行，后续 SQL 却跑到另一个连接上
- 事务里调用慢接口或等待人工确认
- 把连接池大小当成性能按钮随便调大

## 先记住这三句

- 连接池是复用连接，不是制造无限连接。
- 事务边界要跟业务动作一致。
- 连接和事务都要尽快释放。
