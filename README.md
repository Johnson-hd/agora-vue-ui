## agora-vue-ui
> agora-vue-ui

### 自定义主题方案
1. 在使用`agora-vue-ui`组件的项目中引入`agora-vue-ui`的`index.css`，这个`index.css`是包含`var`变量，利用使用`agora-vue-ui`的项目的`webpack`再重新打包一遍
2. 通过官网，让用户选择主题色等，然后打包出一个新的`theme`包，提供下载，用户来替换

### 开发规范
1. 开发时切新分支，比如`hotfix/xxx`
2. 开发分支合到`master`
3. 从`master`切一个新分支`release-vx.x.x`
4. `npm version patch` or `npm version mirror` 作用是`打git tag`并且修改`package.json`中的版本
5. `git push origin release-vx.x.x`
5. `git push origin --tags`
6. `npm publish`

### TODO
- [ ] 自定义主题
- [ ] 国际化
- [x] `agora-md-loader`
- [ ] 官网
- [x] 打包
- [x] 发布
