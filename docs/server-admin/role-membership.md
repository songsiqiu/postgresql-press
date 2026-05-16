# 角色成员关系

PostgreSQL 的角色不只是登录账号，也可以像权限组一样使用。角色成员关系能让权限管理更清楚。

## 你学完能干什么

- 能理解用户角色和权限组角色的区别
- 能用角色成员关系分配权限
- 知道 `GRANT role TO user` 的含义
- 能避免把权限直接散落到每个用户身上

## 一个常见做法

先创建一个权限组角色：

```sql
CREATE ROLE readonly;

GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly;
```

再把用户加入这个角色：

```sql
GRANT readonly TO alice;
```

这样 `alice` 就可以通过 `readonly` 获得对应权限。

## 为什么有用

- 新用户加入时更容易授权
- 离职或变更权限时更容易回收
- 权限口径更统一
- 不用给每个用户重复写同样授权

## 操作步骤：查看角色成员关系

```sql
SELECT r.rolname AS role_name, m.rolname AS member_name
FROM pg_auth_members am
JOIN pg_roles r ON r.oid = am.roleid
JOIN pg_roles m ON m.oid = am.member
ORDER BY r.rolname, m.rolname;
```

回收成员关系：

```sql
REVOKE readonly FROM alice;
```

回收用户权限时，不只看直接授权，还要看它通过哪些角色组继承了权限。

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| 登录角色 | 可以登录数据库的角色 |
| 权限组角色 | 用来承载一组权限的角色 |
| 成员关系 | 一个角色属于另一个角色 |
| 授权 | 给角色某种权限或成员关系 |

## 练习题

1. `GRANT readonly TO alice` 表示什么？
2. 权限组角色一定要能登录吗？
3. 为什么不要把权限都直接授给每个用户？
4. 回收成员关系通常用哪个命令？

::: tip 提示
把角色想成“用户”和“权限组”两种用途，会更容易理解。
:::

::: details 答案
1. 让 `alice` 成为 `readonly` 的成员。
2. 不一定。
3. 用户多时难维护，也容易前后不一致。
4. `REVOKE`。
:::

## 常见坑

- 把角色只理解成登录账号
- 权限直接散给个人，后续很难统一调整
- 不清楚谁继承了哪些角色
- 回收用户权限时忘记检查成员关系
- 删除用户前没有先梳理它属于哪些角色组

## 先记住这三句

- 角色也可以当权限组用。
- 权限先给组，再把用户加入组。
- 成员关系也需要定期检查。
