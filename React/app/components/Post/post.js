import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { observer } from 'mobx-react';
import 'react-datepicker/dist/react-datepicker.css';
import './post.scss';

@observer
class Post extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		startDate: moment()
	}

	handleChange = (date) => {
    	this.setState({
      		startDate: date
    	});
  	}	

	cancelPost = () => {
		this.props.store.handlePostShow(false);
	}

	addItem = (e) => {
		e.preventDefault();
		let ctObj = new Date();
		let itemPriority = Number(e.target.priority.value),
			createTime = ctObj.getTime(),
			itemContent = e.target.itemContent.value,
			expireDate = this.state.startDate;
		
		/*
		 默认优先级为3
		*/
		if (!itemPriority) {
			itemPriority = 3;
		}

		let item = {
			createTime: createTime,
			priority: itemPriority,
			content: itemContent,
			expireDate: expireDate
		};
		
		this.props.store.addItem(item);
		this.cancelPost();
	}

	render() {
		let show = this.props.store.postShow;
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
								<input type="radio" name="priority" value="3" />P3
								<input type="radio" name="priority" value="2" />P2
								<input type="radio" name="priority" value="1" />P1
							</div>
							<p className="expire-date">Expire Date:</p>
							<div className="datePicker">
								<DatePicker
        							selected={this.state.startDate}
        							onChange={this.handleChange}
    							/>	
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