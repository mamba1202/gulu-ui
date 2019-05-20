<template>
  <div style="padding-top: 16px;">
    <p>
      <strong>预览</strong>
    </p>
    <g-input v-model="value"></g-input>
    <div>
      value: {{value}}
    </div>
  </div>
</template>
<script>
  import GInput from '../../../src/input'
  export default {
    components: {GInput},
    data () {
      return {
        value: '1',
    }
  }
  }
</script>