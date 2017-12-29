import React, { Component } from 'react';
import { observer } from 'mobx-react';
import TodoListStore from '../stores/TodoListStore.js';
import Header from '../components/Header/header.js';
import Post from '../components/Post/post.js';
import ListDoing from '../components/ListDoing/listdoing.js';
import ListDone from '../components/ListDone/listdone.js';
import './container.scss';

@observer
class Container extends Component {
	constructor(props) {
		super(props);
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