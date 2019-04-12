<template>
  <button
    class="g-button"
    :class="{[`icon-${iconPosition}`]: true}"
    @click="$emit('click')"
  >
    <!-- <svg v-if="icon" class="icon">
    <use :xlink:href="`#i-${icon}`"></use>
    </svg> -->
    <!-- <use :xlink:href="`#i-settings`"></use> -->
    <g-icon
      class="icon"
      v-if="icon && !loading"
      :name="icon"
    ></g-icon>
    <g-icon
      class="loading icon"
      v-if="loading"
      name="loading"
    ></g-icon>
    <div class="content">
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
    icon: {}, //值名
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      //值配置
      type: String,
      default: "left", //默认left
      validator(value) {
        // if(value !=='left' && value !=='right'){
        //   return false
        // }else{
        //   return true
        // }
        return value !== "left" && value !== "right" ? false : true;
      }
    }
  }
  /*  methods:{
    x(){
      this.$emit('click')
    }
  } */
};
</script>
<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-button {
  font-size:32px;;
  height: 32px;
  padding: 0 1em;
  border-radius: 4px;
  border: 1px solid #999;
  background: white;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color:#666;
    background-color: #eee;
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: 0.1em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0.1em;
      margin-right: 0;
    }
    > .content {
      order: 1;
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>
