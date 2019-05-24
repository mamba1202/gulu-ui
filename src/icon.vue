<template>
  <svg class="g-icon">
    <use :xlink:href="`#i-${name}`"></use>
    <!-- <use :xlink:href="`#i-settings`"></use> -->
  </svg>
</template>

<script>
import "./svg.js";
export default {
  name: "lunzi-icon",
  props: ["name"]
};
</script>

<style lang="scss">
.g-icon {
  width: 14px;
  height: 14px;
  display: inline-flex;
  align-items: center
}
#i-error{
  
}
</style>
