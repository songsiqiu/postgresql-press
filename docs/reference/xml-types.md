# XML 类型速查

XML 类型用于保存 XML 文档或片段。现在很多业务更常用 JSON，但遇到老系统、报文或标准协议时，XML 仍然会出现。

## 你学完能干什么

- 知道 `xml` 类型和普通文本不同
- 能保存一个简单 XML 片段
- 知道 XML 更适合哪些集成场景

## 可运行例子

```sql
CREATE TABLE inbound_messages (
  id bigserial PRIMARY KEY,
  payload xml NOT NULL
);

INSERT INTO inbound_messages (payload)
VALUES (XMLPARSE(DOCUMENT '<order><id>1001</id></order>'));

SELECT payload
FROM inbound_messages;
```

`XMLPARSE` 会把文本解析成 XML 值。

## 容易混淆的词

| 词 | 区别 |
| --- | --- |
| `xml` | PostgreSQL 的 XML 类型 |
| `text` | 普通文本，数据库不理解 XML 结构 |
| XML 文档 | 有完整根节点的 XML |
| XML 片段 | 不一定是完整文档的一段 XML |
| JSONB | 更常见的半结构化数据类型 |

## 练习题

1. `xml` 类型适合保存 XML 报文吗？
2. XML 和普通 `text` 是一回事吗？
3. 现代接口里更常见的是 XML 还是 JSON？
4. 保存外部标准 XML 报文时，是否可以考虑 `xml` 类型？

::: tip 提示
如果只是原样留存报文，先确认后续是否需要在数据库内查询 XML 内容。
:::

::: details 答案
1. 适合。
2. 不是。
3. 很多新系统更常见 JSON，但 XML 在老系统和标准协议里仍常见。
4. 可以。
:::

## 常见坑

- 新项目默认把所有半结构化数据都做成 XML
- 只想原样留存，却在数据库里做复杂 XML 解析
- 没区分 XML 文档和 XML 片段
- 忽略外部报文版本变化

## 先记住这三句

- XML 类型适合真的 XML 数据。
- 新业务半结构化数据通常先考虑 JSONB。
- 接老系统和标准报文时，XML 仍然有用。
