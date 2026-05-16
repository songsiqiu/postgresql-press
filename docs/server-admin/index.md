# 服务器管理

这一组内容对应官方管理章节。它主要面向已经开始负责数据库的人。

## 你学完能干什么

- 知道 PostgreSQL 服务从安装到维护的大致流程
- 能区分配置、权限、备份、日志、复制这些管理主题
- 能按问题类型找到对应章节

## 建议阅读顺序

1. [安装与初始化](/server-admin/setup)
2. [数据库管理](/server-admin/database-management)
3. [配置参数](/server-admin/configuration)
4. [JIT 即时编译](/server-admin/jit)
5. [回归测试](/server-admin/regression-tests)
6. [本地化与编码](/server-admin/localization)
7. [认证与访问规则](/server-admin/authentication)
8. [上线前检查清单](/server-admin/production-checklist)
9. [版本升级](/server-admin/upgrades)
10. [权限与安全](/server-admin/security)
11. [密码与认证策略](/server-admin/password-policy)
12. [角色成员关系](/server-admin/role-membership)
13. [默认权限](/server-admin/default-privileges)
14. [SSL/TLS 连接](/server-admin/ssl-tls)
15. [审计与留痕](/server-admin/auditing)
16. [pg_stat_statements](/server-admin/pg-stat-statements)
17. [连接限制](/server-admin/connection-limits)
18. [资源参数](/server-admin/resource-settings)
19. [备份与恢复](/server-admin/backup)
20. [WAL 归档](/server-admin/wal-archiving)
21. [时间点恢复](/server-admin/point-in-time-recovery)
22. [恢复演练](/server-admin/recovery-drills)
23. [日志与排障](/server-admin/logging)
24. [日常维护](/server-admin/maintenance)
25. [autovacuum 调优](/server-admin/autovacuum-tuning)
26. [表空间](/server-admin/tablespaces)
27. [复制与高可用](/server-admin/replication)
28. [复制槽](/server-admin/replication-slots)
29. [逻辑复制基础](/server-admin/logical-replication)
30. [监控与容量](/server-admin/monitoring-capacity)
31. [导入导出与迁移](/server-admin/import-export)

## 会覆盖什么

- 安装与初始化
- 数据库管理
- 备份与恢复
- 时间点恢复
- 权限与安全
- 密码与认证策略
- 角色成员关系
- 默认权限
- SSL/TLS 连接
- 审计与留痕
- pg_stat_statements
- 连接限制
- 资源参数
- WAL 归档
- 恢复演练
- 认证与访问规则
- 上线前检查清单
- 版本升级
- 日志与排障
- 常规维护
- autovacuum 调优
- 表空间
- 配置参数
- JIT 即时编译
- 回归测试
- 本地化与编码
- 复制与高可用
- 复制槽
- 逻辑复制
- 监控与容量
- 导入导出与迁移

## 练习题

1. 刚装好 PostgreSQL，应该先看哪一页？
2. 想知道为什么连接不上，可能先看哪两类内容？
3. 想保证数据库出问题后能恢复，应该重点看哪一页？
4. 想看磁盘和连接数趋势，应该看哪一页？
5. 能连上但不能查表，是认证问题还是授权问题？

::: tip 提示
服务器管理先按问题分类：装不起来、连不上、没权限、数据要恢复、运行变慢。
:::

::: details 答案
1. 安装与初始化。
2. 配置参数、权限与安全。
3. 备份与恢复。
4. 监控与容量。
5. 更可能是授权或对象权限问题。
:::

## 常见坑

- 只会写 SQL，不知道数据库服务怎么运行
- 只做备份，不做恢复演练
- 遇到问题不看日志和配置，先乱改 SQL
- 以为加密连接可以替代权限控制
- 事故后才发现关键操作没有留痕
- 连接打满后只调大上限，不查连接来源
- 直接照抄别人的资源参数配置
- 权限直接散给个人，不用角色组管理
- 复制槽长期不活跃导致 WAL 积压
- 觉得 autovacuum 占资源就直接关闭
- 只做基础备份，不保存 WAL 归档
- 把表空间当成备份方案
- 应用直接用超级用户连接数据库
- WAL 归档失败没人发现
- 新表创建后忘记默认权限
- 没有提前启用 SQL 统计扩展
- 没分清实例、数据库、模式和表
- 迁移前没确认编码、排序规则和时区

## 先记住这三句

- 管理数据库要先知道问题属于哪一类。
- 备份、安全、日志不是上线后才想的事。
- 高可用不能替代备份。
