# ALTER TABLE 与 DROP TABLE 速查

`ALTER TABLE` 用来修改表结构，`DROP TABLE` 用来删除表。它们影响很大，尤其在线上环境要格外谨慎。

## 你学完能干什么

- 能区分修改表结构和删除表
- 知道常见 `ALTER TABLE` 用法
- 能理解线上改表要评估影响
- 能避免误删表结构

## 修改表结构

```sql
ALTER TABLE demo_users
ADD COLUMN last_login_at timestamptz;
```

这会给 `demo_users` 增加一列。

也可以增加约束：

```sql
ALTER TABLE demo_users
ADD CONSTRAINT demo_users_email_not_empty
CHECK (email <> '');
```

## 删除表

```sql
DROP TABLE demo_users;
```

这会删除整张表结构和其中数据。执行前必须确认环境、备份和影响范围。

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| `ALTER TABLE` | 修改表结构 |
| `DROP TABLE` | 删除整张表 |
| 锁影响 | 改结构时可能阻塞其他操作 |
| 回滚方案 | 出问题后怎么恢复 |

## 练习题

1. 增加一列应该用 `ALTER TABLE` 还是 `DROP TABLE`？
2. `DROP TABLE` 删除的是数据行还是整张表结构？
3. 线上改大表前为什么要评估锁影响？
4. 删除表前为什么要确认备份？

::: tip 提示
看到 `DROP` 先停一下，确认它删的是对象，不是普通数据行。
:::

::: details 答案
1. `ALTER TABLE`。
2. 整张表结构和其中数据。
3. 改表可能阻塞读写或影响业务。
4. 避免误删后无法恢复。
:::

## 常见坑

- 把 `DROP TABLE` 当成普通清空数据
- 线上大表随手加非空默认值
- 改表前没看依赖对象
- 没有回滚和恢复方案

## 先记住这三句

- `ALTER` 改结构，`DROP` 删对象。
- 线上改表先评估影响。
- 删除表前先确认备份和环境。
