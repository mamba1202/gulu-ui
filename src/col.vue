<template>
  <div
    class="col"
    :class="[`col-${span}`, offest && `offest-${offest}`]"
    :style="{paddingLeft: gutter/2+'px',paddingRight: gutter/2+'px'}"
  >
  <div style="border: 1px solid green; height: 100px;">
 <slot></slot>
  </div> 
  </div>
</template>
<script>
export default {
  name: "lunzi-col",
  props: {
    span: {
      type: [Number, String]
    },
    offest: {
      type: [Number, String]
  }
},
data(){
    return{
        gutter: 0
    }
}
}
</script>
<style scoped lang="scss">
.col {
  width: 50%;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offest-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
     margin-left: ($n / 24) * 100%;
    }
  }
}
</style>
