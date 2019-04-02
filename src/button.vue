<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
    <!-- <svg v-if="icon" class="icon">
    <use :xlink:href="`#i-${icon}`"></use>
    </svg> -->
     <!-- <use :xlink:href="`#i-settings`"></use> -->
     <g-icon class="icon" v-if="icon" :name="icon"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
export default {
  //props: ["icon", "iconPosition"]

  props: {
    icon: {},  //值名
    iconPosition: {  //值配置
      type: String,
      default: "left",  //默认left
      validator (value){
        // if(value !=='left' && value !=='right'){
        //   return false
        // }else{
        //   return true
        // }
        return value !=='left' && value !=='right' ? false : true
      }
    }
  }
}
</script>
<style lang="scss">
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(-border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--border-color-hover);
    background-color: var(--button-active-bg);
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
}
</style>
