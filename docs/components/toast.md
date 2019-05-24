---
title: Toast
---
# Toast
:::tip
若点击按钮无显示，需要设置
:::
```css
.gulu-toast {z-index: 30;}
```
## 设置弹出位置
<toast-demo-1></toast-demo-1>
#### 代码
```html
    <g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
    <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
    <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
```
## 设置关闭按钮
<toast-demo-2></toast-demo-2>
#### 代码
```html
   <div>
       <g-button @click="onClickButton">上方弹出</g-button>
   </div>
```
```js
    methods: {
            onClickButton () {
              this.$toast('你知道我在等你吗？', {
                closeButton: {
                  text: '知道了',
                  callback: () => {
                    console.log('他说知道了')
                  }
                }
              })
            }
          }
```
## 自动或手动关闭
<toast-demo-4></toast-demo-4>
#### 代码
```html
  <div>
      <g-button @click="onClickButton">上方弹出</g-button>
  </div>
```
```js
 methods: {
      onClickButton () {
        this.$toast('我不会自动关闭', {
          autoClose: false
        })
      }
    },
```
:::tip
autoClsoe 取值为 false（手动关闭）或数字（几秒后自动关闭，默认为5)
:::
## 支持HTML
<toast-demo-3></toast-demo-3>
#### 代码
```html
  <div>
       <g-button @click="onClickButton">上方弹出</g-button>
  </div>
```
```js
 methods: {
      onClickButton () {
        this.$toast('<strong style="color:red;">加粗的提示</strong>', {
          enableHtml: true
        })
      }
    },
  }
```
