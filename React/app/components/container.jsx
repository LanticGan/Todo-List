import React, {Component} from 'react';
import Header from './Header/header.jsx';
import Post from './Post/post.jsx';
import './container.scss';

class Container extends Component {
	constructor(props) {
		super(props);
		this.handlePostShow = this.handlePostShow.bind(this);
		this.state = {
			postShow: false
		};
	}

	handlePostShow(condition) {
		this.setState({
			postShow: condition
		});
	}

	render() {
		let postShow = this.state.postShow;
		return (
			<div className="main-container"> 
				<Header handlePostShow={this.handlePostShow} />
				<Post handlePostShow={this.handlePostShow} show={postShow}/>
			</div>
		);
	}
}
export default Container