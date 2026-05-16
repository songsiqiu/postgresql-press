# UPSERT

UPSERT 指“能插入就插入，冲突时改为更新”。在 PostgreSQL 里通常用 `INSERT ... ON CONFLICT` 实现。

## 你学完能干什么

- 能理解 UPSERT 解决什么问题
- 能写出 `ON CONFLICT DO NOTHING`
- 能写出 `ON CONFLICT DO UPDATE`
- 知道冲突目标通常依赖唯一约束或唯一索引

## 忽略冲突

```sql
INSERT INTO users (email, name)
VALUES ('alice@example.com', 'Alice')
ON CONFLICT (email) DO NOTHING;
```

如果 `email` 已经存在，这条语句不会插入新行，也不会报唯一冲突。

## 冲突时更新

```sql
INSERT INTO users (email, name)
VALUES ('alice@example.com', 'Alice New')
ON CONFLICT (email)
DO UPDATE SET name = EXCLUDED.name;
```

`EXCLUDED` 表示这次原本准备插入的新值。

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| UPSERT | 插入或冲突时更新 |
| 冲突目标 | 用来判断冲突的列或约束 |
| `DO NOTHING` | 冲突时什么都不做 |
| `DO UPDATE` | 冲突时更新已有行 |
| `EXCLUDED` | 原本要插入的新行 |

## 练习题

1. UPSERT 主要解决什么问题？
2. 冲突时忽略，可以用 `DO NOTHING` 还是 `DO UPDATE`？
3. `EXCLUDED.name` 表示已有行的旧值还是新插入值？
4. 冲突目标通常需要什么支持？

::: tip 提示
UPSERT 的关键是先想清楚“什么算冲突”。
:::

::: details 答案
1. 插入时如果遇到唯一冲突，可以改成忽略或更新。
2. `DO NOTHING`。
3. 新插入值。
4. 唯一约束或唯一索引。
:::

## 常见坑

- 没有唯一约束就想让数据库判断冲突
- `DO UPDATE` 更新了不该改的字段
- 误以为 `DO NOTHING` 会告诉你已经存在的行
- 不理解 `EXCLUDED` 代表新值

## 先记住这三句

- UPSERT 是插入和冲突处理的组合。
- 冲突目标要靠唯一规则支撑。
- `EXCLUDED` 是这次准备插入的新行。
