<template>
    <div>
        <g-button-group icon="left" icon-position="left">上一页</g-button-group>
        <g-button-group icon="right" icon-position="right">下一页</g-button-group>
    </div>
</template>
<script>
import Button from '../../../src/button'
import ButtonGroup from '../../../src/button-group'
export default {
    components:{
        'g-button':Button,
        'g-button-group': ButtonGroup
    }
    
}
</script>

