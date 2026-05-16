# 视图与事务

视图和事务都能让复杂问题变得更可控。视图让查询更好复用，事务让一组修改保持一致。

## 你学完能干什么

- 能用视图给常用查询起名字
- 能理解普通视图保存的是查询定义
- 能用事务保护多步修改
- 能区分 `COMMIT` 和 `ROLLBACK` 的结果

## 视图是什么

视图可以先理解成“保存下来的查询”。

```sql
CREATE VIEW active_notes AS
SELECT id, title, created_at
FROM notes
WHERE archived = false;
```

之后就可以像查表一样查它：

```sql
SELECT *
FROM active_notes
ORDER BY created_at DESC;
```

## 事务是什么

事务让一组操作要么一起成功，要么一起失败。

```sql
BEGIN;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

COMMIT;
```

如果中间发现问题，可以：

```sql
ROLLBACK;
```

## 什么时候用视图

- 同一段查询被很多地方复用
- 查询很长，希望给它一个清楚的名字
- 想把复杂表结构包装成更容易理解的结果

## 什么时候用事务

- 一个动作需要改多张表
- 多步修改必须保持一致
- 出错时需要整体撤回

## 练习题

1. 为常用查询创建一个视图。
2. 在事务里执行两条更新，然后手动 `ROLLBACK`。
3. 再执行一次相同事务并 `COMMIT`，对比结果。
4. 说出视图和表的区别。
5. 什么时候事务比单条更新更合适？

::: tip 提示
视图解决“查询复用”，事务解决“多步一致”。
:::

::: details 答案
1. 可以用 `CREATE VIEW view_name AS SELECT ...`。
2. `ROLLBACK` 后事务里的修改不会保存。
3. `COMMIT` 后修改正式生效。
4. 表保存数据，普通视图保存查询定义。
5. 一个业务动作需要改多张表或多行数据时。
:::

## 常见坑

- 把视图当成真实复制出来的一张表
- 事务开了之后忘记提交或回滚
- 在事务里做慢接口调用或等待人工输入

## 先记住这三句

- 视图让复杂查询有名字。
- 事务让多步修改保持一致。
- 视图和事务解决的是两类不同问题。
