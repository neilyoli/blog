---
title: 如何让 Claude CLI 按需求自动生成对应代码
lang: zh
excerpt: 如何让 Claude CLI 按需求自动生成对应代码

---

> 问题：如何让 Claude CLI 按需求自动生成对应代码

好问题。让 Claude Code（CLI）准确还原这个原型，关键不是把我们聊的内容全塞给它，而是**给它一份结构化的需求文档**。我分三步说。

## 第一步：明白 Claude Code 需要什么

Claude Code 在你的项目里工作，它看得到代码、运行得了命令，但它看不到：

- 我们这段对话的上下文
- 原型里的交互细节
- 你对后端接口的设计决策

所以你要给它的是：**一份它能独立看懂的、足够具体的需求文档 + 原型 HTML 文件**，而不是"参考我之前和 Claude 聊的那个原型"。

## 第二步：准备三份材料

在你的项目根目录下建一个 `docs/features/` 文件夹，放三份文件：

**1. 原型 HTML 文件**（最重要）

把我刚才生成的原型代码保存成一个独立的 `prototype.html`，让 Claude Code 可以直接 `view` 这个文件看视觉效果和交互逻辑。下面我会给你一份清理过的、可以直接保存的完整文件。

**2. 需求文档 `smart-paste-spec.md`**

这份文档要包含：功能目标、UI 结构、组件选型、数据结构、交互流程、后端接口契约。下面我也会给你一份模板。

**3. `CLAUDE.md`**（项目级配置）

Claude Code 启动时会自动读取项目根目录的 `CLAUDE.md`，这里放项目的技术栈、代码规范、组件库版本等通用信息。如果你项目里已经有了，就在里面加一段说明这个新功能的位置；没有就新建一个。

## 第三步：给 Claude Code 下指令

材料准备好后，在项目根目录打开 Claude Code，用类似这样的 prompt：

```
请阅读 docs/features/smart-paste-spec.md 和 docs/features/prototype.html，
在 src/views/listing/ 目录下实现"智能粘贴与结构化预览"功能，
替换现有 ParamsConfirm.vue 中的"产品特征"区块。

要求：
1. 使用 Vue 3 Composition API + <script setup>
2. UI 组件使用 element-plus 和 element-plus-x，不要用原生 HTML 模拟
3. 后端接口先用 mock 数据，在 src/api/listing.ts 里留好真实接口位置
4. 遵循项目现有的目录结构和命名规范

实现前先列出你的实施计划，我确认后再开始写代码。
```

**最后一句"先列计划"很关键**——Claude Code 会先输出一个 todo list，你可以检查它的理解对不对，避免它一口气写一堆你不想要的东西。

---

下面我直接给你准备好这三份材料。先让我把原型 HTML 和需求文档整理出来：三份材料都准备好了。

## 使用步骤

**1. 把文件放到项目里**

```bash
# 在你的项目根目录执行
mkdir -p docs/features
mv ~/Downloads/smart-paste-spec.md docs/features/
mv ~/Downloads/prototype.html docs/features/
mv ~/Downloads/CLAUDE.md ./   # 放根目录！
```

`CLAUDE.md` 必须放项目根目录，Claude Code 启动时会自动读。如果你项目已经有这个文件，就把里面的内容合并进去，不要覆盖。

**2. 根据你项目实际情况修改 CLAUDE.md**

我写的是一个通用模板，你要对照实际情况改几处：

- 技术栈（如果不是 Vue 3 + Vite，要改）
- 目录结构（根据你项目实际的改）
- 常用命令（npm/pnpm/yarn 按实际改）
- 代码规范（如果有 eslint 配置文件，让它遵守即可）

**3. 在项目根目录启动 Claude Code**

```bash
cd your-project-root
claude
```

**4. 给它下第一条指令**

```
请阅读 docs/features/smart-paste-spec.md 和 docs/features/prototype.html，
理解需求后列出实施计划。先不要写代码，等我确认计划后再开始。
```

**5. 审查它的计划**

它会输出一个 todo list，大概长这样：

- 创建 types/listing.ts 类型定义
- 创建 api/listing.ts 和 mock 数据
- 创建 SmartPasteSection.vue 容器组件
- ...

这时候你检查：

- 有没有漏的组件？
- 文件路径是不是和你项目一致？
- 它有没有把任务拆得太大（一次写 500 行的那种）？

**6. 分步推进**

确认计划后，让它**一个组件一个组件做**，不要让它一次写完所有文件。比如：

```
先只实现 PasteInput.vue（左栏粘贴区），完成后我验证效果再继续
```

每做完一个你验证一下，Claude Code 可以直接跑 `pnpm dev` 让你在浏览器看。

## 几个实用技巧

**技巧 1：让它先看现有代码**

在开始写代码前，加一句：

```
开始前，请先用 Glob 和 Read 工具查看 src/views/listing/ParamsConfirm.vue 
的现有实现，了解当前"产品特征"区块是怎么写的、用了哪些 store、props、events
```

这样它写出来的新组件能无缝替换旧的，不会出现接口对不上的情况。

**技巧 2：遇到视觉问题就让它对照 prototype.html**

如果它做出来的颜色、间距不对，直接说：

```
打开 docs/features/prototype.html 对比你当前的实现，
找出视觉差异并修复
```

**技巧 3：接口 mock 要明显**

让它在 mock 代码里加 `// TODO: 接入真实接口` 注释，未来搜索这个注释就能找到所有要替换的地方。

**技巧 4：如果它一次改动太多文件，打断它**

直接输入：

```
停。分步来，先只做 A，不要动 B 和 C
```

Claude Code 很听话，但容易"一次做完"，你要主动控制节奏。

---

这三份材料里最关键的是 `smart-paste-spec.md`——它把我们聊的所有设计决策（四类 Tab、status 字段枚举、一键同步的行为、视觉规范）都固化下来了，Claude Code 照着做就不会跑偏。`prototype.html` 是视觉真相来源，`CLAUDE.md` 是项目上下文。

你可以先拿这份 spec 去 Claude Code 试试，跑起来后如果有某个环节它理解有偏差，回来告诉我，我可以帮你把 spec 文档改得更精确。

### 文件模版

#### smart-paste-spec.md

```markdown
# 智能粘贴与结构化预览 - 功能规格

## 1. 功能目标

在 Listing 生成工具的"参数确认"页面中，**替换原有"产品特征"区块**为"智能粘贴 + AI 结构化预览"的双栏交互，解决卖家手动填写大量产品属性的痛点。

**核心流程**：
1. 用户粘贴任意产品素材（供应商详情、Excel 片段、老 Listing 等）
2. 调用后端 AI 接口解析出结构化数据
3. 右侧按"属性 / 卖点 / 规格 / 关键词"四类分 Tab 展示
4. 用户可编辑、确认、删除单个字段
5. 一键同步所有字段到下方 Listing 表单

## 2. 技术栈

- Vue 3 + `<script setup>` + TypeScript
- element-plus（主组件库）
- element-plus-x（增强组件，可选 Sender 组件用于素材输入）
- Pinia（状态管理，如果需要跨组件共享解析结果）
- axios / fetch（调用后端接口）

## 3. 页面结构
```

ParamsConfirm.vue (现有页面)
├── 基础定位（保持不变）
├── 产品特征【本次改造区块】
│   └── SmartPasteSection.vue  ← 新建
│       ├── 左栏：PasteInput.vue
│       └── 右栏：StructuredPreview.vue
│           ├── AttrsTab.vue
│           ├── BulletsTab.vue
│           ├── SpecsTab.vue
│           └── KeywordsTab.vue
├── 目标客户（保持不变）
├── 关键词设置（保持不变，但接受右栏同步过来的数据）
├── 竞品清单（保持不变）
└── 生成设置（保持不变）

```
## 4. 数据结构定义

```typescript
// src/types/listing.ts

export type FieldStatus = 'extracted' | 'inferred' | 'confirmed';
// extracted: AI 从原文直接提取（高置信）
// inferred: AI 推测（低置信，需用户确认）
// confirmed: 用户已确认（从 inferred 升级而来）

export interface AttrField {
  label: string;        // e.g. "Brand", "Material"
  value: string;        // e.g. "Bestier", "Engineered Wood"
  status: FieldStatus;
}

export interface BulletItem {
  id: string;
  text: string;
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface KeywordItem {
  text: string;
  source: 'extracted' | 'derived';  // extracted=原文出现, derived=AI 衍生
  selected: boolean;
}

export interface ParseResult {
  attrs: AttrField[];
  bullets: BulletItem[];
  specs: SpecItem[];
  keywords: KeywordItem[];
}
```

## 5. 后端接口契约

**请求**：

```
POST /api/listing/parse
Content-Type: application/json

{
  "text": "用户粘贴的原始素材",
  "category": "家居厨房",
  "marketplace": "en_US",
  "platform": "Amazon"
}
```

**响应**：

```json
{
  "code": 0,
  "data": {
    "attrs": [
      { "label": "Brand", "value": "Bestier", "status": "extracted" },
      { "label": "Style", "value": "Modern", "status": "inferred" }
    ],
    "bullets": [
      { "id": "b1", "text": "AMPLE STORAGE — 4 smooth-glide drawers..." }
    ],
    "specs": [
      { "label": "Desktop Capacity", "value": "200 lbs" }
    ],
    "keywords": [
      { "text": "computer desk with drawers", "source": "extracted", "selected": true }
    ]
  }
}
```

**前端先用 mock**：在 `src/api/listing.ts` 中实现 mock 版本，真实接口上线后替换实现即可。

```typescript
// src/api/listing.ts
export async function parseProductText(params: ParseRequest): Promise<ParseResult> {
  // TODO: 接入真实接口时替换为 axios.post('/api/listing/parse', params)
  await new Promise(r => setTimeout(r, 900));  // 模拟网络延迟
  return mockParseResult;
}
```

## 6. 交互细节

### 左栏 PasteInput

- `el-input type="textarea"`，最小高度 300px，支持 resize: vertical
- 实时显示字符数（右上角）
- "AI 智能解析"按钮：字符数 < 10 时 disabled
- "载入示例素材"按钮：一键填入预设的 Bestier Computer Desk 示例文本（见 prototype.html 中 exampleText）
- "清空"按钮：清空输入框并重置预览

### 右栏 StructuredPreview

- 未解析时显示 Empty State（图标 + 引导文字）
- 解析中显示 Spinner + "AI 正在解析素材…"
- 解析完成后显示 `el-tabs`，四个 Tab 头各带 `el-badge` 数字

### 属性 Tab (AttrsTab)

- 提示栏：绿色 hint-bar 说明两种边框的含义
- 每个字段一行，包含：
  - 字段名 label（左侧，固定宽度 92px）
  - `el-input` 编辑框（可修改 value）
  - 状态 badge（"已提取" / "AI 推测"）
  - 操作按钮：✓ 确认（inferred → confirmed）、× 删除
- **视觉区分**（这是核心设计）：
  - `status === 'extracted'` 或 `'confirmed'`：绿色实线边框，浅绿背景
  - `status === 'inferred'`：**橙色虚线边框**，浅橙背景
- 用户点 ✓ 后，该字段 status 改为 `confirmed`，视觉切换为绿色

### 卖点 Tab (BulletsTab)

- 每条卖点一个卡片，带编号徽标（1、2、3）
- 支持删除单条
- 不支持编辑（内容由后端生成，如需编辑走"重新解析"）

### 规格 Tab (SpecsTab)

- 类似属性 Tab 但只读，仅支持删除

### 关键词 Tab (KeywordsTab)

- 使用 `el-check-tag` 或自定义 chip 组件
- 点击切换 selected 状态（蓝底白字 ↔ 浅蓝）
- 顶部显示"已选 X / 总 Y"

### 底部 Footer

- 左侧：摘要文字"共 N 项待同步 · M 项待确认"
- 右侧按钮：
  - "重新解析"（次要按钮）
  - **"一键同步到 Listing 表单 →"**（主要操作，绿色 success 按钮）

### 一键同步行为

点击后：

1. 将 attrs 数据填入"属性参数"字段
2. 将 bullets 填入"Bullet Points"字段
3. 将 selected 为 true 的 keywords 填入"关键词"字段
4. 基于 attrs 组装 Title（格式：`{Brand} {Model}, {Material}, {Category}`）
5. 每个被填入的字段播放 `flash` 动画（黄色闪一下变绿）
6. 右上角 toast 提示"已同步 N 个字段"

## 7. 视觉规范

**严格参考 `prototype.html` 的配色和间距**，关键色值：

- 主色：#409eff（Element Plus 默认蓝）
- 成功：#67c23a
- 警告：#e6a23c
- 边框：#e4e7ed / #ebeef5 / #dcdfe6（三级弱化）
- 文字：#303133（主）/ #606266（次）/ #909399（辅）/ #c0c4cc（禁用）

**不要引入额外的设计资源**（图标库除外，可用 `@element-plus/icons-vue`）。

## 8. 文件清单

实施时请创建以下文件：

```
src/
├── views/listing/
│   ├── ParamsConfirm.vue (修改现有文件)
│   └── components/
│       ├── SmartPasteSection.vue        ← 容器
│       ├── PasteInput.vue               ← 左栏
│       ├── StructuredPreview.vue        ← 右栏容器
│       ├── AttrsTab.vue
│       ├── BulletsTab.vue
│       ├── SpecsTab.vue
│       └── KeywordsTab.vue
├── api/
│   └── listing.ts                       ← 接口 + mock
├── types/
│   └── listing.ts                       ← 类型定义
└── mock/
    └── listing-parse.ts                 ← mock 数据
```

## 9. 非目标（不要做）

- ❌ 不要实现真实 LLM 调用（后端负责）
- ❌ 不要做 Excel 文件解析、OCR、URL 抓取（暂时仅占位按钮）
- ❌ 不要实现"重新解析"的 diff 合并逻辑（v1 直接覆盖即可）
- ❌ 不要加国际化（i18n），v1 仅中文

## 10. 验收标准

- [ ] 能粘贴示例文本，点"AI 智能解析"后 1 秒内出现四 Tab 预览

- [ ] 属性 Tab 中 inferred 字段显示橙色虚线，点 ✓ 后变绿

- [ ] 关键词 chip 可点击切换选中状态

- [ ] 点"一键同步"后下方 Listing 表单字段被填充并有动画

- [ ] 响应式：宽度 < 1024px 时双栏自动堆叠为单栏

- [ ] 代码通过项目的 ESLint / Prettier 规范
  
  ```
  
  ```

### prototype.html

Claude生成的原型图文件

#### Claude · MD

```markdown
# Claude Code 项目配置

本文件由 Claude Code 在启动时自动读取，用于向 AI 说明项目上下文、代码规范和常用命令。

## 项目简介

这是一个**多平台 Listing 生成工具**，帮助跨境电商卖家基于产品素材快速生成 Amazon / Shopify / Walmart 等平台的合规商品 Listing。核心流程：输入方式 → 参数确认 → AI 生成 → 检测优化。

## 技术栈

- **前端框架**：Vue 3 + TypeScript + `<script setup>` 语法
- **构建工具**：Vite
- **UI 组件库**：
  - `element-plus`（主）— 表单、布局、反馈组件
  - `element-plus-x`（辅）— AI 交互组件（Sender、Bubble 等）
- **状态管理**：Pinia
- **路由**：Vue Router 4
- **HTTP**：axios（统一封装在 `src/api/request.ts`）
- **样式**：SCSS + CSS Variables（遵循 Element Plus 主题规范）

## 目录结构
```

src/
├── api/              # 后端接口封装
├── assets/           # 静态资源
├── components/       # 全局通用组件
├── composables/      # Vue 组合式函数
├── mock/             # Mock 数据（接口未就绪时使用）
├── router/           # 路由配置
├── stores/           # Pinia stores
├── types/            # TypeScript 类型定义
├── utils/            # 工具函数
└── views/            # 页面组件
    └── listing/      # Listing 相关页面
        ├── ParamsConfirm.vue
        └── components/

```
## 代码规范

- 组件文件使用 **PascalCase**（如 `SmartPasteSection.vue`）
- 工具函数使用 **camelCase**
- 常量使用 **UPPER_SNAKE_CASE**
- 所有组件必须使用 `<script setup lang="ts">` 语法
- Props 定义使用 `defineProps<T>()` 泛型形式，不用 PropType
- Emits 使用 `defineEmits<{ (e: 'update', val: string): void }>()`
- 接口返回值必须定义 TypeScript 类型，禁用 `any`
- 不要在组件中直接调用 `axios`，统一通过 `src/api/` 下的封装

## 常用命令

```bash
pnpm dev          # 本地开发
pnpm build        # 生产构建
pnpm lint         # ESLint 检查
pnpm lint:fix     # 自动修复
pnpm type-check   # TypeScript 类型检查
```

## 当前迭代任务

详见 `docs/features/smart-paste-spec.md`：
在"参数确认"页面中实现"智能粘贴 + 结构化预览"功能，替换现有"产品特征"区块。
视觉参考：`docs/features/prototype.html`

## 实施时的通用要求

1. **先列计划再动手**：任何复杂功能实施前，先输出 todo list 让用户确认
2. **小步提交**：每完成一个组件先让用户验证视觉效果，再进入下一个
3. **Mock 优先**：后端接口未就绪时一律用 mock 数据，留好真实接口接入位置
4. **不重复造轮子**：能用 Element Plus 组件解决的不要手写样式
5. **保留扩展点**：对"未来可能扩展"的地方（如多平台适配、国际化）留接口但不实现
   ```