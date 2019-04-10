<template>
  <div class="collapseItem">
    <div
      class="title"
      @click="toggle"
    >{{single}}
      {{title}}
    </div>
    <div
      class="content"
      v-if="open"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "LunziCollapseIem",
  inject: ["eventBus"],
  data() {
    return {
      open: false,
      single: false
    };
  },
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.eventBus &&
      this.eventBus.$on("update:selected", name => {
        if (name !== this.name) {
          if (this.single) {
            this.close();
          }
        } else {
          this.show();
        }
      });
  },
  methods: {
    toggle() {
      if (this.open) {
        this.open = false;
      } else {
        //this.open = true;
        this.eventBus && this.eventBus.$emit("update:selected", this.name);
      }
    },
    close() {
      this.open = false;
    },
    show() {
      this.open = true;
    }
  }
};
</script>
<style scoped lang="scss">
.collapseItem {
  $border-color: grey;
  $border-radius: 4px;
  > .title {
    border: 1px solid $border-color;
    // border-radius: $border-radius;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    cursor: pointer;
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    > .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  > .content {
    padding: 8px;
  }
}
</style>
