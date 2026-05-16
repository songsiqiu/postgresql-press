# 表空间

表空间让数据库对象可以放到不同的文件系统位置。它常用于存储规划，而不是日常新手必须先学的功能。

## 你学完能干什么

- 知道表空间解决的是存储位置问题
- 能理解表、索引可以放到指定表空间
- 知道表空间不等于备份或分区
- 能避免为了“显得高级”滥用表空间

## 最小例子

```sql
CREATE TABLESPACE fast_space
LOCATION '/data/postgresql/fast';
```

创建表时指定表空间：

```sql
CREATE TABLE hot_events (
  id bigserial PRIMARY KEY,
  payload jsonb
) TABLESPACE fast_space;
```

索引也可以放到指定表空间。

## 适合场景

- 不同磁盘承担不同负载
- 大对象或大索引需要单独规划
- 迁移历史数据到较慢但容量大的存储
- 管理存储配额和目录结构

## 操作步骤：查看对象所在表空间

```sql
SELECT schemaname, tablename, tablespace
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY tablename;
```

查看表空间位置：

```sql
SELECT spcname, pg_tablespace_location(oid) AS location
FROM pg_tablespace;
```

迁移或备份前，要确认目标环境也有对应路径和权限。

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| 表空间 | 数据库对象的存储位置 |
| 数据目录 | PostgreSQL 实例的主数据目录 |
| 分区 | 按规则把表拆成多个部分 |
| 备份 | 用来恢复数据的副本 |

## 练习题

1. 表空间主要解决什么问题？
2. 表空间等于备份吗？
3. 索引能不能指定表空间？
4. 新手是否应该一开始就大量使用表空间？

::: tip 提示
表空间先从存储规划理解，不要和分区、备份混在一起。
:::

::: details 答案
1. 数据库对象放在哪里。
2. 不等于。
3. 能。
4. 不应该。
:::

## 常见坑

- 把表空间当成备份方案
- 没规划磁盘和权限就创建表空间
- 滥用表空间导致运维复杂
- 忘记备份和迁移时要处理表空间位置
- 目标环境没有相同路径，恢复时才发现表空间不可用

## 先记住这三句

- 表空间控制存储位置。
- 它不是备份，也不是分区。
- 没有明确存储规划就别乱用。
