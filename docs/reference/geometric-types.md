# 几何类型速查

几何类型用来保存点、线、圆、多边形等平面几何对象。它们适合简单几何计算，但不是完整 GIS 能力的替代品。

## 你学完能干什么

- 知道 PostgreSQL 内置了几何类型
- 能保存一个点和一个矩形
- 知道几何类型和 PostGIS 的边界

## 可运行例子

```sql
CREATE TABLE map_marks (
  id bigserial PRIMARY KEY,
  name text NOT NULL,
  position point NOT NULL,
  area box
);

INSERT INTO map_marks (name, position, area)
VALUES ('warehouse', point(10, 20), box(point(0, 0), point(30, 30)));

SELECT name, position
FROM map_marks
WHERE position <@ area;
```

这个例子表达的是：点是否落在矩形区域里。

## 常见类型

| 类型 | 说明 |
| --- | --- |
| `point` | 点 |
| `line` | 无限直线 |
| `lseg` | 线段 |
| `box` | 矩形 |
| `path` | 路径 |
| `polygon` | 多边形 |
| `circle` | 圆 |

## 容易混淆的词

| 词 | 区别 |
| --- | --- |
| 几何类型 | PostgreSQL 内置的平面几何类型 |
| PostGIS | 更完整的地理信息扩展 |
| `point` | 平面坐标点 |
| 经纬度 | 地球坐标，不等于普通平面点 |

## 练习题

1. `point` 可以保存一个平面坐标吗？
2. 复杂地图和地理距离计算通常更适合内置几何类型还是 PostGIS？
3. `box` 可以表示矩形区域吗？
4. 经纬度可以不经思考直接当普通平面点计算距离吗？

::: tip 提示
简单平面几何可以看内置类型；真实地图、投影、距离和空间索引优先了解 PostGIS。
:::

::: details 答案
1. 可以。
2. PostGIS。
3. 可以。
4. 不应该。
:::

## 常见坑

- 把内置几何类型当成完整 GIS
- 用平面距离直接处理地球经纬度
- 只存坐标，不记录坐标系口径
- 空间查询变复杂后仍不评估 PostGIS

## 先记住这三句

- PostgreSQL 有内置平面几何类型。
- 真实地理信息系统通常看 PostGIS。
- 经纬度不是普通平面坐标那么简单。
