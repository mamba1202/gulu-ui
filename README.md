# 咕噜UI -用Vue写一个UI组件库
[![Build Status](https://travis-ci.org/mamba1202/gulu-ui.svg?branch=master)](https://travis-ci.org/mamba1202/gulu-ui)(tab组件用例测试待解决)


咕噜UI 是一个好用的UI组件，提供一些常用组件，适合移动和PC端使用


组件: 按钮、输入框、网格、布局、Toast、Tabs、Popover、手风琴
## 介绍
咕噜就是轮子，这是我在学习 Vue 的过程中尝试写的一个 UI 框架（造的轮子），希望对你有用是我在学习Vue过程中做的一个UI框架

## 开始使用
1. 添加CSS样式，使用本框架前，请在CSS中开启bordr-box

    ```
     *, *::before, *::after{box-sizing: border-box;}
    ```
     IE8 及以上浏览器都支持此样式

2. 安装 gulu-ui
    ```
    npm install  gulu-ui
    ```
    或者
    ```
    yarn add gulu-ui
    ```
3. 引入gulu-ui
    ```
    import {Button} from "gulu-ui"
    import "gulu-ui/dist/index.css"

    export default {
      name: 'app',
      components: {
          "g-button": Button,
        }
    }
    ```
4. 引入svg symbols(如需更多icon请自动引入)
    ```
    <script src="//at.alicdn.com/t/font_1121333_q3158vk42o.js"></script>
    ```

## 文档

## 提问
[Issues](https://github.com/mamba1202/gulu-ui/issues)
## 联系方式
邮箱: zhangzhe1202@gmail.com

## 贡献代码
[Pull request](https://github.com/mamba1202/gulu-ui/pulls)

