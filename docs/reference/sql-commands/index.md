# SQL 命令

这里会逐步整理 PostgreSQL 的 SQL 命令参考，先作为官方目录中的一个落点。

## 你学完能干什么

- 知道 SQL 命令参考应该怎么查
- 能把常见命令按用途分类
- 不会把学习页和参考页混在一起读

## 常见命令分类

| 分类 | 常见命令 | 用途 |
| --- | --- | --- |
| 查询 | [`SELECT`](/reference/sql-commands/select) | 读取数据 |
| 数据修改 | [`INSERT`](/reference/sql-commands/insert)、[`UPDATE`](/reference/sql-commands/update)、[`DELETE`](/reference/sql-commands/delete) | 写入、更新、删除数据 |
| 批量数据 | [`COPY`](/reference/sql-commands/copy)、[`TRUNCATE`](/reference/sql-commands/truncate) | 批量导入导出、整表清空 |
| 结构定义 | [`CREATE TABLE`](/reference/sql-commands/create-table)、[`ALTER TABLE` / `DROP TABLE`](/reference/sql-commands/alter-drop-table)、[`CREATE INDEX` / `DROP INDEX`](/reference/sql-commands/create-drop-index)、[`CREATE VIEW` / `DROP VIEW`](/reference/sql-commands/views)、[`CREATE SCHEMA` / `DROP SCHEMA`](/reference/sql-commands/schemas) | 管理表、索引、视图和模式 |
| 权限 | [`CREATE ROLE` / `DROP ROLE`](/reference/sql-commands/roles)、[`GRANT` / `REVOKE`](/reference/sql-commands/grant-revoke) | 管理角色、授权和撤销权限 |
| 默认权限 | [`ALTER DEFAULT PRIVILEGES`](/reference/sql-commands/default-privileges) | 管理未来对象的默认授权 |
| 数据库对象 | [`CREATE DATABASE` / `DROP DATABASE`](/reference/sql-commands/databases)、[`CREATE EXTENSION` / `DROP EXTENSION`](/reference/sql-commands/extensions) | 管理数据库和扩展 |
| 高级对象 | [`CREATE TYPE` / `CREATE DOMAIN`](/reference/sql-commands/types-domains)、[`CREATE FOREIGN TABLE`](/reference/sql-commands/foreign-tables)、[`CREATE COLLATION`](/reference/sql-commands/collations) | 管理类型、域、外部表和排序规则 |
| 逻辑复制 | [`CREATE PUBLICATION` / `CREATE SUBSCRIPTION`](/reference/sql-commands/publication-subscription) | 管理发布订阅 |
| 服务端能力 | [`CREATE FUNCTION` / `DROP FUNCTION`](/reference/sql-commands/functions)、[`CREATE TRIGGER` / `DROP TRIGGER`](/reference/sql-commands/triggers)、[`CREATE POLICY` / `DROP POLICY`](/reference/sql-commands/policies)、[`CREATE MATERIALIZED VIEW` / `REFRESH MATERIALIZED VIEW`](/reference/sql-commands/materialized-views) | 管理函数、触发器、策略和物化视图 |
| 会话交互 | [`PREPARE` / `EXECUTE`](/reference/sql-commands/prepare-execute)、[`LISTEN` / `NOTIFY`](/reference/sql-commands/listen-notify)、[`DECLARE` / `FETCH` / `CLOSE`](/reference/sql-commands/cursors) | 预处理语句、轻量通知和游标 |
| 会话参数 | [`SET` / `SHOW` / `RESET`](/reference/sql-commands/set-show-reset) | 查看和调整当前会话参数 |
| 对象说明 | [`COMMENT`](/reference/sql-commands/comment) | 给数据库对象添加说明 |
| 序列 | [`CREATE SEQUENCE` / `ALTER SEQUENCE`](/reference/sql-commands/sequences) | 生成递增值 |
| 事务 | [`BEGIN` / `COMMIT` / `ROLLBACK`](/reference/sql-commands/transactions) | 控制一组操作 |
| 排查维护 | [`EXPLAIN`](/reference/sql-commands/explain)、[`VACUUM` / `ANALYZE`](/reference/sql-commands/vacuum-analyze)、[`LOCK`](/reference/sql-commands/lock)、[`REINDEX` / `CLUSTER`](/reference/sql-commands/reindex-cluster) | 查看执行计划、维护表和统计信息、控制并发 |
| 存储管理 | [`CREATE TABLESPACE` / `DROP TABLESPACE`](/reference/sql-commands/tablespaces) | 管理对象存储位置 |

## 已细拆命令

1. [SELECT 速查](/reference/sql-commands/select)
2. [INSERT 速查](/reference/sql-commands/insert)
3. [UPDATE 速查](/reference/sql-commands/update)
4. [DELETE 速查](/reference/sql-commands/delete)
5. [CREATE TABLE 速查](/reference/sql-commands/create-table)
6. [ALTER TABLE 与 DROP TABLE 速查](/reference/sql-commands/alter-drop-table)
7. [BEGIN、COMMIT、ROLLBACK 速查](/reference/sql-commands/transactions)
8. [GRANT 与 REVOKE 速查](/reference/sql-commands/grant-revoke)
9. [CREATE INDEX 与 DROP INDEX 速查](/reference/sql-commands/create-drop-index)
10. [CREATE VIEW 与 DROP VIEW 速查](/reference/sql-commands/views)
11. [CREATE SCHEMA 与 DROP SCHEMA 速查](/reference/sql-commands/schemas)
12. [EXPLAIN 速查](/reference/sql-commands/explain)
13. [COPY 速查](/reference/sql-commands/copy)
14. [TRUNCATE 速查](/reference/sql-commands/truncate)
15. [CREATE ROLE 与 DROP ROLE 速查](/reference/sql-commands/roles)
16. [CREATE DATABASE 与 DROP DATABASE 速查](/reference/sql-commands/databases)
17. [CREATE EXTENSION 与 DROP EXTENSION 速查](/reference/sql-commands/extensions)
18. [VACUUM 与 ANALYZE 速查](/reference/sql-commands/vacuum-analyze)
19. [CREATE FUNCTION 与 DROP FUNCTION 速查](/reference/sql-commands/functions)
20. [CREATE TRIGGER 与 DROP TRIGGER 速查](/reference/sql-commands/triggers)
21. [CREATE POLICY 与 DROP POLICY 速查](/reference/sql-commands/policies)
22. [CREATE MATERIALIZED VIEW 与 REFRESH 速查](/reference/sql-commands/materialized-views)
23. [PREPARE 与 EXECUTE 速查](/reference/sql-commands/prepare-execute)
24. [LISTEN、NOTIFY、UNLISTEN 速查](/reference/sql-commands/listen-notify)
25. [SET、SHOW、RESET 速查](/reference/sql-commands/set-show-reset)
26. [COMMENT 速查](/reference/sql-commands/comment)
27. [CREATE SEQUENCE 与 ALTER SEQUENCE 速查](/reference/sql-commands/sequences)
28. [LOCK 速查](/reference/sql-commands/lock)
29. [REINDEX 与 CLUSTER 速查](/reference/sql-commands/reindex-cluster)
30. [CREATE TABLESPACE 与 DROP TABLESPACE 速查](/reference/sql-commands/tablespaces)
31. [ALTER DEFAULT PRIVILEGES 速查](/reference/sql-commands/default-privileges)
32. [CREATE TYPE 与 CREATE DOMAIN 速查](/reference/sql-commands/types-domains)
33. [FOREIGN TABLE 速查](/reference/sql-commands/foreign-tables)
34. [PUBLICATION 与 SUBSCRIPTION 速查](/reference/sql-commands/publication-subscription)
35. [DECLARE、FETCH、CLOSE 速查](/reference/sql-commands/cursors)
36. [CREATE COLLATION 与 DROP COLLATION 速查](/reference/sql-commands/collations)

## 怎么查

先判断命令属于哪类，再看具体语法。比如你想知道怎么建表，就去找 `CREATE TABLE`；想知道怎么提交事务，就找 `COMMIT`。

## 练习题

1. `SELECT` 属于哪一类命令？
2. 想撤销权限应该查哪个命令？
3. 想取消当前事务里的修改应该用哪个命令？
4. 想查看查询计划应该查哪个命令？

::: tip 提示
参考页不是背诵表，目标是让你知道该查哪个词。
:::

::: details 答案
1. 查询。
2. `REVOKE`。
3. `ROLLBACK`。
4. `EXPLAIN`。
:::

## 常见坑

- 没有先判断命令类型，就在参考手册里乱找
- 把 `DROP` 当成普通删除数据，实际它会删除对象结构
- 不理解事务命令就直接批量修改
- 查 `UPDATE` 和 `DELETE` 时只看语法，不先确认命中范围
- 把 `TRUNCATE` 当成带条件删除
- 不评估扩展和维护命令对生产环境的影响
- 把触发器、策略、物化视图这些自动或缓存能力当成普通查询
- 把 `NOTIFY` 当成可靠消息队列
- 以为 `SET` 一定永久修改配置
- 把表空间当成备份方案
- 以为默认权限会补已有对象权限
- 把外部表和本地表成本看成一样
- 把逻辑复制当成备份

## 先记住这三句

- 查命令先分类。
- `DELETE` 删数据，`DROP` 删对象。
- 批量修改前先理解事务命令。
