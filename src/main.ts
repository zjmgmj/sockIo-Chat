import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

import components from "@/components";
components(app);

import utils from "@/utils";
utils(app);

app.mount("#app");
