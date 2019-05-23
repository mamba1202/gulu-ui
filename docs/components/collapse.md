---
title: collapse 手风琴
---
# 手风琴
## 设置默认开启
<collapse-demo-1></collapse-demo-1>
#### 代码
```js
data() {
     return {
        selectedTab: ['1', '2', '3']
     }
}
```
```html
        <g-collapse :selected.sync="selectedTab">
        <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
        <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
        <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
        </g-collapse>
```

## 设定single
<collapse-demo-2></collapse-demo-2>
#### 代码
```js
 data() {
    return {
        selectedTab: ['1']
    }
}
```
```html

        <g-collapse :selected.sync="selectedTab" single>
        <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
        <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
        <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
        </g-collapse>

```
:::tip
设定 single 同时建议 selectedTab 也为单个
:::
