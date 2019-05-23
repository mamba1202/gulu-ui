---
title: Input 输入框
---
## 简单用法
<input-demo-1></input-demo-1>
#### 代码
```html
  <g-input value="中文"></g-input>
  <g-input value="中文" disabled></g-input>
  <g-input value="中文" readonly></g-input>
  <g-input value="中文" error="错误"></g-input>
```
## 双向绑定
<input-demo-2></input-demo-2>
#### 代码
```js
 data:{
   value: '1'
}
```
```html
  <g-input v-model="value"></g-input>
  <div>
    value: {{value}}
  </div>
```