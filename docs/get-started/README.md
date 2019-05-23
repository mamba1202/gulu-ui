---
title: 快速上手
---
## 安装
参考[安装]()章节
## 引入咕噜UI
```js
import { Button } from "gulu-ui"
import "gulu-ui/dist/index.css"

export default {
  name: 'app',
  components: {
    "g-button": Button
  }
```
## 添加CSS样式
```css
*, *::before, *::after{ box-sizing: border-box; }
```