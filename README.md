# 来去山

> 需要时走入人间，不需要时转身归山。来去自由。

一个无需构建工具的静态中文博客，可直接部署到 GitHub Pages。

## 本地预览

直接打开 `index.html`，或运行 `python -m http.server 8000` 后访问 `http://localhost:8000`。

## 写新文章

复制 `posts/见山不是山.html`，修改标题、日期、摘要和正文，并在 `index.html` 的 `.article-list` 中加入文章链接。

## 部署

推送到 `main` 分支后，GitHub Actions 会自动部署。首次使用时，请在 **Settings → Pages → Build and deployment** 中将 Source 设为 **GitHub Actions**。

站点地址：`https://jingsanjing1995.github.io/laiqushan/`
