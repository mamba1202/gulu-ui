<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "lunzi-tabs",
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      }
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
    // this.$emit('update:selected', 'xxx')

    this.$children.forEach((vm) => {
      if (vm.$options.name === "LunziTabsHead") {
        vm.$children.forEach((childVm) => {
          if (
            childVm.$options.name === "LunziTabsItem" &&
            childVm.name === this.selected
          ) {
              //console.log(item.$el)
            this.eventBus.$emit("update:selected", this.selected, childVm);// this.selected--name
          }
        });
      }
    });
  }
};
</script>
<style lang="scss" scoped>
</style>
