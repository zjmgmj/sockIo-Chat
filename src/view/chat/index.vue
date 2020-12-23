<template>
  <div>test</div>
  <van-button type="primary">sss</van-button>
</template>
<script>
import { onMounted } from 'vue'
export default {
  name: 'chat',
  setup(props) {
    console.log('-----------------setup', props)
    onMounted(() => {
      console.log('-----------onMounted')
    })
  },
  methods: {
    
  }
}
</script>
<style lang="stylus">
  
</style>