import React from 'react';
import { observer } from 'mobx-react';
import Header from '../components/Header/header.js';
import Post from '../components/Post/post.js';
import ListDoing from '../components/ListDoing/listdoing.js';
import ListDone from '../components/ListDone/listdone.js';
import TodoListStore from '../stores/TodoListStore.js';
import './container.scss';

@observer
class Container extends React.Component {
	constructor(props) {
		super(props);
	}

	handlePostShow = (condition) => {
		TodoListStore.handlePostShow(condition);
	}

	aaddItem = (item) => {
		TodoListStore.addItem(item);
	}

	handleDeleteItem(index, type) {

		/* 
			type=0删除doingItems,
			type=other删除doneItems.
		*/
		let tempItems = [];

		if (type == 0) {
			tempItems = this.state.doingItems;
			tempItems.splice(index, 1);
			this.setState({
				doingItems: tempItems
			});

		} else {
			tempItems = this.state.doneItems;
			tempItems.splice(index, 1);
			this.setState({
				doneItems: tempItems
			});
		}
	}

	handleCompleteItem(index) {
		let completeItems = this.state.doneItems,
			tempItems = this.state.doingItems;
		completeItems.push(tempItems[index]);

		this.handleDeleteItem(index, 0, true);
		this.setState({
			doneItems: completeItems
		});
	}

	handleEditItem(index, content) {
		let tempItems = this.state.doingItems;
		tempItems[index].content = content;

		this.setState({
			doingItems: tempItems
		});
	}

	handleSortTypeChange(type) {
		let tempItems = this.state.doingItems;

		if (type == 'create_time') {
			tempItems.sort((item1, item2) => {
				return item1.createTime - item2.createTime;
			});
		} else if (type == 'priority') {
			tempItems.sort((item1, item2) => {
				return item1.priority - item2.priority;
			});
		} else if (type == 'expire_date') {
			tempItems.sort((item1, item2) => {
				return item1.expireDate.unix() - item2.expireDate.unix();
			});
		}

		this.setState({
			doingItems: tempItems,
			sortType: type,
		});
	}

	render() {
		return (
			<div className="main-container"> 
				<Header store={TodoListStore} />
				<Post 
					store={TodoListStore}
				/>
				<ListDoing
					store={TodoListStore}
				/>
				<ListDone  
					store={TodoListStore}
				/>
			</div>
		);
	}
}
export default Container;