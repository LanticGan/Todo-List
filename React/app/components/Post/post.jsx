import React, {Component} from 'react';
import './post.scss';

class Post extends Component {

	constructor(props) {
		super(props);
		this.cancelPost=this.cancelPost.bind(this);
	}

	cancelPost() {
		this.props.handlePostShow(false)
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
						<div className="post-input">
							<input type="text" placeholder="请输入TodoItem"/>
						</div>
						<div className="post-confirm">
							添加任务
						</div>
						<div className="post-filter">
							<p>设置优先级</p>
							<input type="radio" name="priority" value="p3" />P3
							<input type="radio" name="priority" value="p2" />P2
							<input type="radio" name="priority" value="p1" />P1
						</div>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default Post