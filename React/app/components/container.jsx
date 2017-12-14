import React, {Component} from 'react';
import Header from './Header/header.jsx';
import Post from './Post/post.jsx';
import ListDoing from './ListDoing/listdoing.jsx';
import ListDone from './ListDone/listdone.jsx'

import './container.scss';

class Container extends Component {
	constructor(props) {
		super(props);

		this.appendItem = this.appendItem.bind(this);
		this.handlePostShow = this.handlePostShow.bind(this);
		this.handleDeleteItem = this.handleDeleteItem.bind(this);
		this.handleCompleteItem = this.handleCompleteItem.bind(this);
		this.handleEditItem = this.handleEditItem.bind(this);

		this.state = {
			postShow: false,
			doingItems: [],
			doneItems: [],
		};
	}

	handlePostShow(condition) {
		this.setState({
			postShow: condition
		});
	}

	appendItem(content) {
		let tempItems = this.state.doingItems;
		tempItems.push(content);
		this.setState({
			doingItems: tempItems
		});
	}

	handleDeleteItem(index, type) {
		/* 
			type=0删除doingItems,
			type=other删除doneItems.
		*/
		let tempItems = []
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
		let doneItems = this.state.doneItems;
		let tempItems = this.state.doingItems;
		doneItems.push(tempItems[index]);
		this.handleDeleteItem(index, 0);
		this.setState({
			doneItems: doneItems
		});
	}

	handleEditItem(index, content) {
		let tempItems = this.state.doingItems;
		tempItems[index] = content;
		this.setState({
			doingItems: tempItems
		});
	}

	render() {
		let [postShow, doingItems, doneItems] = [this.state.postShow, this.state.doingItems, this.state.doneItems];
		return (
			<div className="main-container"> 
				<Header handlePostShow={this.handlePostShow} />
				<Post 
					handlePostShow={this.handlePostShow} 
					show={postShow}
					appendItem ={this.appendItem} 
				/>
				<ListDoing 
					items={doingItems} 
					doingItemsNumber={doingItems.length} 
					handleDeleteItem={this.handleDeleteItem} 
					handleCompleteItem={this.handleCompleteItem}
					handleEditItem={this.handleEditItem}
				/>
				<ListDone  
					items={doneItems} 
					doneItemsNumber={doneItems.length} 
					handleDeleteItem={this.handleDeleteItem} 
				/>
			</div>
		);
	}
}
export default Container