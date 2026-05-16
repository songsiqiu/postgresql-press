# 权限与安全

这一页会整理角色、授权、访问控制和常见安全注意点。

## 你学完能干什么

- 能区分角色、权限和连接控制
- 知道最小权限原则是什么意思
- 能看懂基础授权语句

## 角色和权限

角色是 PostgreSQL 里的身份。权限决定这个身份能对哪些对象做什么。

```sql
CREATE ROLE app_user LOGIN PASSWORD 'change_me';
GRANT SELECT, INSERT, UPDATE ON notes TO app_user;
```

这表示创建一个可以登录的角色，并允许它对 `notes` 表查询、插入和更新。

## 最小权限原则

应用只应该拿到完成工作需要的权限。只读应用不要给写权限，普通业务账号不要给超级用户权限。

## 安全检查清单

- 应用是否使用独立数据库角色
- 是否避免使用超级用户跑业务应用
- 密码是否放在安全配置里
- 对外连接是否有限制
- 权限是否按表、模式、操作拆清楚

## 操作步骤：创建只读角色

```sql
CREATE ROLE app_readonly LOGIN PASSWORD 'change_me';

GRANT USAGE ON SCHEMA public TO app_readonly;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO app_readonly;

ALTER DEFAULT PRIVILEGES IN SCHEMA public
GRANT SELECT ON TABLES TO app_readonly;
```

前两条授权影响已有对象，`ALTER DEFAULT PRIVILEGES` 影响未来新建对象。它们不是一回事。

## 排障场景：有权限但仍不能查

先确认当前连接身份：

```sql
SELECT current_user;
```

再确认表权限：

```sql
SELECT has_table_privilege(current_user, 'public.notes', 'SELECT');
```

如果表权限是 `true`，但仍报错，还要继续检查模式 `USAGE` 权限、视图依赖的底层表权限，以及是否连错数据库。

## 练习题

1. `LOGIN` 表示什么？
2. 只读报表账号应该给 `UPDATE` 权限吗？
3. 为什么业务应用不应该使用超级用户？

::: tip 提示
先问“这个角色需要做什么”，再给对应权限。
:::

::: details 答案
1. 这个角色可以登录连接数据库。
2. 不应该。
3. 权限过大，一旦应用出错或泄露，影响范围太大。
:::

## 常见坑

- 所有应用共用一个数据库账号
- 为了省事直接给超级用户
- 只管能不能连上，不管连上后能做什么
- 只给了表权限，却忘了模式 `USAGE` 权限

## 先记住这三句

- 角色是身份，权限是能力。
- 业务账号不要用超级用户。
- 权限够用就好，不要贪大。
