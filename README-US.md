## agora-vue-ui
> agora-vue-ui

English | [简体中文](./README.md)

### Customize the theme schema
1. Define `var` variable, pack with the project's webpack agin
2. Select a color, then download the `theme package`

### Development Specification
1. Cut a new branch. eg: `feat/xxx`
2. Development branches rebase to `master`
3. Cut a new branch from `master` to `release-vx.x.x`
4. `npm version patch` || `npm version mirror`
5. Modify `CHANGELOG.md`
6. `git push origin release-vx.x.x`
7. `git push origin --tags`
8. `npm publish`

### Links
- [ChangeLog](./CHAGELOG-US.md)

### Todo
- [ ] customize the theme
- [x] internationalization
- [x] agora-md-loader
- [ ] official website
- [x] pack AgoraUI
- [x] publish AgoraUI
