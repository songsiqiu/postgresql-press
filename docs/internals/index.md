# 内部原理

这一组内容对应官方的内部章节，主要解释 PostgreSQL 为什么会这样工作。

## 你学完能干什么

- 知道一条 SQL 大致怎么被执行
- 能理解 MVCC、锁和执行计划背后的基本关系
- 知道什么时候该深入内部原理

## 建议阅读顺序

1. [查询是怎么执行的](/internals/query-lifecycle)
2. [存储与并发](/internals/storage-mvcc)
3. [WAL 与恢复](/internals/wal-recovery)
4. [VACUUM 与统计信息](/internals/vacuum-statistics)
5. [锁与等待](/internals/locks-waits)
6. [规划器与代价](/internals/planner-costs)
7. [检查点与后台写入](/internals/checkpoints-bgwriter)
8. [索引访问方法](/internals/index-access-methods)
9. [缓冲区与缓存](/internals/buffer-cache)
10. [后台进程](/internals/background-processes)
11. [前后端协议](/internals/protocol)
12. [物理存储](/internals/physical-storage)
13. [事务处理](/internals/transaction-processing)
14. [TOAST 存储](/internals/toast)
15. [表膨胀](/internals/table-bloat)
16. [HOT 更新](/internals/hot-updates)

## 练习题

1. SQL 执行前为什么要生成执行计划？
2. MVCC 主要解决什么问题？
3. 为什么内部原理适合在有具体问题时再深入？
4. WAL 和备份是什么关系？
5. cost 是实际耗时吗？

::: tip 提示
内部原理不是新手第一站，但它能解释很多“为什么”。
:::

::: details 答案
1. 数据库要选择一种相对合适的执行方式。
2. 让读写尽量少互相阻塞，同时保证事务可见性。
3. 没有问题背景时容易陷进细节，学了也不知道怎么用。
4. 备份保存数据快照，WAL 记录后续变化，二者一起支撑恢复设计。
5. 不是，它是规划器的估算单位。
:::

## 常见坑

- 还没会写 SQL 就先钻底层
- 把 MVCC、锁、事务隔离混成一个概念
- 不看执行计划就猜数据库怎么查
- 以为 WAL 或高可用可以替代备份
- 把 cost 当成真实毫秒数
- 把 WAL 写入和数据页写入混成一件事
- 不看查询方式就盲目选择索引类型
- 只看一次查询时间，不考虑缓存命中
- 只看前台 SQL，不看后台进程活动
- 以为大字段查询没有额外成本
- 看到 VACUUM 后文件没变小就以为清理没用
- 给频繁更新字段建索引前不考虑写入成本

## 先记住这三句

- 内部原理用来解释现象。
- 执行计划是查询性能的入口。
- MVCC 是理解并发的重要基础。
