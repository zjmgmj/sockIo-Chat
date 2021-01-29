<template lang="pug">
.menu
  .menu-item(v-for="(menu, idx) in menuList", :key="idx") {{ menu.title }}
</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRefs, watchEffect } from "vue";
import { menuStore } from "@/store/menu";
interface dataProp {
  collapsed: Boolean;
  selectedKeys: Array<string>;
  openKeys: Array<string>;
  preOpenKeys: Array<string>;
}
export default defineComponent({
  name: "leftMenu",
  components: {},
  setup(props) {
    const menuList = menuStore.getState().menus;

    const data: dataProp = reactive({
      collapsed: false,
      selectedKeys: ["1"],
      openKeys: ["sub1"],
      preOpenKeys: ["sub1"],
    });
    const refData = toRefs(data);

    return {
      ...refData,
      menuList,
    };
  },
});
</script>
<style lang="stylus">
.menu
  width 200px
  position absolute
  left 0px
  top 0
  bottom 0
  background #fafafa
</style>