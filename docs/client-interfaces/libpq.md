# libpq：C 语言连接库

`libpq` 是 PostgreSQL 官方提供的 C 语言客户端库。很多驱动、工具或底层集成都会直接或间接用到它。

## 你学完能干什么

- 知道 `libpq` 在客户端接口里负责什么
- 能看懂连接、执行 SQL、读取结果这条基本链路
- 知道什么时候需要直接学习 `libpq`

## 可运行例子

新手先不用写 C 程序，可以把 `libpq` 理解成驱动做的三件事：

```text
连接数据库 -> 发送 SQL -> 读取结果或错误
```

如果你用的是 Node.js、Java、Go、Python，大多数时候会用对应语言的驱动。只有在写 C 程序、数据库扩展工具、底层迁移工具时，才更可能直接接触 `libpq`。

## 应用里怎么写

下面是 `libpq` 程序的典型流程，重点看顺序，不需要先背函数：

```c
PGconn *conn = PQconnectdb("host=localhost dbname=app_db user=app_user");

if (PQstatus(conn) != CONNECTION_OK) {
  /* 记录 PQerrorMessage(conn)，然后关闭连接 */
  PQfinish(conn);
  return 1;
}

PGresult *res = PQexecParams(
  conn,
  "SELECT id, email FROM demo_users WHERE email = $1",
  1,
  NULL,
  values,
  NULL,
  NULL,
  0
);

PQclear(res);
PQfinish(conn);
```

真实代码要检查 `PGresult` 状态，并确保 `PQclear` 和 `PQfinish` 被调用。

## 容易混淆的词

| 词 | 区别 |
| --- | --- |
| `libpq` | PostgreSQL 官方 C 客户端库 |
| 驱动 | 某种语言连接数据库的库，可能封装了底层协议或 `libpq` |
| 连接串 | 告诉客户端库连到哪里、用谁连接 |
| 结果集 | SQL 执行后返回的数据和状态 |

## 练习题

1. `libpq` 主要面向哪种语言？
2. 客户端连接数据库的基本链路是什么？
3. 普通 Web 应用一定要直接使用 `libpq` 吗？

::: tip 提示
先把 `libpq` 放在“驱动底层能力”这一层理解，不要一上来背所有函数名。
:::

::: details 答案
1. C 语言。
2. 连接数据库、发送 SQL、读取结果或错误。
3. 不一定。普通应用通常使用本语言生态里的数据库驱动。
:::

## 常见坑

- 把 `libpq` 当成所有语言都必须直接调用的库
- 只关注连接成功，忽略错误状态和结果释放
- 把连接串里的密码写进代码仓库
- 查询结果没有释放，长时间运行的程序内存上涨

## 先记住这三句

- `libpq` 是官方 C 客户端库。
- 普通业务应用通常通过语言驱动间接连接 PostgreSQL。
- 连接、执行、读取结果，是客户端接口的主线。
