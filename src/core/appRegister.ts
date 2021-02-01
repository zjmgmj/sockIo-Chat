import { registerMicroApps, setDefaultMountApp, start, runAfterFirstMounted, initGlobalState } from "qiankun"; // 乾坤微前端架构
import appStore from "./appStore";
import { noAuthApps } from "./appConfig";

/**
 * @name 声明要传递给子应用的信息
 * @param data 主应要传递给子应用的数据类信息
 * @param emits 主应要传递给子应用的方法类信息
 * @param GLOBAL 主应要传递给子应用的全局常量
 * @param utils 主应要传递给子应用的工具类信息（只是一种方案）
 * @param components 主应要传递给子应用的组件类信息（只是一种方案）
 */
const props = {
	data: '',
  emits: '',
  GLOBAL: ''
};

const appContainer = "#subapp-viewport";
let defaultApp = ""; // 默认注册应用路由前缀
const qianKunStart = (list: Array<Object>) => {
	const apps: Array<Object> = [];
	list.map((app: any) => {
		apps.push({
			name: app.name,
			entry: app.entry,
			contain: appContainer,
			activeRule: app.routerBase,
			props: {...props, routes: app.data, routerBase: app.routerBase},
		});
		if (app.defaultRegister) defaultApp = app.routerBase;
	});
};

registerMicroApps(apps, {
	beforeLoad: [
		(app) => {
			console.log("[LifeCycle] before load %c%s", "color: green;", app.name);
		},
	],
	beforeMount: [
		(app) => {
			console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
		},
	],
	afterUnmount: [
		(app) => {
			console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
		},
	],
});

// 设置默认进入的子应用
setDefaultMountApp(`${defaultApp}/`);

// 启动微应用
start();

// 微前端启动进入第一个子应用后回调函数
runAfterFirstMounted(() => {});

// 启动qiankun应用间通信机制
appStore(initGlobalState);
