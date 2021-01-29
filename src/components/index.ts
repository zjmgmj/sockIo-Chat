// 组件注册
import { Button } from "ant-design-vue";
import testComponent from "./test.vue";
const components = (app: any) => {
	const components: any = [Button, testComponent];
	components.forEach((component: any) => {
		app.component(component.name, component);
	});
};

export default components;
