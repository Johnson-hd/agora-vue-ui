## agora-vue-ui
> agora-vue-ui

简体中文 | [English](./README-US.md)

### 自定义主题方案
1. 在使用`agora-vue-ui`组件的项目中引入`agora-vue-ui`的`index.css`，这个`index.css`是包含`var`变量，利用使用`agora-vue-ui`的项目的`webpack`再重新打包一遍
2. 用户选择主题色，打包一个新的主题

### 国际化方案
基于开发者项目中使用`vue-i18n`组件的国际化能力，将`AgoraUI`中的`lang`文件引入，并完成初始化。开发者项目切换中英文时，组件库内部只需要使用`t(xxx)`即可同步更改。我们会在初始化时将开发者项目中的i18n对象传递到组件库，并绑定在`vue`上，所以可以使用`this.agoraI18n.t('xxx')`来完成注册。对于未使用国际化的项目，组件内部会默认以中文方式处理。
```bash
// 初始化
Vue.use(AgoraUI, {
  i18n: i18n,
  locale: 'zh',
})
```

### 按需引入方案
1. 支持只引入部分组件
```bash
import AgoraButton from 'agora-vue-ui/lib/button'
import 'agora-vue-ui/lib/css/button.css'

Vue.component('AgoraButton', AgoraButton)
```

2. 可以借助插件[babel-plugin-import](https://github.com/ant-design/babel-plugin-import)更方便地按需引入组件
```bash
npm install babel-plugin-import --D
```

在 `.babelrc` 里加入

```json
{
  "plugins": [
    ["import", { "libraryName": "agora-vue-ui" }]
  ]
}
```

项目里

```javascript
import 'agora-vue-ui/lib/css/index.css'

import { Button, Input } from 'agora-vue-ui'
Vue.component('AgoraButton', Button)
Vue.component('AgoraInput', Input)
```


### 开发规范
1. 开发时切新分支，比如`feat/xxx`
2. 开发分支合到`master`
3. 从`master`切一个新分支`release-vx.x.x`
4. `npm version patch` || `npm version mirror` 作用是`打git tag`并且修改`package.json`中的版本
5. 修改`CHANGELOG.md`
6. `git push origin release-vx.x.x`
7. `git push origin --tags`
8. `npm publish`

### 链接
- [更新日志](./CHAGELOG.md)

### Todo
- [ ] 自定义主题
- [x] 国际化
- [ ] 单独引入组件时的国际化问题
- [x] 按需引入
- [x] `agora-md-loader`
- [ ] 官网
- [x] 打包
- [x] 发布
