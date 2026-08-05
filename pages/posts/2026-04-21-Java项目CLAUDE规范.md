---
title: Java项目Claude规范
lang: zh
excerpt: Java项目Claude规范

---

# Java 代码生成规范

## Lombok 使用要求

- 所有 POJO/DTO/Entity 必须使用 Lombok 注解简化代码
- 优先使用 `@Data`（含 getter/setter/toString/equals/hashCode）
- 不可变对象使用 `@Value`
- 构造器使用 `@NoArgsConstructor`、`@AllArgsConstructor`、`@Builder`
- 日志统一使用 `@Slf4j`，禁止手写 `Logger` 声明
- 禁止手写 getter/setter/toString 等样板代码

## 语法限制

- **禁止使用 record 语法**（包括 record class、record pattern）
- 数据载体一律使用普通 class + Lombok 注解实现
- 目标兼容 Java 8+ 写法风格