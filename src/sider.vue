<template>
  <transition name="fade">
    <div
      class="sider"
      v-if="visible"
    >
      <slot></slot>
      <button @click="visible=false">close</button>
    </div>
    <transition>
</template>

<script>
export default {
  name: "lunzi-sider",
  data() {
    return {
      visible: true
    };
  }
};
</script>

<style lang="scss" scoped>
.sider {
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.fade-enter-active,
.fade-enter-active {
  transition: all 0.3s;
}
.fade-enter,
.fade-leave-to {
  margin-left: -200px;
}
</style>
