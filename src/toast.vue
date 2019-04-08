<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "lunzi-toast"
};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
.toast {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: $font-size;
  color: white;
  height: $toast-height;
  line-height: 1.8;
  display: flex;
  align-items: center;
  background: $toast-bg;
  box-shadow: $box-shadow;
  padding: 0 16px;
  border-radius: 4px;
}
</style>
