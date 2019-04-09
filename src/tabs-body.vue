<template>
    <div class="tabs-body">
<slot></slot>
    </div>
</template>
<script>
export default {
    name: 'lunzi-tabs-body',
    inject:['eventBus'],
    created(){
        //this.$emit('update: selected','tabs-head抛出的数据')
    }
}
</script>
<style lang="scss" scoped>
</style>
