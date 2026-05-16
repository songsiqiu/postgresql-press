# 外部数据封装器

外部数据封装器让 PostgreSQL 能访问数据库外部的数据源。新手可以先把它理解成“把外部数据包装成像表一样查询”。

## 你学完能干什么

- 知道外部数据封装器解决什么问题
- 能理解外部表和普通表的区别
- 知道它适合查询整合，不适合替代所有同步方案
- 能意识到权限和性能风险

## 它大概做什么

外部数据封装器通常会配合外部服务器和外部表使用：

```sql
CREATE EXTENSION postgres_fdw;
```

这个例子只说明能力入口。真实使用还要配置外部服务器、用户映射和外部表。

## 可照着跑：postgres_fdw 的骨架

```sql
CREATE EXTENSION IF NOT EXISTS postgres_fdw;

CREATE SERVER reporting_db
FOREIGN DATA WRAPPER postgres_fdw
OPTIONS (host 'reporting.example.com', dbname 'analytics', port '5432');

CREATE USER MAPPING FOR app_user
SERVER reporting_db
OPTIONS (user 'readonly_user', password 'change_me');

CREATE FOREIGN TABLE foreign_orders (
  id bigint,
  total_amount numeric
)
SERVER reporting_db
OPTIONS (schema_name 'public', table_name 'orders');
```

这只是结构示例。真实项目里密码应放在安全位置，并评估外部库压力。

## 外部表和普通表

| 类型 | 数据在哪里 |
| --- | --- |
| 普通表 | 当前 PostgreSQL 数据库里 |
| 外部表 | 外部系统里，PostgreSQL 通过封装器访问 |

## 适合什么

- 临时查询外部数据库
- 分阶段迁移数据
- 做跨库数据核对
- 少量低频的数据整合

## 练习题

1. 外部数据封装器让 PostgreSQL 访问哪里？
2. 外部表的数据一定存当前库里吗？
3. 为什么不能把它当成所有同步需求的替代品？
4. 使用外部数据时为什么要关注权限？

::: tip 提示
外部数据封装器适合连接和查询，不等于把外部系统变成了本地表。
:::

::: details 答案
1. 数据库外部的数据源。
2. 不一定，数据通常在外部系统里。
3. 性能、事务、网络、权限和一致性都更复杂。
4. 它涉及当前库和外部系统两边的访问边界。
:::

## 常见坑

- 把外部表当成本地普通表随便高频查询
- 忽略网络延迟和外部系统压力
- 用户映射和权限设计不清楚
- 外部库不可用时，没有给应用准备降级方案

## 先记住这三句

- 外部表看起来像表，数据不一定在本库。
- 跨系统查询要重视性能和权限。
- 外部数据封装器不是万能同步工具。
