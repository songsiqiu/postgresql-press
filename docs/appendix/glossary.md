# 术语表

这一页会收录翻译时最容易让人卡住的词，尽量用一句话讲明白。

## 你学完能干什么

- 遇到常见术语时能先有基本理解
- 知道本站采用的中文翻译口径
- 减少因为词不统一导致的阅读成本

## 常用术语

| 英文 | 中文口径 | 新手解释 |
| --- | --- | --- |
| database | 数据库 | 一个相对独立的数据空间 |
| schema | 模式 | 数据库里的分类目录 |
| table | 表 | 存放同一类数据的结构 |
| row | 行 | 表里的一条记录 |
| column | 列 | 每条记录上的一个字段 |
| role | 角色 | PostgreSQL 里的用户和权限身份 |
| privilege | 权限 | 某个角色能做什么 |
| transaction | 事务 | 一组要一起成功或失败的操作 |
| commit | 提交 | 确认事务修改生效 |
| rollback | 回滚 | 放弃事务里的修改 |
| lock | 锁 | 控制并发修改的等待机制 |
| index | 索引 | 帮数据库更快找到数据的结构 |
| query plan | 执行计划 | 数据库准备怎么执行 SQL |
| extension | 扩展 | 给 PostgreSQL 增加能力的组件 |
| MVCC | 多版本并发控制 | 让读写尽量少互相阻塞的机制 |
| WAL | 预写式日志 | 数据库修改前先写下的变更记录 |
| VACUUM | 清理 | 清理不再需要的旧版本，维护数据库健康 |
| statistics | 统计信息 | 数据库估算执行计划时参考的数据分布信息 |
| connection pool | 连接池 | 复用数据库连接的管理工具 |
| prepared statement | 预处理语句 | 先准备 SQL 结构，再绑定参数执行 |
| PL/pgSQL | PL/pgSQL | PostgreSQL 常用过程语言 |
| trigger | 触发器 | 表数据变化时自动执行的逻辑 |
| replication | 复制 | 把主库变化同步到其他实例 |
| generated column | 生成列 | 由表达式自动计算的列 |
| materialized view | 物化视图 | 保存查询结果、需要刷新的视图 |
| checkpoint | 检查点 | 推进数据库恢复参考位置的过程 |
| dirty page | 脏页 | 内存中已修改但还没写回磁盘的数据页 |
| background writer | 后台写入 | 提前写回部分脏页的后台工作 |
| GRANT | 授权 | 给角色增加权限 |
| REVOKE | 撤销权限 | 从角色移除权限 |
| NULL | 空值 | 未知或缺失，不等于空字符串或 0 |
| identity column | 身份列 | 由数据库自动生成编号的列 |
| sequence | 序列 | 生成递增值的数据库对象 |
| B-tree | B-tree | 最常见的索引访问方法 |
| GIN | GIN | 常用于数组、JSONB、全文检索等多值内容的索引 |
| major upgrade | 大版本升级 | 跨 PostgreSQL 主版本的升级 |
| timestamptz | 带时区时间戳 | 按时区规则解释和显示的时间点 |
| interval | 时间间隔 | 一段持续时间 |
| range type | 范围类型 | 表达一个连续区间的数据类型 |
| aggregate | 聚合 | 把多行汇总成一个统计结果 |
| SSL/TLS | SSL/TLS | 保护客户端和服务器之间连接的加密协议 |
| audit | 审计 | 记录关键行为，方便事后追溯 |
| pagination | 分页 | 分批读取列表数据 |
| TOAST | TOAST | PostgreSQL 处理大字段的存储机制 |
| table bloat | 表膨胀 | 旧版本和空洞导致表占用变大的现象 |
| SECURITY DEFINER | 安全定义者 | 让函数按拥有者权限执行的设置 |
| exception | 异常 | 执行过程中出现的错误 |
| read replica | 只读副本 | 从主库复制数据、通常只处理读取的实例 |
| max_connections | 最大连接数 | 数据库允许同时存在的连接上限 |
| buffer cache | 缓冲区缓存 | 用内存保存常用数据页的机制 |
| savepoint | 保存点 | 事务中可局部回退的位置 |
| identifier | 标识符 | 表名、列名、函数名这类对象名字 |
| boolean | 布尔类型 | 表达真假的数据类型 |
| work_mem | 工作内存 | 单个排序、哈希等操作可用的内存参数 |
| dynamic SQL | 动态 SQL | 运行时生成并执行的 SQL |
| background process | 后台进程 | 数据库内部持续运行的工作进程 |
| expression | 表达式 | 能算出一个值的 SQL 片段 |
| role membership | 角色成员关系 | 一个角色属于另一个角色的权限关系 |
| replication slot | 复制槽 | 保留复制所需 WAL 的机制 |
| timeout | 超时 | 等待超过设定时间后放弃或取消 |
| constraint | 约束 | 数据库层面保护数据规则的机制 |
| collation | 排序规则 | 文本比较和排序的规则 |
| type conversion | 类型转换 | 把一个值从一种类型转换成另一种类型 |
| autovacuum | autovacuum | 自动清理旧版本并维护统计信息的机制 |
| cancel query | 取消查询 | 停止当前正在执行的 SQL |
| event trigger | 事件触发器 | 数据库事件发生时执行的触发器 |
| jsonb | JSONB | 更适合查询和索引的 JSON 二进制格式 |
| set operation | 集合操作 | 对多个查询结果做合并、交集或差集 |
| domain | 域类型 | 在基础类型上附加约束形成的新类型 |
| PITR | 时间点恢复 | 把数据库恢复到某个历史位置的恢复方式 |
| tablespace | 表空间 | 控制数据库对象存储位置的机制 |
| LISTEN/NOTIFY | LISTEN/NOTIFY | PostgreSQL 的轻量通知机制 |
| numeric function | 数学函数 | 处理数值计算的函数 |
| UPSERT | UPSERT | 插入或冲突时更新 |
| LATERAL | LATERAL | 让右侧子查询引用左侧行的关联方式 |
| password authentication | 密码认证 | 用密码证明连接者身份 |
| WAL archiving | WAL 归档 | 把 WAL 保存到长期位置 |
| connection string | 连接串 | 描述如何连接数据库的一串信息 |
| UUID | UUID | 通用唯一标识符 |
| CASE | 条件表达式 | 按条件返回不同值的表达式 |
| outer join | 外连接 | 保留不匹配一边数据的关联方式 |
| default privileges | 默认权限 | 对未来新建对象生效的授权规则 |
| pg_stat_statements | pg_stat_statements | 汇总 SQL 执行统计的扩展 |
| COPY streaming | COPY 流式接入 | 应用通过 COPY 流式导入或导出数据 |
| trigger design | 触发器设计 | 规划触发器边界和维护方式 |
| row lock | 行锁 | 锁住具体数据行，避免并发修改互相踩踏 |
| `FOR UPDATE` | `FOR UPDATE` | 查询时锁住后续准备修改的行 |
| `SKIP LOCKED` | `SKIP LOCKED` | 遇到已被锁住的行时跳过，常用于任务抢占 |
| grouping sets | 分组统计扩展 | 在一条 SQL 里得到多种分组汇总 |
| advisory lock | 咨询锁 | 由应用约定含义的数据库锁 |
| recovery drill | 恢复演练 | 提前验证备份和恢复流程是否可用 |
| transaction retry | 事务重试 | 遇到可重试错误时重新执行完整事务 |
| HOT update | HOT 更新 | 减少部分更新场景下索引维护成本的优化 |
| instance | 实例 | 一个正在运行的 PostgreSQL 服务 |
| localization | 本地化 | 和编码、排序、地区、时间显示有关的设置 |
| server encoding | 服务端编码 | 数据库保存字符使用的编码 |
| locale | 区域设置 | 影响文本排序和格式显示的地区规则 |
| parallel query | 并行查询 | 多个工作进程一起执行一条查询 |
| large object | 大对象 | 数据库内部管理的大型二进制对象 |
| information schema | 信息模式 | 标准化的数据库结构信息视图 |
| SQL keyword | SQL 关键字 | SQL 语法里有特殊含义的词 |
| SPI | SPI 接口 | 数据库内部执行 SQL 的服务端接口 |
| logical decoding | 逻辑解码 | 把 WAL 变化解读成逻辑数据变更 |
| libpq | `libpq` | PostgreSQL 官方 C 客户端库 |
| ECPG | `ECPG` | C 语言里的嵌入式 SQL 预处理器 |
| embedded SQL | 嵌入式 SQL | 写在宿主语言代码里的 SQL |
| frontend/backend protocol | 前后端协议 | 客户端和服务器之间的通信规则 |
| physical storage | 物理存储 | PostgreSQL 在磁盘上组织数据的方式 |
| transaction processing | 事务处理 | 数据库让一组操作可靠生效或回退的机制 |
| background worker | 后台工作进程 | 运行在数据库服务器内部的工作进程 |
| JIT compilation | JIT 即时编译 | 为部分复杂查询即时编译执行逻辑 |
| regression test | 回归测试 | 验证已有能力没有被改坏的测试 |
| client application | 客户端应用 | 从外部连接和操作 PostgreSQL 的工具 |
| server application | 服务器应用 | 初始化、控制或维护 PostgreSQL 实例的工具 |
| SQL conformance | SQL 兼容性 | PostgreSQL 和 SQL 标准之间的一致或差异情况 |
| limits | 限制 | PostgreSQL 对对象、字段、大小等能力边界的说明 |
| acronym | 缩略词 | 用较短字母组合表示较长概念的写法 |
| `SELECT` | `SELECT` | 查询数据的 SQL 命令 |
| `INSERT` | `INSERT` | 插入新行的 SQL 命令 |
| `UPDATE` | `UPDATE` | 修改已有行的 SQL 命令 |
| `DELETE` | `DELETE` | 删除数据行的 SQL 命令 |
| `CREATE TABLE` | `CREATE TABLE` | 创建表结构的 SQL 命令 |
| `ALTER TABLE` | `ALTER TABLE` | 修改表结构的 SQL 命令 |
| `DROP TABLE` | `DROP TABLE` | 删除整张表的 SQL 命令 |
| `BEGIN` | `BEGIN` | 开始事务的 SQL 命令 |
| `COMMIT` | `COMMIT` | 提交事务的 SQL 命令 |
| `ROLLBACK` | `ROLLBACK` | 回滚事务的 SQL 命令 |
| `GRANT` | `GRANT` | 增加权限的 SQL 命令 |
| `REVOKE` | `REVOKE` | 撤销权限的 SQL 命令 |
| `CREATE INDEX` | `CREATE INDEX` | 创建索引的 SQL 命令 |
| `DROP INDEX` | `DROP INDEX` | 删除索引的 SQL 命令 |
| `CREATE VIEW` | `CREATE VIEW` | 创建视图的 SQL 命令 |
| `DROP VIEW` | `DROP VIEW` | 删除视图的 SQL 命令 |
| `CREATE SCHEMA` | `CREATE SCHEMA` | 创建模式的 SQL 命令 |
| `DROP SCHEMA` | `DROP SCHEMA` | 删除模式的 SQL 命令 |
| `EXPLAIN` | `EXPLAIN` | 查看执行计划的 SQL 命令 |
| `COPY` | `COPY` | 批量导入或导出数据的 SQL 命令 |
| `TRUNCATE` | `TRUNCATE` | 快速清空整张表的 SQL 命令 |
| `CREATE ROLE` | `CREATE ROLE` | 创建角色的 SQL 命令 |
| `DROP ROLE` | `DROP ROLE` | 删除角色的 SQL 命令 |
| `CREATE DATABASE` | `CREATE DATABASE` | 创建数据库的 SQL 命令 |
| `DROP DATABASE` | `DROP DATABASE` | 删除数据库的 SQL 命令 |
| `CREATE EXTENSION` | `CREATE EXTENSION` | 安装扩展的 SQL 命令 |
| `DROP EXTENSION` | `DROP EXTENSION` | 移除扩展的 SQL 命令 |
| `ANALYZE` | `ANALYZE` | 更新统计信息的 SQL 命令 |
| `CREATE FUNCTION` | `CREATE FUNCTION` | 创建函数的 SQL 命令 |
| `DROP FUNCTION` | `DROP FUNCTION` | 删除函数的 SQL 命令 |
| `CREATE TRIGGER` | `CREATE TRIGGER` | 创建触发器的 SQL 命令 |
| `DROP TRIGGER` | `DROP TRIGGER` | 删除触发器的 SQL 命令 |
| `CREATE POLICY` | `CREATE POLICY` | 创建行级安全策略的 SQL 命令 |
| `DROP POLICY` | `DROP POLICY` | 删除行级安全策略的 SQL 命令 |
| `CREATE MATERIALIZED VIEW` | `CREATE MATERIALIZED VIEW` | 创建物化视图的 SQL 命令 |
| `REFRESH MATERIALIZED VIEW` | `REFRESH MATERIALIZED VIEW` | 刷新物化视图结果的 SQL 命令 |
| `PREPARE` | `PREPARE` | 准备预处理语句的 SQL 命令 |
| `EXECUTE` | `EXECUTE` | 执行预处理语句的 SQL 命令 |
| `LISTEN` | `LISTEN` | 监听通知频道的 SQL 命令 |
| `NOTIFY` | `NOTIFY` | 发送通知的 SQL 命令 |
| `UNLISTEN` | `UNLISTEN` | 取消监听通知频道的 SQL 命令 |
| `SET` | `SET` | 修改当前会话参数的 SQL 命令 |
| `SHOW` | `SHOW` | 查看参数值的 SQL 命令 |
| `RESET` | `RESET` | 恢复参数默认值的 SQL 命令 |
| `COMMENT` | `COMMENT` | 给数据库对象添加说明的 SQL 命令 |
| `CREATE SEQUENCE` | `CREATE SEQUENCE` | 创建序列的 SQL 命令 |
| `ALTER SEQUENCE` | `ALTER SEQUENCE` | 修改序列的 SQL 命令 |
| `LOCK` | `LOCK` | 显式加锁的 SQL 命令 |
| `REINDEX` | `REINDEX` | 重建索引的 SQL 命令 |
| `CLUSTER` | `CLUSTER` | 按索引顺序重排表数据的 SQL 命令 |
| `CREATE TABLESPACE` | `CREATE TABLESPACE` | 创建表空间的 SQL 命令 |
| `DROP TABLESPACE` | `DROP TABLESPACE` | 删除表空间的 SQL 命令 |
| `ALTER DEFAULT PRIVILEGES` | `ALTER DEFAULT PRIVILEGES` | 设置未来对象默认权限的 SQL 命令 |
| `CREATE TYPE` | `CREATE TYPE` | 创建自定义类型的 SQL 命令 |
| `CREATE DOMAIN` | `CREATE DOMAIN` | 创建域类型的 SQL 命令 |
| `CREATE FOREIGN TABLE` | `CREATE FOREIGN TABLE` | 创建外部表的 SQL 命令 |
| `CREATE PUBLICATION` | `CREATE PUBLICATION` | 创建逻辑复制发布的 SQL 命令 |
| `CREATE SUBSCRIPTION` | `CREATE SUBSCRIPTION` | 创建逻辑复制订阅的 SQL 命令 |
| `DECLARE` | `DECLARE` | 声明游标的 SQL 命令 |
| `FETCH` | `FETCH` | 从游标读取结果的 SQL 命令 |
| `CLOSE` | `CLOSE` | 关闭游标的 SQL 命令 |
| `CREATE COLLATION` | `CREATE COLLATION` | 创建排序规则的 SQL 命令 |
| `DROP COLLATION` | `DROP COLLATION` | 删除排序规则的 SQL 命令 |
| array function | 数组函数 | 处理数组长度、包含、展开等操作的函数 |
| range operator | 范围操作符 | 判断范围包含、重叠和边界的操作符 |
| full text search | 全文检索 | 按词处理和搜索文本的能力 |
| sequence function | 序列函数 | 读取或调整序列值的函数 |
| network address type | 网络地址类型 | 保存 IP、网段和 MAC 地址的类型 |
| enum type | 枚举类型 | 值只能从固定列表中选择的类型 |
| bit string type | 位串类型 | 保存一串 0 和 1 的类型 |
| XML type | XML 类型 | 保存 XML 文档或片段的类型 |
| geometric type | 几何类型 | 保存点、线、圆、多边形等平面几何对象的类型 |
| object identifier type | 对象标识符类型 | PostgreSQL 内部标识数据库对象的类型 |
| composite type | 复合类型 | 多个字段组成的一个类型 |
| `inet` | `inet` | 保存 IP 地址或带掩码地址的网络地址类型 |
| `cidr` | `cidr` | 保存网络地址块的网络地址类型 |
| `macaddr` | `macaddr` | 保存 MAC 地址的类型 |
| `bit varying` | `bit varying` | 可变长度位串类型 |
| `xml` | `xml` | PostgreSQL 的 XML 类型 |
| `point` | `point` | 平面坐标点类型 |
| `oid` | `oid` | 对象标识符类型 |
| `regclass` | `regclass` | 用来解析表、索引、序列等关系对象名的类型 |
| authentication | 认证 | 判断连接者是谁、能不能进入数据库 |
| authorization | 授权 | 判断进入数据库后能做什么 |
| `statement_timeout` | `statement_timeout` | 限制单条 SQL 最长执行时间的参数 |
| `lock_timeout` | `lock_timeout` | 限制等待锁最长时间的参数 |
| `SET LOCAL` | `SET LOCAL` | 只在当前事务内临时设置参数 |
| trigger function | 触发器函数 | 被触发器自动调用的函数 |
| blocking session | 阻塞会话 | 正在让其他会话等待的会话 |
| conditional function | 条件函数 | 根据空值或比较结果返回不同值的函数 |
| numeric type | 数值类型 | 保存整数、精确小数或近似小数的类型 |
| character type | 字符类型 | 保存文本的类型 |
| datetime type | 日期时间类型 | 保存日期、时间点或持续时间的类型 |
| `jsonb` | JSONB | 更适合查询和索引的 JSON 二进制格式 |
| array type | 数组类型 | 在一个字段里保存多个同类型值的类型 |
| range type | 范围类型 | 保存连续区间的类型 |

## 容易混淆

| 词 | 不要混成 |
| --- | --- |
| 数据库 | 不是整个 PostgreSQL 服务 |
| 模式 | 不是表，也不是权限本身 |
| 角色 | 不只是“登录账号”，也可以承载权限 |
| 索引 | 不是数据副本，也不是越多越好 |
| 视图 | 普通视图保存的是查询定义，不是复制出来的一张表 |
| 连接池 | 不是无限连接，池子太大也会耗尽数据库资源 |
| 复制 | 不是备份，误删也可能同步到从库 |
| VACUUM | 不是手动修复数据，而是清理旧版本和维护状态 |
| 物化视图 | 不是实时表，保存的结果需要刷新 |
| 生成列 | 不是手工维护字段，由数据库按表达式计算 |
| NULL | 不是空字符串，也不是 0 |
| 身份列 | 不保证生成的编号连续 |
| `timestamptz` | 不是“把时区名字原样存进去” |
| 范围类型 | 不是两个普通字段的简单别名，它有自己的边界和操作符 |
| 审计日志 | 不是普通错误日志 |
| TOAST | 不是手工压缩开关，而是数据库内部机制 |
| 安全定义者函数 | 不是绕过权限设计的通用后门 |
| 读写分离 | 不是强一致读取的默认保证 |
| 缓存命中 | 不是 SQL 已经优化好的证明 |
| 双引号标识符 | 不是推荐的日常命名方式 |
| 布尔 `NULL` | 不是 `false` |
| 动态 SQL | 不是字符串随便拼接 |
| 保存点 | 不是事务提交 |
| 复制槽 | 不是备份 |
| 超时 | 不是性能优化的替代品 |
| 排序规则 | 不是字符集 |
| 取消查询 | 不是关闭连接 |
| JSONB | 不是替代所有关系表设计的万能字段 |
| `UNION` | 不是默认保留重复行 |
| 表空间 | 不是备份 |
| `NOTIFY` | 不是可靠消息队列 |
| UPSERT | 不是不需要唯一约束的自动合并 |
| 连接串 | 不是可以随便提交的普通配置 |
| UUID | 不是连续业务编号 |
| `CASE` | 不是复杂业务流程容器 |
| 外连接 | 不是条件随便放都一样 |
| 默认权限 | 不是已有对象授权 |
| 行锁 | 不是表锁 |
| 保存点 | 不是提交 |
| 咨询锁 | 不是数据约束 |
| 事务重试 | 不是只重试最后一条 SQL |
| HOT 更新 | 不是每次更新都会发生 |
| 实例 | 不是单个数据库 |
| 编码 | 不是排序规则 |
| 并行查询 | 不是所有 SQL 的加速开关 |
| 大对象 | 不是外部对象存储 |
| 信息模式 | 不是业务数据表 |
| SQL 关键字 | 不是推荐拿来做列名的普通词 |
| SPI | 不是普通客户端接口 |
| 逻辑解码 | 不是普通查询 |
| `DELETE` | 不是删除表结构 |
| `DROP TABLE` | 不是普通删除数据行 |
| `SET` | 在 `UPDATE` 里不是过滤条件 |
| `ROLLBACK` | 不是撤回已经提交的事务 |
| `GRANT` | 不是创建角色 |
| `EXPLAIN ANALYZE` | 不是只看计划，它会真的执行 SQL |
| `TRUNCATE` | 不是带条件删除 |
| `DROP DATABASE` | 不是删除一张表 |
| `VACUUM` | 不是修复业务数据 |
| `ANALYZE` | 不是执行计划里的 `EXPLAIN ANALYZE` |
| 触发器 | 不是手动调用的普通函数 |
| 物化视图 | 不是自动实时刷新 |
| `PREPARE` | 不是直接执行查询结果 |
| `NOTIFY` | 不是可靠消息队列 |
| `SET` | 不一定永久修改服务器配置 |
| 注释 | 不是约束 |
| 序列 | 不是连续业务流水号保证 |
| 表锁 | 不是行锁 |
| 表空间 | 不是备份 |
| 默认权限 | 不是已有对象授权 |
| 外部表 | 不是本地普通表 |
| 发布订阅 | 不是备份 |
| 游标 | 不是让慢查询自动变快 |
| 排序规则 | 不是字符编码 |
| 数组函数 | 不是关系建模替代品 |
| 全文检索 | 不是完整搜索平台 |
| 序列函数 | 不是无跳号保证 |
| 网络地址类型 | 不是普通文本 |
| 条件函数 | 不是修复脏数据 |
| 数值类型 | 不是都该用 `numeric` |
| 字符类型 | 不是所有数据的万能容器 |
| 日期时间类型 | 不是普通字符串 |
| JSONB | 不是替代所有关系表设计的万能字段 |
| 数组类型 | 不是一对多关系的默认替代品 |

## 练习题

1. `schema` 在本站统一翻译成什么？
2. `commit` 和 `rollback` 分别是什么意思？
3. `index` 为什么不能简单理解成“越多越快”？
4. WAL 和备份是一回事吗？
5. 判断 `NULL` 应该用 `= NULL` 还是 `IS NULL`？

::: tip 提示
遇到术语先看它解决什么问题，再记中文名。
:::

::: details 答案
1. 模式。
2. 提交是确认修改生效，回滚是放弃事务里的修改。
3. 索引会占空间，也会增加写入和更新成本。
4. 不是。WAL 记录变化，备份保存数据快照。
5. `IS NULL`。
:::

## 常见坑

- 把同一个英文词在不同页面翻成多个中文词
- 只记中文名，不理解它解决的问题
- 把容易混淆的概念放在一起背，越背越乱

## 先记住这三句

- 术语先服务理解，不要先背定义。
- 同一个英文词在本站尽量固定一个中文口径。
- 容易混淆的词要回到场景里区分。
