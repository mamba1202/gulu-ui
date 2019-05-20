<template>
  <div style="padding-top: 16px;">
    <p>
      <strong>预览</strong>
    </p>
    <g-button>默认按钮</g-button>
    <g-button icon="settings">设置</g-button>
    <g-button icon="download">点赞</g-button>
    <g-button icon="thumbs-up">下载</g-button>
    <g-button :loading="true">登陆中</g-button>
    <g-button disabled>默认按钮</g-button>
  </div>
</template>
<script>
import Button from "../../../src/button";

export default {
  components: {
    "g-button": Button
  }
};
</script>