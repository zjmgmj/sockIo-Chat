<template lang="pug">
vForm
  el-button(type="primary", plain, @click="loginSubmit") 登录
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Basic from "@/api/index.ts";
interface Login {
  userName: string;
}
const Component = defineComponent({
  setup() {
    debugger;
    const form: Login = {
      userName: "",
    };
    const basic: any = Basic;
    return {
      form,
      basic,
    };
  },
  methods: {
    loginSubmit() {
      debugger;
      console.log("-----------", this.basic.test());
    },
  },
});
export default Component;
</script>
