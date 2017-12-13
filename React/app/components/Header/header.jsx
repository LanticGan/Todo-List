import React, {Component} from 'react';
import './header.scss';

class Header extends Component {
	render() {
		return (
			<header>
				<div className="header-content">
					<label>TodoList</label>
					<div className="add-icon">
						<img src="assets/add.png" alt="+" />
					</div>
				</div>
			</header>
		)
	}
}

export default Header