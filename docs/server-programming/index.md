# 服务端编程

这一组内容对应官方的服务端编程章节，主要放函数、触发器、扩展和更贴近数据库内部能力的内容。

## 你学完能干什么

- 知道哪些逻辑可以放在数据库里
- 能区分函数、触发器和扩展
- 知道服务端编程不应该滥用

## 建议阅读顺序

1. [函数与触发器](/server-programming/functions-triggers)
2. [触发器设计](/server-programming/trigger-design)
3. [扩展与过程语言](/server-programming/extensions)
4. [PL/pgSQL 基础](/server-programming/plpgsql)
5. [安全定义者函数](/server-programming/security-definer)
6. [异常处理](/server-programming/exceptions)
7. [动态 SQL](/server-programming/dynamic-sql)
8. [事件触发器](/server-programming/event-triggers)
9. [后台工作进程](/server-programming/background-workers)
10. [规则、通知与事件](/server-programming/rules-notify-events)
11. [外部数据封装器](/server-programming/foreign-data)
12. [自定义类型基础](/server-programming/custom-types)
13. [SPI 接口](/server-programming/spi)
14. [逻辑解码](/server-programming/logical-decoding)

## 练习题

1. 函数适合解决什么问题？
2. 触发器为什么排查起来可能更难？
3. 扩展为什么需要先评估再安装？
4. PL/pgSQL 适合替代整个后端应用吗？
5. 外部表的数据一定在当前库里吗？

::: tip 提示
服务端编程越靠近数据库，越要重视可维护性和排查成本。
:::

::: details 答案
1. 复用靠近数据的明确逻辑。
2. 它会自动执行，应用代码里不一定能直接看见。
3. 扩展会影响能力、安全、升级和运维。
4. 不适合。它适合靠近数据的少量过程逻辑。
5. 不一定，外部表通常访问外部系统里的数据。
:::

## 常见坑

- 把复杂业务全塞进触发器
- 不评估就安装扩展
- 忽略函数权限和执行身份
- 把数据库过程语言当成后端替代品
- 用安全定义者函数绕过正常权限设计
- 捕获异常后不报告真实错误
- 把用户输入直接拼进动态 SQL
- 没测试就用事件触发器限制 DDL
- 触发器逻辑太复杂，应用层看不见
- 把 SPI 当成普通应用连接接口
- 开了逻辑解码却不监控复制槽

## 先记住这三句

- 数据库可以写逻辑，但不要乱藏逻辑。
- 触发器越多，排查越难。
- 扩展是能力增强，也带来维护责任。
