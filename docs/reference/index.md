# 官方目录映射

这一组页面是整个项目的骨架图。它把官方文档的大板块先翻成中文，并明确后续怎么补齐。

## 你学完能干什么

- 知道本站和官方文档大板块的对应关系
- 能判断一个主题应该去哪一类章节里找
- 能按学习路线读，也能按官方目录查

## 当前映射

- [教程](/tutorial/)
- [SQL 语言](/sql-language/)
- [服务器管理](/server-admin/)
- [客户端接口](/client-interfaces/)
- [服务端编程](/server-programming/)
- [内部原理](/internals/)
- [附录](/appendix/)

## 常查参考入口

- [SQL 命令](/reference/sql-commands/)
- [SELECT 速查](/reference/sql-commands/select)
- [INSERT 速查](/reference/sql-commands/insert)
- [UPDATE 速查](/reference/sql-commands/update)
- [DELETE 速查](/reference/sql-commands/delete)
- [CREATE TABLE 速查](/reference/sql-commands/create-table)
- [ALTER TABLE 与 DROP TABLE 速查](/reference/sql-commands/alter-drop-table)
- [事务命令速查](/reference/sql-commands/transactions)
- [GRANT 与 REVOKE 速查](/reference/sql-commands/grant-revoke)
- [CREATE INDEX 与 DROP INDEX 速查](/reference/sql-commands/create-drop-index)
- [CREATE VIEW 与 DROP VIEW 速查](/reference/sql-commands/views)
- [CREATE SCHEMA 与 DROP SCHEMA 速查](/reference/sql-commands/schemas)
- [EXPLAIN 速查](/reference/sql-commands/explain)
- [COPY 速查](/reference/sql-commands/copy)
- [TRUNCATE 速查](/reference/sql-commands/truncate)
- [CREATE ROLE 与 DROP ROLE 速查](/reference/sql-commands/roles)
- [CREATE DATABASE 与 DROP DATABASE 速查](/reference/sql-commands/databases)
- [CREATE EXTENSION 与 DROP EXTENSION 速查](/reference/sql-commands/extensions)
- [VACUUM 与 ANALYZE 速查](/reference/sql-commands/vacuum-analyze)
- [CREATE FUNCTION 与 DROP FUNCTION 速查](/reference/sql-commands/functions)
- [CREATE TRIGGER 与 DROP TRIGGER 速查](/reference/sql-commands/triggers)
- [CREATE POLICY 与 DROP POLICY 速查](/reference/sql-commands/policies)
- [CREATE MATERIALIZED VIEW 与 REFRESH 速查](/reference/sql-commands/materialized-views)
- [PREPARE 与 EXECUTE 速查](/reference/sql-commands/prepare-execute)
- [LISTEN、NOTIFY、UNLISTEN 速查](/reference/sql-commands/listen-notify)
- [SET、SHOW、RESET 速查](/reference/sql-commands/set-show-reset)
- [COMMENT 速查](/reference/sql-commands/comment)
- [CREATE SEQUENCE 与 ALTER SEQUENCE 速查](/reference/sql-commands/sequences)
- [LOCK 速查](/reference/sql-commands/lock)
- [REINDEX 与 CLUSTER 速查](/reference/sql-commands/reindex-cluster)
- [CREATE TABLESPACE 与 DROP TABLESPACE 速查](/reference/sql-commands/tablespaces)
- [ALTER DEFAULT PRIVILEGES 速查](/reference/sql-commands/default-privileges)
- [CREATE TYPE 与 CREATE DOMAIN 速查](/reference/sql-commands/types-domains)
- [FOREIGN TABLE 速查](/reference/sql-commands/foreign-tables)
- [PUBLICATION 与 SUBSCRIPTION 速查](/reference/sql-commands/publication-subscription)
- [DECLARE、FETCH、CLOSE 速查](/reference/sql-commands/cursors)
- [CREATE COLLATION 与 DROP COLLATION 速查](/reference/sql-commands/collations)
- [索引命令速查](/reference/index-commands)
- [约束命令速查](/reference/constraint-commands)
- [数据类型](/reference/data-types)
- [数值类型速查](/reference/numeric-types)
- [字符类型速查](/reference/character-types)
- [布尔类型速查](/reference/boolean-types)
- [日期时间类型速查](/reference/datetime-types)
- [JSONB 类型速查](/reference/jsonb-types)
- [数组与范围类型速查](/reference/array-range-types)
- [UUID 速查](/reference/uuid)
- [函数与操作符](/reference/functions-operators)
- [系统目录与视图](/reference/system-catalogs)
- [信息模式速查](/reference/information-schema)
- [psql 常用命令](/reference/psql)
- [客户端应用速查](/reference/client-apps)
- [服务器应用速查](/reference/server-apps)
- [备份工具速查](/reference/backup-tools)
- [配置参数速查](/reference/configuration-settings)
- [错误码速查](/reference/error-codes)
- [COPY 与批量导入](/reference/copy)
- [排查入口速查](/reference/troubleshooting-map)
- [统计视图速查](/reference/statistics-views)
- [扩展速查](/reference/extensions)
- [角色权限速查](/reference/roles-privileges)
- [事务命令速查](/reference/transaction-commands)
- [日期时间函数速查](/reference/datetime-functions)
- [字符串函数速查](/reference/string-functions)
- [JSON 函数速查](/reference/json-functions)
- [数学函数速查](/reference/math-functions)
- [聚合函数速查](/reference/aggregate-functions)
- [数组函数速查](/reference/array-functions)
- [范围函数速查](/reference/range-functions)
- [全文检索函数速查](/reference/full-text-functions)
- [序列函数速查](/reference/sequence-functions)
- [网络地址函数速查](/reference/network-functions)
- [条件函数速查](/reference/conditional-functions)
- [SQL 关键字速查](/reference/sql-keywords)

## 说明

这里先按官方主线搭骨架，后续再把每个大板块拆成更细的章节。

## 怎么用这张映射

如果你是新手，先不要从参考手册开始读。建议顺序是：

1. 先读 [新手路线](/guide/)
2. 再读 [SQL 语言](/sql-language/)
3. 需要部署、备份、权限时再看 [服务器管理](/server-admin/)
4. 写应用时看 [客户端接口](/client-interfaces/)
5. 需要函数、触发器、扩展时看 [服务端编程](/server-programming/)
6. 想理解底层原因时看 [内部原理](/internals/)

## 练习题

1. 想学习 `SELECT`、`JOIN`，应该先看哪个板块？
2. 想排查备份和权限问题，应该看哪个板块？
3. 想知道应用怎么连接数据库，应该看哪个板块？
4. 想查 `numeric`、`timestamptz` 这些字段类型，应该看哪个参考页？
5. 想批量导入 CSV，应该看哪个参考页？

::: tip 提示
先按问题类型找板块，不要从完整参考手册第一页硬读。
:::

::: details 答案
1. SQL 语言。
2. 服务器管理。
3. 客户端接口。
4. 数据类型。
5. COPY 与批量导入。
:::

## 常见坑

- 新手直接从完整参考开始读，很容易被细节淹没
- 把服务端编程和应用开发混成一类
- 查问题时不先判断它属于 SQL、管理、连接还是内部原理
- 查表结构时不知道信息模式和系统目录的区别
- 用 SQL 关键字做列名，后续到处需要双引号
- 查修改和删除命令时，只看语法不看风险
- 把 `TRUNCATE`、`DROP DATABASE` 这类高风险命令当普通操作
- 把服务端能力类命令当成没有维护成本的捷径
- 把会话临时设置、对象注释、存储位置和备份混成一类
- 把默认权限、外部表、逻辑复制这些高级对象当成普通表操作
- 查函数时不先按文本、时间、数组、范围、全文检索这些用途分类
- 类型选择偷懒全用字符串，后续查询和校验都变难

## 先记住这三句

- 学习按路线，查资料按目录。
- SQL、管理、连接、内部原理是不同入口。
- 参考手册适合查，不适合从第一页硬啃。
