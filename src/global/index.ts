// 公用方法注册
import LocalStroage from "./LocalStroage";
import Http from "./Http";
import utils from "xe-utils";
const global = (app: any) => {
	const global: any = {
		$localStorage: new LocalStroage(),
		$http: Http,
		utils,
	};
	app.config.globalProperties = global;
};

export default global;
