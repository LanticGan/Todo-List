import React, {Component} from 'react';
import './header.scss';

class Header extends Component {

	constructor(props) {
		super(props);
		this.addTodoItem = this.addTodoItem.bind(this);
	}

	addTodoItem() {
		this.props.store.handlePostShow(true);
	}
	
	render() {
		return (
			<header>
				<div className="header-content">
					<label>TodoList</label>
					<div className="add-icon" onClick={this.addTodoItem}>
						<img src="assets/add.png" alt="+" />
					</div>
				</div>
			</header>
		)
	}
}

export default Header