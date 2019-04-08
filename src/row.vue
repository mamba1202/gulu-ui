<template>
  <div
    class="row"
    :style="rowStyle"
    :class="rowClass"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "lunzi-row",
  props: {
    gutter: {
      type: [Number, String]
    },
    algin: {
      type: String,
      validator(value) {
        return ["left", "right", "center"].includes(value);
      }
    }
  },
  computed: {
    rowStyle() {
      let { gutter } = this;
      return {
        marginLeft: -gutter / 2 + "px",
        marginRight: -gutter / 2 + "px"
      }
    },
    rowClass() {
      let { algin } = this;
      return [algin && `algin-${algin}`];
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter;
    });
  }
};
</script>
<style scoped lang="scss">
.row {
  display: flex;
  flex-wrap: wrap;
  &.algin-left {
    justify-content: flex-start;
  }
   &.algin-right{
    justify-content: flex-end;
  }
  &.algin-center {
    justify-content: center;
  }
}
</style>
