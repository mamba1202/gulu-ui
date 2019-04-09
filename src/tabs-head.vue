<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="action-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "lunziz-tabs-head",
  inject: ["eventBus"],
  created() {
    this.$emit("update:selected", "tabs-head 抛出的数据");
  }
};
</script>
</script>
<style lang="scss" scoped>
$tab-height: 40px;
.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
 // align-items: center;
  border: 1px solid red;
  > .action-wrapper {
    margin-left: auto;
  }
}
</style>
