import { Store } from "./main";

interface Menu extends Object {
	menus: Array<MenuItem>;
}

interface MenuItem extends Object {
	title: string;
	url: string;
}

class MenuStore extends Store<Menu> {
	protected data(): Menu {
		return {
			menus: [{ title: "菜单一", url: "" }],
		};
	}

	setMenu(data: Array<MenuItem>) {
		this.state.menus = data;
	}
}

export const menuStore: MenuStore = new MenuStore();
