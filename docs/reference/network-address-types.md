# 网络地址类型速查

网络地址类型用来保存 IP 地址、网段和 MAC 地址。它比普通字符串更适合做网络包含、排序和格式校验。

## 你学完能干什么

- 知道 `inet`、`cidr`、`macaddr` 分别适合什么
- 能写出保存 IP 和网段的表结构
- 知道什么时候不要把 IP 当普通文本存

## 可运行例子

```sql
CREATE TABLE access_rules (
  id bigserial PRIMARY KEY,
  source_ip inet NOT NULL,
  allowed_network cidr NOT NULL
);

INSERT INTO access_rules (source_ip, allowed_network)
VALUES ('192.168.1.25', '192.168.1.0/24');

SELECT source_ip, allowed_network, source_ip << allowed_network AS is_inside
FROM access_rules;
```

`<<` 可以判断左侧地址是否严格包含在右侧网段内。

## 常见类型

| 类型 | 适合保存什么 |
| --- | --- |
| `inet` | IPv4 或 IPv6 地址，也可以带掩码 |
| `cidr` | 网络地址块 |
| `macaddr` | MAC 地址 |
| `macaddr8` | EUI-64 格式 MAC 地址 |

## 容易混淆的词

| 词 | 区别 |
| --- | --- |
| `inet` | 更适合单个主机地址，也可以带掩码 |
| `cidr` | 更强调网络地址块 |
| 文本 IP | 只是字符串，数据库不懂网络含义 |
| 网络包含 | 判断一个地址或网段是否落在另一个网段里 |

## 练习题

1. 保存用户登录 IP，优先考虑 `text` 还是 `inet`？
2. `cidr '10.0.0.0/8'` 表示单个地址还是网段？
3. 为什么不要把所有 IP 都存成普通字符串？
4. `macaddr` 适合保存什么？

::: tip 提示
只要后续要判断“这个 IP 是否在某个网段里”，就优先考虑网络地址类型。
:::

::: details 答案
1. `inet`。
2. 网段。
3. 字符串缺少网络格式校验和包含判断能力。
4. MAC 地址。
:::

## 常见坑

- 用 `text` 保存 IP，后续只能写脆弱的字符串判断
- 把 `inet` 和 `cidr` 的语义混在一起
- IPv6 场景只按 IPv4 长度设计字段
- 忘记为高频网络匹配查询设计合适索引

## 先记住这三句

- IP 和网段不要默认当字符串处理。
- `inet` 偏地址，`cidr` 偏网段。
- 网络地址类型能帮你做格式和包含判断。
