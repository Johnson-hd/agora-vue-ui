## 按钮尺寸

按钮尺寸分为3种：大按钮、中按钮（默认）、小按钮。大按钮通常适用于整个页面的操作，小按钮适用于弹框中，中按钮适用于页面局部的操作。

```html
  <agora-button type="primary" size="lg">{{ $t('Large') }}</agora-button>
  <agora-button type="primary">{{ $t('Default') }}</agora-button>
  <agora-button type="primary" size="sm">{{ $t('Small') }}</agora-button>
```
