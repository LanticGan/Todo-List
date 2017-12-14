import React, {Component} from 'react';
import Header from './Header/header.jsx';
import Post from './Post/post.jsx';
import ListDoing from './ListDoing/listdoing.jsx';
import ListDone from './ListDone/listdone.jsx'

import './container.scss';

class Container extends Component {
	constructor(props) {
		super(props);
		this.handlePostShow = this.handlePostShow.bind(this);
		this.appendItem = this.appendItem.bind(this);
		this.handleDeleteItem = this.handleDeleteItem.bind(this);
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

	handleDeleteItem(index) {
		let tempItems = this.state.doingItems;
		tempItems.splice(index, 1);
		this.setState({
			doingItems: tempItems
		});
	}

	render() {
		let [postShow, doingItems] = [this.state.postShow, this.state.doingItems]
		return (
			<div className="main-container"> 
				<Header handlePostShow={this.handlePostShow} />
				<Post 
					handlePostShow={this.handlePostShow} 
					show={postShow}
					appendItem ={this.appendItem} 
				/>
				<ListDoing items={doingItems} doingItemsNumber={doingItems.length} handleDeleteItem={this.handleDeleteItem} />
				<ListDone  doneItemsNumber="0" />
			</div>
		);
	}
}
export default Container