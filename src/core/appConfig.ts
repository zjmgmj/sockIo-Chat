const href: string = `http://${location.hostname}`;

// 无需登录注册
const noAuthApps: Array<Object> = [
	{
		module: "",
		defaultRegister: true,
		entry: href + ":2753",
		routerBase: "/",
		useExternals: true,
		data: [],
	},
];

// 需权限
const nexAuthApps: Array<Object> = [];
export { noAuthApps, nexAuthApps };
