import React, {Component} from 'react';
import Header from './Header/header.jsx';
import Post from './Post/post.jsx';
import './container.scss';

class Container extends Component {
	render() {
		return (
			<div className="main-container"> 
				<Header />
				<Post />
			</div>
		);
	}
}

export default Container