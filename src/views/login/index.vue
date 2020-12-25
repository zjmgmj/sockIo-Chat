<template lang="pug">
vForm(@submit='loginSubmit')
  vField(v-model='form.userName', name='用户名', label='用户名', placeholder='用户名')
  vButton(round, block, type='primary', native-type='submit') 登录
</template>
<script lang="ts">
import { defineComponent } from 'vue'
interface Login {
  userName: string
}
const Component = defineComponent({
  setup() {
    const form: Login = {
      userName: ''
    }
    return {
      form
    }
  },
  methods: {
    loginSubmit() {
      console.log('-----------')
    }
  }
})
export default Component
</script>
<style lang=""></style>
