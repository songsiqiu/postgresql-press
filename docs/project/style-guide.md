# 翻译规范

## 原则

- 中文要准确，也要好读
- 先讲场景，再讲术语
- 不为了显得完整而堆概念
- 不把新手已经能理解的内容写得像字典

## 每章固定结构

除目录页和少数说明页外，正文页尽量包含：

1. 你学完能干什么
2. 能直接照着跑的例子
3. 容易混淆的词
4. 3 到 5 道练习题
5. 提示和答案
6. 常见坑
7. 先记住这三句

## 练习题口径

- 题目必须能用本页内容完成
- 不考冷门细节
- 优先使用 `demo_users`、`notes`、`accounts`、`demo_tags` 这些统一示例
- 答案要能直接对照，不要只写“略”

## 沙盒口径

- 只在 SQL、事务、索引、查询这类关键章节放动手区
- 动手区要给出输入、变化点和预期结果
- 不在每个参考页都硬塞复杂沙盒

## 常用翻译

| 英文 | 中文 |
| --- | --- |
| database | 数据库 |
| schema | 模式 |
| role | 角色 |
| privilege | 权限 |
| transaction | 事务 |
| query plan | 执行计划 |
| index | 索引 |
| extension | 扩展 |
| WAL | 预写式日志 |
| VACUUM | 清理 |
| statistics | 统计信息 |
| connection pool | 连接池 |
| prepared statement | 预处理语句 |
| trigger | 触发器 |
| replication | 复制 |
| instance | 实例 |
| localization | 本地化 |
| locale | 区域设置 |
| parallel query | 并行查询 |
| large object | 大对象 |
| information schema | 信息模式 |
| SQL keyword | SQL 关键字 |
| SPI | SPI 接口 |
| logical decoding | 逻辑解码 |
| libpq | `libpq` |
| ECPG | `ECPG` |
| embedded SQL | 嵌入式 SQL |
| frontend/backend protocol | 前后端协议 |
| physical storage | 物理存储 |
| transaction processing | 事务处理 |
| background worker | 后台工作进程 |
| JIT compilation | JIT 即时编译 |
| regression test | 回归测试 |
| client application | 客户端应用 |
| server application | 服务器应用 |
| SQL conformance | SQL 兼容性 |
| limits | 限制 |
| acronym | 缩略词 |
| `SELECT` | `SELECT` |
| `INSERT` | `INSERT` |
| `UPDATE` | `UPDATE` |
| `DELETE` | `DELETE` |
| `CREATE TABLE` | `CREATE TABLE` |
| `ALTER TABLE` | `ALTER TABLE` |
| `DROP TABLE` | `DROP TABLE` |
| `BEGIN` | `BEGIN` |
| `COMMIT` | `COMMIT` |
| `ROLLBACK` | `ROLLBACK` |
| `GRANT` | `GRANT` |
| `REVOKE` | `REVOKE` |
| `CREATE INDEX` | `CREATE INDEX` |
| `DROP INDEX` | `DROP INDEX` |
| `CREATE VIEW` | `CREATE VIEW` |
| `DROP VIEW` | `DROP VIEW` |
| `CREATE SCHEMA` | `CREATE SCHEMA` |
| `DROP SCHEMA` | `DROP SCHEMA` |
| `EXPLAIN` | `EXPLAIN` |
| `COPY` | `COPY` |
| `TRUNCATE` | `TRUNCATE` |
| `CREATE ROLE` | `CREATE ROLE` |
| `DROP ROLE` | `DROP ROLE` |
| `CREATE DATABASE` | `CREATE DATABASE` |
| `DROP DATABASE` | `DROP DATABASE` |
| `CREATE EXTENSION` | `CREATE EXTENSION` |
| `DROP EXTENSION` | `DROP EXTENSION` |
| `ANALYZE` | `ANALYZE` |
| `CREATE FUNCTION` | `CREATE FUNCTION` |
| `DROP FUNCTION` | `DROP FUNCTION` |
| `CREATE TRIGGER` | `CREATE TRIGGER` |
| `DROP TRIGGER` | `DROP TRIGGER` |
| `CREATE POLICY` | `CREATE POLICY` |
| `DROP POLICY` | `DROP POLICY` |
| `CREATE MATERIALIZED VIEW` | `CREATE MATERIALIZED VIEW` |
| `REFRESH MATERIALIZED VIEW` | `REFRESH MATERIALIZED VIEW` |
| `PREPARE` | `PREPARE` |
| `EXECUTE` | `EXECUTE` |
| `LISTEN` | `LISTEN` |
| `NOTIFY` | `NOTIFY` |
| `UNLISTEN` | `UNLISTEN` |
| `SET` | `SET` |
| `SHOW` | `SHOW` |
| `RESET` | `RESET` |
| `COMMENT` | `COMMENT` |
| `CREATE SEQUENCE` | `CREATE SEQUENCE` |
| `ALTER SEQUENCE` | `ALTER SEQUENCE` |
| `LOCK` | `LOCK` |
| `REINDEX` | `REINDEX` |
| `CLUSTER` | `CLUSTER` |
| `CREATE TABLESPACE` | `CREATE TABLESPACE` |
| `DROP TABLESPACE` | `DROP TABLESPACE` |
| `ALTER DEFAULT PRIVILEGES` | `ALTER DEFAULT PRIVILEGES` |
| `CREATE TYPE` | `CREATE TYPE` |
| `CREATE DOMAIN` | `CREATE DOMAIN` |
| `CREATE FOREIGN TABLE` | `CREATE FOREIGN TABLE` |
| `CREATE PUBLICATION` | `CREATE PUBLICATION` |
| `CREATE SUBSCRIPTION` | `CREATE SUBSCRIPTION` |
| `DECLARE` | `DECLARE` |
| `FETCH` | `FETCH` |
| `CLOSE` | `CLOSE` |
| `CREATE COLLATION` | `CREATE COLLATION` |
| `DROP COLLATION` | `DROP COLLATION` |
| array function | 数组函数 |
| range operator | 范围操作符 |
| full text search | 全文检索 |
| sequence function | 序列函数 |
| network address type | 网络地址类型 |
| conditional function | 条件函数 |
| numeric type | 数值类型 |
| character type | 字符类型 |
| datetime type | 日期时间类型 |
| jsonb | JSONB |
| array type | 数组类型 |
| range type | 范围类型 |
| enum type | 枚举类型 |
| bit string type | 位串类型 |
| XML type | XML 类型 |
| geometric type | 几何类型 |
| object identifier type | 对象标识符类型 |
| composite type | 复合类型 |
| `inet` | `inet` |
| `cidr` | `cidr` |
| `macaddr` | `macaddr` |
| `bit varying` | `bit varying` |
| `xml` | `xml` |
| `point` | `point` |
| `oid` | `oid` |
| `regclass` | `regclass` |
| authentication | 认证 |
| authorization | 授权 |
| `statement_timeout` | `statement_timeout` |
| `lock_timeout` | `lock_timeout` |
| `SET LOCAL` | `SET LOCAL` |
| trigger function | 触发器函数 |
| row lock | 行锁 |
| blocking session | 阻塞会话 |

## 表达禁忌

- 不要为了完整而堆术语
- 不要把错误旧口径保留成兼容说法
- 不要把复制写成备份的替代品
- 不要把连接池写成越大越好
- 不要擅自截断数字、金额、时间精度
