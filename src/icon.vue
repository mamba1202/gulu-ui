<template>
    <svg class="g-icon">
      <use :xlink:href="`#i-${name}`"></use>
      <!-- <use :xlink:href="`#i-settings`"></use> -->
    </svg>
</template>

<script>
export default {
props: ['name']
}
</script>

<style lang="scss">
.g-icon {
        width: 1em;
        height: 1em;
    }
</style>
