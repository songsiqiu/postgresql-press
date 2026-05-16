import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'PostgreSQL Press',
  description: '参考 PostgreSQL 官方文档改造的新手友好中文站',
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    siteTitle: 'PostgreSQL Press',
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '新手路线', link: '/guide/' },
      { text: '官方目录', link: '/reference/' },
      { text: '翻译计划', link: '/project/translation-plan' },
      { text: '官方文档', link: 'https://www.postgresql.org/docs/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '先学会用',
          items: [
            { text: '学习路线', link: '/guide/' },
            { text: '基础入门', link: '/guide/getting-started' },
            { text: 'SQL 核心', link: '/guide/sql' },
            { text: '事务与并发', link: '/guide/transaction' },
            { text: '索引与性能', link: '/guide/performance' }
          ]
        }
      ],
      '/tutorial/': [
        {
          text: '官方教程中文改造',
          items: [
            { text: '总览', link: '/tutorial/' },
            { text: '从安装到第一条 SQL', link: '/tutorial/first-query' }
          ]
        }
      ],
      '/sql-language/': [
        {
          text: 'SQL 语言',
          items: [
            { text: '总览', link: '/sql-language/' },
            { text: '查询数据', link: '/sql-language/query' },
            { text: '数据定义', link: '/sql-language/ddl' },
            { text: '数据修改', link: '/sql-language/dml' },
            { text: '约束与关系', link: '/sql-language/constraints' },
            { text: '视图与事务', link: '/sql-language/views-transactions' },
            { text: '索引基础', link: '/sql-language/indexes' },
            { text: 'JSON 与全文检索', link: '/sql-language/json-full-text' },
            { text: '模式与命名空间', link: '/sql-language/schemas' },
            { text: '分区表基础', link: '/sql-language/partitioning' },
            { text: 'CTE 与子查询', link: '/sql-language/cte-subqueries' },
            { text: '窗口函数基础', link: '/sql-language/window-functions' },
            { text: '事务隔离级别', link: '/sql-language/isolation' },
            { text: 'EXPLAIN 读法', link: '/sql-language/explain' },
            { text: '行级安全策略', link: '/sql-language/row-level-security' },
            { text: '数组与枚举', link: '/sql-language/arrays-enums' },
            { text: '生成列与表达式', link: '/sql-language/generated-columns' },
            { text: '物化视图', link: '/sql-language/materialized-views' },
            { text: 'NULL 与三值逻辑', link: '/sql-language/nulls' },
            { text: '序列与身份列', link: '/sql-language/sequences-identity' },
            { text: '日期与时间', link: '/sql-language/datetime' },
            { text: '范围类型', link: '/sql-language/range-types' },
            { text: '聚合进阶', link: '/sql-language/aggregates' },
            { text: '标识符与命名', link: '/sql-language/identifiers' },
            { text: '布尔类型', link: '/sql-language/boolean' },
            { text: '表达式基础', link: '/sql-language/expressions' },
            { text: '保存点', link: '/sql-language/savepoints' },
            { text: '排序规则', link: '/sql-language/collation' },
            { text: '类型转换', link: '/sql-language/type-conversion' },
            { text: '集合操作', link: '/sql-language/set-operations' },
            { text: '域类型', link: '/sql-language/domains' },
            { text: 'UPSERT', link: '/sql-language/upsert' },
            { text: 'LATERAL 关联', link: '/sql-language/lateral' },
            { text: '条件表达式', link: '/sql-language/conditional-expressions' },
            { text: '外连接', link: '/sql-language/joins-outer' },
            { text: '行锁子句', link: '/sql-language/locking-clauses' },
            { text: '分组统计扩展', link: '/sql-language/grouping-sets' },
            { text: '咨询锁', link: '/sql-language/advisory-locks' },
            { text: '并行查询', link: '/sql-language/parallel-query' },
            { text: '大对象', link: '/sql-language/large-objects' }
          ]
        }
      ],
      '/server-admin/': [
        {
          text: '服务器管理',
          items: [
            { text: '总览', link: '/server-admin/' },
            { text: '安装与初始化', link: '/server-admin/setup' },
            { text: '数据库管理', link: '/server-admin/database-management' },
            { text: '备份与恢复', link: '/server-admin/backup' },
            { text: 'WAL 归档', link: '/server-admin/wal-archiving' },
            { text: '时间点恢复', link: '/server-admin/point-in-time-recovery' },
            { text: '恢复演练', link: '/server-admin/recovery-drills' },
            { text: '权限与安全', link: '/server-admin/security' },
            { text: '密码与认证策略', link: '/server-admin/password-policy' },
            { text: '角色成员关系', link: '/server-admin/role-membership' },
            { text: '默认权限', link: '/server-admin/default-privileges' },
            { text: '日志与排障', link: '/server-admin/logging' },
            { text: '日常维护', link: '/server-admin/maintenance' },
            { text: 'autovacuum 调优', link: '/server-admin/autovacuum-tuning' },
            { text: '配置参数', link: '/server-admin/configuration' },
            { text: 'JIT 即时编译', link: '/server-admin/jit' },
            { text: '回归测试', link: '/server-admin/regression-tests' },
            { text: '本地化与编码', link: '/server-admin/localization' },
            { text: '认证与访问规则', link: '/server-admin/authentication' },
            { text: '上线前检查清单', link: '/server-admin/production-checklist' },
            { text: '版本升级', link: '/server-admin/upgrades' },
            { text: 'SSL/TLS 连接', link: '/server-admin/ssl-tls' },
            { text: '审计与留痕', link: '/server-admin/auditing' },
            { text: 'pg_stat_statements', link: '/server-admin/pg-stat-statements' },
            { text: '连接限制', link: '/server-admin/connection-limits' },
            { text: '资源参数', link: '/server-admin/resource-settings' },
            { text: '表空间', link: '/server-admin/tablespaces' },
            { text: '复制与高可用', link: '/server-admin/replication' },
            { text: '复制槽', link: '/server-admin/replication-slots' },
            { text: '逻辑复制基础', link: '/server-admin/logical-replication' },
            { text: '监控与容量', link: '/server-admin/monitoring-capacity' },
            { text: '导入导出与迁移', link: '/server-admin/import-export' }
          ]
        }
      ],
      '/client-interfaces/': [
        {
          text: '客户端接口',
          items: [
            { text: '总览', link: '/client-interfaces/' },
            { text: '连接方式', link: '/client-interfaces/connections' },
            { text: '连接串', link: '/client-interfaces/connection-strings' },
            { text: 'libpq C 客户端库', link: '/client-interfaces/libpq' },
            { text: 'ECPG 嵌入式 SQL', link: '/client-interfaces/ecpg' },
            { text: '应用开发注意点', link: '/client-interfaces/app-patterns' },
            { text: '连接池与事务边界', link: '/client-interfaces/pooling-transactions' },
            { text: '错误处理与重试', link: '/client-interfaces/error-handling' },
            { text: '事务重试', link: '/client-interfaces/transaction-retry' },
            { text: '预处理语句与参数', link: '/client-interfaces/prepared-statements' },
            { text: '驱动与 ORM 选择', link: '/client-interfaces/drivers-orm' },
            { text: '数据库迁移工具', link: '/client-interfaces/migrations' },
            { text: '批处理与分页', link: '/client-interfaces/batching-pagination' },
            { text: 'COPY 流式接入', link: '/client-interfaces/copy-streaming' },
            { text: '读写分离', link: '/client-interfaces/read-write-splitting' },
            { text: '超时设置', link: '/client-interfaces/timeouts' },
            { text: '取消查询', link: '/client-interfaces/cancel-query' },
            { text: 'LISTEN 与 NOTIFY', link: '/client-interfaces/listen-notify' }
          ]
        }
      ],
      '/server-programming/': [
        {
          text: '服务端编程',
          items: [
            { text: '总览', link: '/server-programming/' },
            { text: '函数与触发器', link: '/server-programming/functions-triggers' },
            { text: '触发器设计', link: '/server-programming/trigger-design' },
            { text: '扩展与过程语言', link: '/server-programming/extensions' },
            { text: 'PL/pgSQL 基础', link: '/server-programming/plpgsql' },
            { text: '安全定义者函数', link: '/server-programming/security-definer' },
            { text: '异常处理', link: '/server-programming/exceptions' },
            { text: '动态 SQL', link: '/server-programming/dynamic-sql' },
            { text: '事件触发器', link: '/server-programming/event-triggers' },
            { text: '后台工作进程', link: '/server-programming/background-workers' },
            { text: '规则、通知与事件', link: '/server-programming/rules-notify-events' },
            { text: '外部数据封装器', link: '/server-programming/foreign-data' },
            { text: '自定义类型基础', link: '/server-programming/custom-types' },
            { text: 'SPI 接口', link: '/server-programming/spi' },
            { text: '逻辑解码', link: '/server-programming/logical-decoding' }
          ]
        }
      ],
      '/reference/': [
        {
          text: '官方目录映射',
          items: [
            { text: '总览', link: '/reference/' },
            { text: 'SQL 命令', link: '/reference/sql-commands/' },
            { text: 'SELECT 速查', link: '/reference/sql-commands/select' },
            { text: 'INSERT 速查', link: '/reference/sql-commands/insert' },
            { text: 'UPDATE 速查', link: '/reference/sql-commands/update' },
            { text: 'DELETE 速查', link: '/reference/sql-commands/delete' },
            { text: 'CREATE TABLE 速查', link: '/reference/sql-commands/create-table' },
            { text: 'ALTER/DROP TABLE 速查', link: '/reference/sql-commands/alter-drop-table' },
            { text: '事务命令速查', link: '/reference/sql-commands/transactions' },
            { text: 'GRANT/REVOKE 速查', link: '/reference/sql-commands/grant-revoke' },
            { text: 'CREATE/DROP INDEX 速查', link: '/reference/sql-commands/create-drop-index' },
            { text: 'CREATE/DROP VIEW 速查', link: '/reference/sql-commands/views' },
            { text: 'CREATE/DROP SCHEMA 速查', link: '/reference/sql-commands/schemas' },
            { text: 'EXPLAIN 速查', link: '/reference/sql-commands/explain' },
            { text: 'COPY 速查', link: '/reference/sql-commands/copy' },
            { text: 'TRUNCATE 速查', link: '/reference/sql-commands/truncate' },
            { text: 'CREATE/DROP ROLE 速查', link: '/reference/sql-commands/roles' },
            { text: 'CREATE/DROP DATABASE 速查', link: '/reference/sql-commands/databases' },
            { text: 'CREATE/DROP EXTENSION 速查', link: '/reference/sql-commands/extensions' },
            { text: 'VACUUM/ANALYZE 速查', link: '/reference/sql-commands/vacuum-analyze' },
            { text: 'CREATE/DROP FUNCTION 速查', link: '/reference/sql-commands/functions' },
            { text: 'CREATE/DROP TRIGGER 速查', link: '/reference/sql-commands/triggers' },
            { text: 'CREATE/DROP POLICY 速查', link: '/reference/sql-commands/policies' },
            { text: '物化视图命令速查', link: '/reference/sql-commands/materialized-views' },
            { text: 'PREPARE/EXECUTE 速查', link: '/reference/sql-commands/prepare-execute' },
            { text: 'LISTEN/NOTIFY 速查', link: '/reference/sql-commands/listen-notify' },
            { text: 'SET/SHOW/RESET 速查', link: '/reference/sql-commands/set-show-reset' },
            { text: 'COMMENT 速查', link: '/reference/sql-commands/comment' },
            { text: '序列命令速查', link: '/reference/sql-commands/sequences' },
            { text: 'LOCK 速查', link: '/reference/sql-commands/lock' },
            { text: 'REINDEX/CLUSTER 速查', link: '/reference/sql-commands/reindex-cluster' },
            { text: '表空间命令速查', link: '/reference/sql-commands/tablespaces' },
            { text: '默认权限命令速查', link: '/reference/sql-commands/default-privileges' },
            { text: '类型与域命令速查', link: '/reference/sql-commands/types-domains' },
            { text: '外部表命令速查', link: '/reference/sql-commands/foreign-tables' },
            { text: '发布订阅命令速查', link: '/reference/sql-commands/publication-subscription' },
            { text: '游标命令速查', link: '/reference/sql-commands/cursors' },
            { text: '排序规则命令速查', link: '/reference/sql-commands/collations' },
            { text: '索引命令速查', link: '/reference/index-commands' },
            { text: '约束命令速查', link: '/reference/constraint-commands' },
            { text: '数据类型', link: '/reference/data-types' },
            { text: '数值类型速查', link: '/reference/numeric-types' },
            { text: '字符类型速查', link: '/reference/character-types' },
            { text: '布尔类型速查', link: '/reference/boolean-types' },
            { text: '日期时间类型速查', link: '/reference/datetime-types' },
            { text: 'JSONB 类型速查', link: '/reference/jsonb-types' },
            { text: '数组与范围类型速查', link: '/reference/array-range-types' },
            { text: 'UUID 速查', link: '/reference/uuid' },
            { text: '网络地址类型速查', link: '/reference/network-address-types' },
            { text: '枚举类型速查', link: '/reference/enum-types' },
            { text: '位串类型速查', link: '/reference/bit-string-types' },
            { text: 'XML 类型速查', link: '/reference/xml-types' },
            { text: '几何类型速查', link: '/reference/geometric-types' },
            { text: '对象标识符类型速查', link: '/reference/object-identifier-types' },
            { text: '复合类型速查', link: '/reference/composite-types' },
            { text: '函数与操作符', link: '/reference/functions-operators' },
            { text: '系统目录与视图', link: '/reference/system-catalogs' },
            { text: '信息模式速查', link: '/reference/information-schema' },
            { text: 'psql 常用命令', link: '/reference/psql' },
            { text: '客户端应用速查', link: '/reference/client-apps' },
            { text: '服务器应用速查', link: '/reference/server-apps' },
            { text: '备份工具速查', link: '/reference/backup-tools' },
            { text: '配置参数速查', link: '/reference/configuration-settings' },
            { text: '错误码速查', link: '/reference/error-codes' },
            { text: 'COPY 与批量导入', link: '/reference/copy' },
            { text: '排查入口速查', link: '/reference/troubleshooting-map' },
            { text: '统计视图速查', link: '/reference/statistics-views' },
            { text: '扩展速查', link: '/reference/extensions' },
            { text: '角色权限速查', link: '/reference/roles-privileges' },
            { text: '事务命令速查', link: '/reference/transaction-commands' },
            { text: '日期时间函数速查', link: '/reference/datetime-functions' },
            { text: '字符串函数速查', link: '/reference/string-functions' },
            { text: 'JSON 函数速查', link: '/reference/json-functions' },
            { text: '数学函数速查', link: '/reference/math-functions' },
            { text: '聚合函数速查', link: '/reference/aggregate-functions' },
            { text: '数组函数速查', link: '/reference/array-functions' },
            { text: '范围函数速查', link: '/reference/range-functions' },
            { text: '全文检索函数速查', link: '/reference/full-text-functions' },
            { text: '序列函数速查', link: '/reference/sequence-functions' },
            { text: '网络地址函数速查', link: '/reference/network-functions' },
            { text: '条件函数速查', link: '/reference/conditional-functions' },
            { text: 'SQL 关键字速查', link: '/reference/sql-keywords' }
          ]
        }
      ],
      '/internals/': [
        {
          text: '内部原理',
          items: [
            { text: '总览', link: '/internals/' },
            { text: '查询是怎么执行的', link: '/internals/query-lifecycle' },
            { text: '存储与并发', link: '/internals/storage-mvcc' },
            { text: 'WAL 与恢复', link: '/internals/wal-recovery' },
            { text: 'VACUUM 与统计信息', link: '/internals/vacuum-statistics' },
            { text: '锁与等待', link: '/internals/locks-waits' },
            { text: '规划器与代价', link: '/internals/planner-costs' },
            { text: '检查点与后台写入', link: '/internals/checkpoints-bgwriter' },
            { text: '索引访问方法', link: '/internals/index-access-methods' },
            { text: '缓冲区与缓存', link: '/internals/buffer-cache' },
            { text: '后台进程', link: '/internals/background-processes' },
            { text: '前后端协议', link: '/internals/protocol' },
            { text: '物理存储', link: '/internals/physical-storage' },
            { text: '事务处理', link: '/internals/transaction-processing' },
            { text: 'TOAST 存储', link: '/internals/toast' },
            { text: '表膨胀', link: '/internals/table-bloat' },
            { text: 'HOT 更新', link: '/internals/hot-updates' }
          ]
        }
      ],
      '/appendix/': [
        {
          text: '附录',
          items: [
            { text: '总览', link: '/appendix/' },
            { text: '术语表', link: '/appendix/glossary' },
            { text: '练习与示例规范', link: '/appendix/examples' },
            { text: 'SQL 兼容性', link: '/appendix/sql-conformance' },
            { text: 'PostgreSQL 限制', link: '/appendix/limits' },
            { text: '缩略词表', link: '/appendix/acronyms' }
          ]
        }
      ],
      '/project/': [
        {
          text: '项目说明',
          items: [
            { text: '翻译计划', link: '/project/translation-plan' },
            { text: '翻译规范', link: '/project/style-guide' }
          ]
        }
      ]
    },
    footer: {
      message: '参考 PostgreSQL 官方文档，改造成更适合新手学习的中文站点。',
      copyright: 'PostgreSQL Press'
    },
    editLink: {
      pattern: 'https://github.com/songsiqiu/postgresql-press/edit/main/docs/:path',
      text: '编辑此页'
    },
    outline: [2, 3],
    search: {
      provider: 'local'
    },
    socialLinks: []
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }]
  ]
})
