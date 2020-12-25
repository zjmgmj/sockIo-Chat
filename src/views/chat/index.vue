<template lang="pug">
div aaa
  span sss
  div dddd
vButton(type='primary') sss
</template>
<script>
import { onMounted } from 'vue'
export default {
  name: 'chat',
  setup() {
    onMounted(() => {
      console.log(localStorage)
    })
  }
}
</script>
<style lang="stylus"></style>
