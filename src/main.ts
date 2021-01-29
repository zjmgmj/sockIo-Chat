import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import { registerMicroApps, setDefaultMountApp, start } from "qiankun" // 乾坤微前端架构

const app = createApp(App);
app.use(router);
import components from "@/components";
components(app);

import global from "@/global";
global(app);
const root = window as any;
root.vm = app.mount("#app");

// 传入子应用数据
// const msg = {
//   data: {},
//   fns: []
// }
