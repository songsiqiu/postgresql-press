# CREATE TYPE 与 CREATE DOMAIN 速查

`CREATE TYPE` 用来创建自定义类型，`CREATE DOMAIN` 用来在已有类型上加规则。它们能提高表达力，也会增加维护成本。

## 你学完能干什么

- 能区分自定义类型和域类型
- 知道枚举类型适合什么场景
- 理解域类型是在基础类型上加约束
- 能避免把复杂业务规则塞进类型

## 创建枚举类型

```sql
CREATE TYPE order_status AS ENUM ('pending', 'paid', 'cancelled');
```

表里使用：

```sql
CREATE TABLE orders (
  id bigserial PRIMARY KEY,
  status order_status NOT NULL
);
```

## 创建域类型

```sql
CREATE DOMAIN positive_amount AS numeric
CHECK (VALUE > 0);
```

这个域类型表示必须大于 0 的数值。

## 容易混淆的词

| 词 | 新手解释 |
| --- | --- |
| 自定义类型 | 用户定义的新类型 |
| 枚举类型 | 值只能从固定列表里选 |
| 域类型 | 基础类型加约束形成的新类型 |
| `VALUE` | 域类型约束里代表当前值 |

## 练习题

1. `CREATE DOMAIN` 是创建表还是创建类型规则？
2. 枚举类型适合频繁变化的值列表吗？
3. 域类型可以基于 `numeric` 创建吗？
4. 复杂业务流程适合塞进域类型吗？

::: tip 提示
类型适合稳定规则，不适合承载经常变化的业务流程。
:::

::: details 答案
1. 创建类型规则。
2. 不太适合，频繁变化会增加维护成本。
3. 可以。
4. 不适合。
:::

## 常见坑

- 把频繁变化的状态做成枚举
- 用域类型承载复杂业务判断
- 修改自定义类型前不评估依赖表
- 不清楚类型删除会影响哪些对象

## 先记住这三句

- 自定义类型表达稳定概念。
- 域类型是在基础类型上加规则。
- 类型越底层，修改越要谨慎。
