---
title: Button 按钮
---
# 按钮
提供单个按钮和组合形式的按钮，按钮可添加图标和设置图标位置等 ······
## 单个按钮
<button-demo-1></button-demo-1>
#### 代码
```html 
    <g-button>默认按钮</g-button>
    <g-button icon="settings">设置</g-button>
    <g-button icon="download">点赞</g-button>
    <g-button icon="thumbs-up">下载</g-button>
    <g-button :loading="true">登陆中</g-button>
    <g-button disabled>默认按钮</g-button>     
```