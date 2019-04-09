<template>
  <div
    class="tabs-item"
    @click="xxx"
    :class="classes"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "lunzi-tabs-item",
  inject: ["eventBus"],
  data() {
    return {
      active: false
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: Symbol | Number,
      required: true
    }
  },
  computed: {
    classes() {
      return {
        active: this.active
      };
    }
  },
  created() {
    this.eventBus.$on("update:selected", name => {
      if (name === this.name) {
        this.active = true;
      } else {
        this.active = false;
      }
    });
  },
  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name);
    }
  }
};
</script>
<style lang="scss" scoped>
.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid greenyellow;
  &.active {
    background: red;
  }
}
</style>
