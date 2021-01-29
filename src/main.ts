import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import Antd from "ant-design-vue";
// import "ant-design-vue/dist/antd.css";
// import "@/assets/stylus/common.styl";
// import Antd from "ant-design-vue";
const app = createApp(App);
app.use(router);
import components from "@/components";
components(app);

import global from "@/global";
global(app);
const root = window as any;
root.vm = app.mount("#app");
