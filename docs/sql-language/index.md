# SQL 语言

这一组内容对应官方 SQL Language 主线。它比新手路线更完整，但仍然按“先能读懂，再逐步深入”的方式组织。

## 你学完能干什么

- 看懂一条 SQL 的执行意图
- 写出常见查询、插入、更新和删除
- 知道表结构、约束、索引和视图分别解决什么问题
- 理解事务为什么会影响数据正确性

## 建议顺序

1. [查询数据](/sql-language/query)
2. [数据定义](/sql-language/ddl)
3. [数据修改](/sql-language/dml)
4. [约束与关系](/sql-language/constraints)
5. [视图与事务](/sql-language/views-transactions)
6. [索引基础](/sql-language/indexes)
7. [JSON 与全文检索](/sql-language/json-full-text)
8. [模式与命名空间](/sql-language/schemas)
9. [分区表基础](/sql-language/partitioning)
10. [CTE 与子查询](/sql-language/cte-subqueries)
11. [窗口函数基础](/sql-language/window-functions)
12. [事务隔离级别](/sql-language/isolation)
13. [EXPLAIN 读法](/sql-language/explain)
14. [行级安全策略](/sql-language/row-level-security)
15. [数组与枚举](/sql-language/arrays-enums)
16. [生成列与表达式](/sql-language/generated-columns)
17. [物化视图](/sql-language/materialized-views)
18. [NULL 与三值逻辑](/sql-language/nulls)
19. [序列与身份列](/sql-language/sequences-identity)
20. [日期与时间](/sql-language/datetime)
21. [范围类型](/sql-language/range-types)
22. [聚合进阶](/sql-language/aggregates)
23. [标识符与命名](/sql-language/identifiers)
24. [布尔类型](/sql-language/boolean)
25. [表达式基础](/sql-language/expressions)
26. [保存点](/sql-language/savepoints)
27. [排序规则](/sql-language/collation)
28. [类型转换](/sql-language/type-conversion)
29. [集合操作](/sql-language/set-operations)
30. [域类型](/sql-language/domains)
31. [UPSERT](/sql-language/upsert)
32. [LATERAL 关联](/sql-language/lateral)
33. [条件表达式](/sql-language/conditional-expressions)
34. [外连接](/sql-language/joins-outer)
35. [行锁子句](/sql-language/locking-clauses)
36. [分组统计扩展](/sql-language/grouping-sets)
37. [咨询锁](/sql-language/advisory-locks)
38. [并行查询](/sql-language/parallel-query)
39. [大对象](/sql-language/large-objects)

## 一句话记法

SQL 不是“数据库命令大全”，而是一套描述数据结构、读写数据和维护数据正确性的语言。

## 练习题

1. 新手学习 SQL 语言，应该先读查询、数据定义，还是事务隔离？
2. 修改或删除数据前，为什么建议先用同样条件查询？
3. 想理解为什么 SQL 变慢，应该优先看哪两个章节？
4. 如果要让某个字段不能重复，应该重点看哪一类内容？

::: tip 提示
先按“查询、建表、改数据、约束、事务、索引”的顺序走，不要一上来跳到复杂主题。
:::

::: details 答案
1. 先读查询数据。
2. 先确认条件会命中哪些行，避免误改或误删。
3. 索引基础和 EXPLAIN 读法。
4. 约束与关系，尤其是唯一约束。
:::

## 常见坑

- 只背语法，不知道 SQL 在解决什么问题
- 跳过查询，直接学复杂索引和 JSON
- 修改数据前不先查询验证范围
- 没分清数据库、模式和表
- 数据量不大就过早使用分区
- 把复杂 SQL 一直嵌套，不给中间步骤命名
- 把窗口函数和普通聚合混在一起
- 遇到并发问题就直接调最高隔离级别
- 对会修改数据的 SQL 直接使用 `EXPLAIN ANALYZE`
- 把行级安全策略当成应用权限系统的完全替代品
- 用数组逃避本该拆表的一对多关系
- 以为物化视图会自动实时更新
- 用 `= NULL` 判断空值
- 把自增主键当成连续业务编号
- 把时间保存成字符串
- 没看清范围边界就判断是否重叠
- 把 `count(*)` 和 `count(column)` 当成完全一样
- 滥用双引号标识符，让命名变难维护
- 把 `NULL` 当成 `false`
- 把复杂表达式重复写很多遍
- 把保存点当成真正提交
- 以为文本排序只按字符编码
- 长期依赖隐式类型转换
- 以为 `UNION` 会保留重复行
- 把复杂业务规则塞进域类型
- 没有唯一约束就想让 UPSERT 判断冲突
- 简单 JOIN 也强行写成 `LATERAL`
- 把大量业务流程塞进 `CASE`
- 把 `LEFT JOIN` 的右表条件写错位置
- 锁住行后让事务长时间不提交
- 汇总报表没有标清楚小计和合计
- 用咨询锁替代唯一约束或外键约束
- 把并行查询当成所有 SQL 的加速开关
- 不考虑备份恢复成本就把大文件塞进数据库

## 先记住这三句

- 先会查，再会改。
- 表结构、约束和索引共同保护数据。
- SQL 学习要靠动手改条件。
