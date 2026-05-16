# PUBLICATION 与 SUBSCRIPTION 速查

`PUBLICATION` 和 `SUBSCRIPTION` 用于逻辑复制。发布端说明要发布哪些变化，订阅端负责接收这些变化。

## 你学完能干什么

- 能理解发布和订阅的基本关系
- 知道逻辑复制用于同步数据变化
- 能看懂创建发布的最小写法
- 能避免把逻辑复制当成备份

## 创建发布

```sql
CREATE PUBLICATION app_pub
FOR TABLE notes;
```

这表示发布 `notes` 表的数据变化。

创建订阅通常需要连接信息：

```sql
CREATE SUBSCRIPTION app_sub
CONNECTION 'host=publisher dbname=app user=repl password=secret'
PUBLICATION app_pub;
```

实际生产中连接串和密码要按安全规范管理。

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| 发布 | 哪些表的变化可以被订阅 |
| 订阅 | 从发布端接收变化 |
| 逻辑复制 | 按数据变化同步 |
| 复制槽 | 保留下游还没消费的 WAL |

## 练习题

1. `PUBLICATION` 在发布端还是订阅端创建？
2. 逻辑复制是备份方案吗？
3. 订阅端需要知道发布端连接信息吗？
4. 复制槽长期不消费会不会带来 WAL 积压风险？

::: tip 提示
逻辑复制解决“变化同步”，备份解决“出事恢复”。
:::

::: details 答案
1. 发布端。
2. 不是。
3. 需要。
4. 会。
:::

## 常见坑

- 把逻辑复制当成备份
- 忽略复制槽导致 WAL 积压
- 没评估表结构变更对订阅的影响
- 把连接串和密码写进公开文件

## 先记住这三句

- 发布端提供变化。
- 订阅端接收变化。
- 逻辑复制不能替代备份。
