---
title: Tabs 标签页
---
## 使用方法
<tabs-demo-1></tabs-demo-1>
#### 代码
```js
 data:{
   selected: '1'
}
```
```html
  <g-tabs :selected="selected">
    <g-tabs-head>
       <g-tabs-item name="1">1</g-tabs-item>
       <g-tabs-item name="2">2</g-tabs-item>
    </g-tabs-head>
    <g-tabs-body>
       <g-tabs-pane name="1">content 1</g-tabs-pane>
       <g-tabs-pane name="2">content 2</g-tabs-pane>
    </g-tabs-body>
   </g-tabs>
```