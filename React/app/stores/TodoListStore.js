import { observable, action, computed } from 'mobx';

class TodoListStore {
	@observable postShow = false;
	@observable doingItems = []; 
	@observable doneItems = [];
	@observable ordering = 'create_time'; // Items排序类型

	/*
		决定遮蔽层和输入框展示与否
	*/
	@action handlePostShow(condition) {
		this.postShow = condition;
	}

	/*
		给doingItems添加新的item	
	*/
	@action addItem(item) {
		this.doingItems.push(item);
	}

	/*
		从Items列表里删除item
	*/
	@action deleteItem(type, index) {
		// type=0删除doingItem，type=other删除doneItem
		if (type == 0) {
			this.doingItems.splice(index, 1);
		} else {
			this.doneItems.splice(index, 1);
		}
	}

	/*
		将item标记为已完成
	*/
	@action completeItem(index) {
		this.doneItems.push(this.doingItems[index]);
		this.doingItems.splice(index, 1);
	}

	/*
		编辑item内容
	*/
	@action editItem(index, content) {
		this.doingItems[index].content = content;
	}

	/*
		改变排序方式
		这里直接对doingitems进行相应排序
		状态更新后React组件会重新渲染
	*/
	@action changeOrdering(type) {
		this.ordering = type;
		// 根据创建时间排序
		if (type == 'create_time') {
			this.doingItems = this.doingItems.sort((item1, item2) => {
				return item1.createTime - item2.createTime;
			});
		} 
		// 根据优先级排序
		else if (type == 'priority') {
			this.doingItems = this.doingItems.sort((item1, item2) => {
				return item1.priority - item2.priority;
			});
		} 
		// 根据截止时间排序
		else if (type == 'expire_date') {
			this.doingItems = this.doingItems.sort((item1, item2) => {
				return item1.expireDate.unix() - item2.expireDate.unix();
			});
		}
	}
}

export default new TodoListStore ();