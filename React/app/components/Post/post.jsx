import React, {Component} from 'react';
import './post.scss';

class Post extends Component {
	render() {
		return (
			<div className="post-container">
				<div className="post-title">
					<label>添加任务</label>
					<div className="cancel-icon">
						<img src="assets/add.png" />
					</div>
				</div>
				<div className="post-input">
					<input type="text" placeholder="请输入TodoItem"/>
				</div>
				<div className="post-filter">
					<p>选择优先级</p>
					<input type="radio" name="priority" value="p1"/>P1
					<input type="radio" name="priority" value="p2" />P2
					<input type="radio" name="priority" value="p3" />P3
				</div>
				<div className="post-confirm">
					添加任务
				</div>
	
			</div>
		)
	}
}

export default Post