<template>
    <div class="tabs-item">
<slot></slot>
    </div>
</template>
<script>
export default {
    name: 'tabs-item',
    props:{
        type: Boolean,
        default: false,
    }
}
</script>
<style lang="scss" scoped>
</style>
