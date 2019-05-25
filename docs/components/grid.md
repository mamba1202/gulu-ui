---
title: Grid 网格
---
# 网格
Grid - 网格，最多可分为24小格，可设置 gutter 和空白，默认支持响应式布局
::: tip
TIP
使用该组件推荐设置，示例已设置
:::
```css
* { box-sizing: border-box; }
```
<grid-demo-1></grid-demo-1>
#### 代码
```html
     <g-row class="demoRow">
         <g-col span="8"><div class="demoCol">8</div></g-col>
         <g-col span="8"><div class="demoCol">8</div></g-col>
         <g-col span="8"><div class="demoCol">8</div></g-col>
     </g-row>
     <g-row class="demoRow">
         <g-col span="6"><div class="demoCol">6</div></g-col>
         <g-col span="6"><div class="demoCol">6</div></g-col>
         <g-col span="6"><div class="demoCol">6</div></g-col>
         <g-col span="6"><div class="demoCol">6</div></g-col>
     </g-row>
     <g-row class="demoRow">
         <g-col span="4"><div class="demoCol">4</div></g-col>
         <g-col span="4"><div class="demoCol">4</div></g-col>
         <g-col span="4"><div class="demoCol">4</div></g-col>
         <g-col span="4"><div class="demoCol">4</div></g-col>
         <g-col span="4"><div class="demoCol">4</div></g-col>
         <g-col span="4"><div class="demoCol">4</div></g-col>
     </g-row>
     <g-row class="demoRow">
         <g-col span="2"><div class="demoCol">2</div></g-col>
         <g-col span="2"><div class="demoCol">2</div></g-col>
         <g-col span="2"><div class="demoCol">2</div></g-col>
         <g-col span="2"><div class="demoCol">2</div></g-col>
         <g-col span="2"><div class="demoCol">2</div></g-col>
         <g-col span="2"><div class="demoCol">2</div></g-col>
         <g-col span="2"><div class="demoCol">2</div></g-col>
         <g-col span="2"><div class="demoCol">2</div></g-col>
         <g-col span="2"><div class="demoCol">2</div></g-col>
         <g-col span="2"><div class="demoCol">2</div></g-col>
         <g-col span="2"><div class="demoCol">2</div></g-col>
         <g-col span="2"><div class="demoCol">2</div></g-col>
     </g-row>
            
```
## 设置gutter
<grid-demo-2></grid-demo-2>
```html
      <g-row class="demoRow" gutter="10">
          <g-col span="8"><div class="demoCol">8</div></g-col>
          <g-col span="8"><div class="demoCol">8</div></g-col>
          <g-col span="8"><div class="demoCol">8</div></g-col>
      </g-row>
      <g-row class="demoRow" gutter="10">
          <g-col span="6"><div class="demoCol">6</div></g-col>
          <g-col span="6"><div class="demoCol">6</div></g-col>
          <g-col span="6"><div class="demoCol">6</div></g-col>
          <g-col span="6"><div class="demoCol">6</div></g-col>
       </g-row>
```
