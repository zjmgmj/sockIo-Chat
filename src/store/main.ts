// 状态管理
import { reactive, readonly } from "vue";

export abstract class Store<T extends Object> {
	protected state: T;

	constructor() {
		let data = this.data();
		this.setup(data);
		const newData = Object.assign(
			{
				test: 1,
				menuList: [{ title: "菜单一", url: "" }],
			},
			data
		);
		this.state = reactive(newData) as T;
	}

	protected abstract data(): T;
	protected setup(data: T): void {}
	public getState(): T {
		return readonly(this.state) as T;
	}
}
