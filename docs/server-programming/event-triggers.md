# 事件触发器

事件触发器会在数据库级别的事件发生时执行，比如某些 DDL 操作。它比普通表触发器更偏管理和审计，不能随便滥用。

## 你学完能干什么

- 能区分事件触发器和普通触发器
- 知道事件触发器常用于 DDL 审计或限制
- 能理解它影响范围更大
- 知道上线前必须谨慎测试

## 普通触发器和事件触发器

| 类型 | 触发时机 |
| --- | --- |
| 普通触发器 | 表数据 `INSERT`、`UPDATE`、`DELETE` 时 |
| 事件触发器 | 数据库事件发生时，比如 DDL |

普通触发器关注表数据变化，事件触发器更关注数据库结构和管理事件。

## 常见用途

- 记录谁执行了 DDL
- 阻止某些高风险结构变更
- 配合发布流程检查对象变更
- 做数据库级别审计补充

## 可照着跑：记录 DDL 发生过

```sql
CREATE TABLE ddl_audit_log (
  id bigserial PRIMARY KEY,
  happened_at timestamptz NOT NULL DEFAULT now(),
  tag text NOT NULL
);

CREATE OR REPLACE FUNCTION log_ddl_event()
RETURNS event_trigger
LANGUAGE plpgsql
AS $$
BEGIN
  INSERT INTO ddl_audit_log(tag)
  VALUES (tg_tag);
END;
$$;

CREATE EVENT TRIGGER audit_ddl
ON ddl_command_end
EXECUTE FUNCTION log_ddl_event();
```

这个例子只记录事件标签。真实审计要更谨慎，避免影响正常迁移发布。

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| DDL | 建表、改表、删对象这类结构操作 |
| 普通触发器 | 跟某张表的数据变化相关 |
| 事件触发器 | 跟数据库级事件相关 |
| 审计 | 记录关键操作，方便追溯 |

## 练习题

1. 事件触发器主要关注数据行变化还是数据库事件？
2. 普通触发器通常绑定在什么对象上？
3. 事件触发器适合随便写复杂业务吗？
4. 记录 DDL 操作属于事件触发器的常见用途吗？

::: tip 提示
事件触发器影响范围更大，先把审计和限制场景想清楚。
:::

::: details 答案
1. 数据库事件。
2. 表。
3. 不适合。
4. 属于。
:::

## 常见坑

- 把事件触发器当普通业务逻辑入口
- 没测试就限制 DDL，影响迁移发布
- 触发器逻辑太复杂，排查困难
- 忽略事件触发器自身的权限和维护成本
- 事件触发器失败导致 DDL 发布被阻断

## 先记住这三句

- 事件触发器关注数据库事件。
- 它比普通触发器影响范围更大。
- 常见用途是审计和限制 DDL。
