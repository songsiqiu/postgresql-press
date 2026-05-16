# 数据定义

DDL 主要处理表、模式、索引、约束这些结构问题。

```sql
CREATE TABLE demo_tags (
  id bigserial PRIMARY KEY,
  name text NOT NULL UNIQUE
);
```

结构类语句会影响后续整个表的使用方式，所以通常要比查询更谨慎。

