## 轱辘 - 一个 Vue UI 组件
## 介绍
这是我在学习Vue过程中做的一个UI框架

[![Build Status](https://travis-ci.org/mamba1202/lunzi.svg?branch=master)](https://travis-ci.org/mamba1202/lunzi)
## 开始使用
1. 添加CSS样式
  使用本框架前，请在CSS中开启bordr-box

  ```
  *, *::before, *::after{box-sizing: border-box;}
  ```
  IE8 及以上浏览器都支持此样式

  你还需要设置默认颜色等变量(后续会改为 SCSS 变量)
  ```
  html {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
  ```
  IE15 及以上浏览器都支持此样式。

2. 安装 lunzi
  ```
  npm install --save lunzi
  ```
3. 引入lunzi
  ```
  import {Button,ButtonGroup,Icon} from "mambazhang"
  import "mambazhang/dist/index.css"

  export default {
    name: 'app',
    components: {
      "g-button": Button,
      "g-icon": Icon,
    }
  }
  ```
4. 引入svg symbols
  ```
  <script src="//at.alicdn.com/t/font_1121333_q3158vk42o.js"></script>
  ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

