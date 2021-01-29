// 组件注册
// import { Button, Menu } from "ant-design-vue";
// import Antd from "ant-design-vue/es";
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from "@ant-design/icons-vue";
import testComponent from "./test.vue";
import leftMenu from "./menu.vue";
const components = (app: any) => {
	// app.use(Antd);
	const components: any = [testComponent, leftMenu];
	components.forEach((component: any) => {
		app.component(component.name, component);
	});
};

export default components;
