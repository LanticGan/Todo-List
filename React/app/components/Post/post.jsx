import React, {Component} from 'react';
import './post.scss';

class Post extends Component {

	constructor(props) {
		super(props);
		this.cancelPost = this.cancelPost.bind(this);
		this.addItem = this.addItem.bind(this);
	}

	cancelPost() {
		this.props.handlePostShow(false)
	}

	addItem(e) {
		e.preventDefault();
		this.cancelPost();
		let itemContent = e.target.itemContent.value;
		this.props.appendItem(itemContent);
	}

	render() {
		let show = this.props.show;
		if (show) {
			return (
				<div>
					<div className="cover"></div>
					<div className="post-container">
						<div className="post-title">
							<label>添加任务</label>
							<div className="cancel-icon" onClick={this.cancelPost}>
								<img src="assets/cancel.png" />
							</div>
						</div>
						<form onSubmit={this.addItem}>
							<div className="post-input">
								<input type="text" name="itemContent" placeholder="请输入todo item" autoFocus/>
							</div>
							<input type="submit" value="添加任务" className="post-confirm"/>
							<div className="post-filter">
								<p>设置优先级</p>
								<input type="radio" name="priority" value="p3" />P3
								<input type="radio" name="priority" value="p2" />P2
								<input type="radio" name="priority" value="p1" />P1
							</div>
							
						</form>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default Post