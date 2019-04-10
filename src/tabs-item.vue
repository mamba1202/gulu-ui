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
  name: "LunziTabsItem",
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
      this.eventBus.$emit("update:selected", this.name,this);
    }
  }
};
</script>
<style lang="scss" scoped>
 $blue: blue;
.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  display: flex;
  height: 100%;
  align-items: center;
  &.active {
    color: $blue;
    font-weight: bold;
  }
}
</style>
