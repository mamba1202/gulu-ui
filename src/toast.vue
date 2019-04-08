<template>
  <div
    class="toast"
    ref="wrapper"
    :class="toastClasses"
  >
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div
        v-else
        v-html="$slots.default[0]"
      ></div>
    </div>
    <div
      class="line"
      ref="line"
    ></div>
    <span
      class="close"
      v-if="closeButton"
      @click="onClickClose"
    >
      {{closeButton.text}}
    </span>
  </div>
</template>
<script>
//构造组件的选项
export default {
  name: "lunzi-toast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 50
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "关闭",
          callback: undefined
        };
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "middle"].indexOf(value) >= 0;
      }
    }
  },
  mounted() {
    this.updateStyle();
    this.execAutoClose();
  },
  computed: {
    toastClasses() {
      return {
        [`position-${this.position}`]: true
      };
    }
  },
  methods: {
    updateStyle() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${
          this.$refs.wrapper.getBoundingClientRect().height
        }px`;
      });
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    },
    close() {
      this.$el.remove();
      this.$destroy();
    },
    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
.toast {
  position: fixed;
  //top: 0;
  left: 50%;
  //transform: translateX(-50%);
  font-size: $font-size;
  color: white;
  height: $toast-min-height;
  line-height: 1.8;
  display: flex;
  align-items: center;
  background: $toast-bg;
  box-shadow: $box-shadow;
  padding: 0 16px;
  border-radius: 4px;
  .message {
    padding: 8px 0;
  }
  .close {
    padding-left: 16px;
    flex-shrink: 0;
  }
  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
  &.position-top {
    top: 0;
    transform: translateX(-50%);
  }
  &.position-bottom {
    bottom: 0;
    transform: translateX(-50%);
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
