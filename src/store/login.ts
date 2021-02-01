// 登录状态管理
import { Store } from "./main";

interface LoginInfo extends Object {
	loginInfo: Login;
}

interface Login extends Object {
	username: string;
	password: string;
}

class LoginStore extends Store<LoginInfo> {
	protected data(): LoginInfo {
		return {
			loginInfo: {
				username: "",
				password: "",
			},
		};
	}

	login(data: Login) {
		this.state.loginInfo = data;
	}
}

export const loginStore: LoginStore = new LoginStore();
