<template lang="pug">
a-button(type="primary", plain, @click="loginSubmit") 登录
test-component
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Basic from "@/api/index.ts";
import { loginStore } from "@/store/login";
interface Login {
  userName: string;
}
const Component = defineComponent({
  setup() {
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
    async loginSubmit() {
      const data = await this.basic.test();
      console.log("-------data", data);
      loginStore.login({ username: "zzz", password: "ssss" });
      console.log("--------", loginStore.getState());
    },
  },
});
export default Component;
</script>
