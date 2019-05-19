<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}"
    @click="$emit('click')">
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <div class="g-button-content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from "./icon.vue";

export default {
  name: "lunzi-button",
  components: {
    "g-icon": Icon
  },
  //props: ["icon", "iconPosition"]
  props: {
    icon: {},     //后面是值得配置
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      //值配置
      type: String,
      default: "left", //默认left
      validator(value) {
        return value !== "left" && value !== "right" ? false : true;
      }
    }
  }
};

</script>
<style lang="scss" scoped>
$border-color-hover: #666;
$border-color: #999;
$border-color-light: lighten($border-color, 30%);
$border-radius: 4px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$button-active-bg: #eee;
$button-bg: white;
$button-height: 32px;
$color: #333;
$light-color: #666;
$font-size: 14px;
$small-font-size: 12px;
$input-height: 32px;
$red: #f1453d;
$grey: #eee;
$blue: #4a90e2;
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: $border-color-hover;
    background-color: $button-bg;
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: 0.1em;
  }
  > .g-button-content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0.1em;
      margin-right: 0;
    }
    > .g-button-content {
      order: 1;
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>
