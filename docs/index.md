---
layout: home

hero:
  name: PostgreSQL Press
  text: PostgreSQL 官方文档的新手友好中文改造版
  tagline: 参考官方 18.4 文档，保留主线结构，重新组织成更适合入门者阅读的学习站
  actions:
    - theme: brand
      text: 按新手路线学习
      link: /guide/
    - theme: alt
      text: 查看官方目录映射
      link: /reference/
features:
  - title: 先按学习顺序读
    details: 不照搬官方章节顺序压给新手，而是先给出能跑通日常开发的路线。
  - title: 再回到官方主线
    details: 每个中文模块都能映射到官方文档主题，方便继续补全和校对。
  - title: 不是逐字搬运
    details: 保留事实准确性，同时补上背景、场景和常见误区说明。
---

## 这个站点要做什么

目标是参考 [PostgreSQL 官方文档](https://www.postgresql.org/docs/) 当前版本，把完整内容翻译、重组并改造成一个中文学习站。

它不是只做一个“术语翻译版”。每个主题会同时保留三层信息：

- 官方主题：对应官方文档里的哪一类内容
- 新手解释：先用日常开发能理解的话讲清楚
- 深入入口：再回到完整参考、管理、编程和内部原理

## 推荐阅读顺序

1. [新手路线](/guide/)：先弄懂数据库、SQL、事务和索引
2. [官方教程中文改造](/tutorial/)：把官方 Tutorial 改成能跟着操作的版本
3. [SQL 语言](/sql-language/)：系统学习查询、建表、约束和数据修改
4. [服务器管理](/server-admin/)：再学安装、配置、备份、权限和安全
5. [客户端接口](/client-interfaces/)：理解应用怎么连接、传参、分页和重试
6. [服务端编程](/server-programming/)：了解函数、触发器、扩展和后台能力
7. [内部原理](/internals/)：用来解释查询、事务、WAL 和存储现象
8. [官方目录映射](/reference/)：查看完整翻译计划和章节归属

## 当前版本口径

本项目参考 PostgreSQL 官方 current 文档。当前官方 current 页面指向 PostgreSQL 18.4。

完整翻译会按章节持续推进。当前站点已补入 SQL 语言、服务器管理、客户端接口、服务端编程、内部原理、参考手册、术语表和示例规范等入口，后续继续按官方目录扩展细节。
