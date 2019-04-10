<template>
  <div
    class="collapse"
  >
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "LunziCollapse",
  props: {
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: String
    }
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  mounted() {
    this.eventBus.$emit("update:selected", this.selected);
    this.eventBus.$on("update:selected", (name) => {
      this.$emit("update:selected", name);
    })
    this.$children.forEach((vm)=>{
        console.log(vm)
        vm.single=this.single
    })
  }
};
</script>
<style scoped lang="scss">
$border-color: grey;
$border-radius: 4px;
.collapse {
  border: 1px solid $border-color;
  border-radius: $border-radius;
}
</style>
