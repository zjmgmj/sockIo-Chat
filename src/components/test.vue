<template lang="pug">
a-button.btn.btn-primary(type="submit", @click="submit") Submit
div {{ msg }}{{ num }}
div {{ testData.msg }}{{ testData.num }}
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
interface testData extends Object {
  num: number;
  msg: string;
}
const component = defineComponent({
  name: "testComponent",
  setup() {
    const msg: string = "123";
    let num = ref(0);
    const testData = reactive({ num: 0, msg: "sssaaa" }) as testData;
    return {
      msg,
      num,
      testData,
    };
  },
  methods: {
    submit() {
      this.num++;
      this.testData.num++;
    },
  },
});
export default component;
</script>