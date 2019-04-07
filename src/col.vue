<template>
  <div
    class="col"
    :class="colClass"
    :style="colStyle"
  >
      <slot></slot>
  </div>
</template>
<script>
export default {
  name: "lunzi-col",
  props: {
    span: {
      type: [Number, String]
    },
    offest: {
      type: [Number, String]
    }
  },
  data() {
    return {
      gutter: 0
    };
  },
  computed: {
    colClass() {
    let { span, offest } = this
     return [
      span && `col-${span}`,
      offest && `offest-${offest}`
      ]
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px"
      };
    }
  }
};
</script>
<style scoped lang="scss">
.col {
  width: 50%;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offest-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>
