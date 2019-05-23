---
title: Popover 弹出层
---
<popover-demo-1></popover-demo-1>
#### 代码
```html
   <g-popover>
       <g-button>上方弹出</g-button>
       <template slot="content">弹出内容</template>
    </g-popover>
    <g-popover position="bottom">
        <g-button>下方弹出</g-button>
        <template slot="content">弹出内容</template>
    </g-popover>
    <g-popover position="left">
        <g-button>左边弹出</g-button>
        <template slot="content">弹出内容</template>
    </g-popover>
    <g-popover position="right">
        <g-button>右边弹出</g-button>
        <template slot="content">弹出内容</template>
    </g-popover>
```
<popover-demo-2></popover-demo-2>
#### 代码
```html
   <g-popover trigger="hover">
        <g-button>上方弹出</g-button>
        <template slot="content">弹出内容</template>
    </g-popover>
    <g-popover position="bottom" trigger="hover">
         <g-button>下方弹出</g-button>
         <template slot="content">弹出内容</template>
    </g-popover>
    <g-popover position="left" trigger="hover">
        <g-button>左边弹出</g-button>
        <template slot="content">弹出内容</template>
    </g-popover>
    <g-popover position="right" trigger="hover">
        <g-button>右边弹出</g-button>
        <template slot="content">弹出内容</template>
    </g-popover>
```
