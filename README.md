# Neilyo Blog

个人博客，基于 Vue 3、Vite SSG、Markdown 和 UnoCSS 构建。

线上地址：<https://blog.tomeet.cn>

## 本地开发

当前仓库提交的是 `package-lock.json`，本地安装和 CI 均使用 npm：

```bash
npm install
npm run dev
```

## 构建

```bash
npm ci
npm run build
```

构建产物位于 `dist/`。

## 发布到 GitHub Pages

仓库通过 `.github/workflows/deploy.yml` 自动构建和发布：

- 向 `master` 推送代码后，自动执行 `npm ci` 和 `npm run build`，再部署 `dist/`。
- Pull Request 会执行构建验证，但不会发布线上站点。
- 也可以在 GitHub Actions 页面手动触发工作流；只有从 `master` 触发时才会部署。

首次启用时，需要在仓库 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。

### 自定义域名

博客使用 `blog.tomeet.cn`。首次发布前，在域名 DNS 服务商处添加：

| 类型 | 主机记录 | 目标 |
| --- | --- | --- |
| CNAME | `blog` | `neilyoli.github.io` |

然后在仓库 **Settings → Pages → Custom domain** 中填写 `blog.tomeet.cn` 并保存。DNS 生效、GitHub 完成证书签发后，再启用 **Enforce HTTPS**。

GitHub Pages 的自定义域名以仓库 Pages 设置为准；当前使用 GitHub Actions 自定义工作流，不依赖仓库中的 CNAME 文件。DNS 变更可能需要一段时间才能全球生效。

## 评论系统

Giscus 暂时关闭，避免继续使用上游仓库的评论配置。若要启用，需要先为本仓库开启 Discussions，再通过 <https://giscus.app> 获取本仓库的 Repository ID 和 Category ID，填写到 `shared/configs.ts` 后将 `giscus.enabled` 改为 `true`。
