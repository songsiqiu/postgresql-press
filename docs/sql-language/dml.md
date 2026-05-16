# 数据修改

数据修改主要是插入、更新和删除。

```sql
INSERT INTO demo_tags (name) VALUES ('database');
UPDATE demo_tags SET name = 'postgresql' WHERE id = 1;
DELETE FROM demo_tags WHERE id = 1;
```

学习时先看清条件，再执行修改或删除。

