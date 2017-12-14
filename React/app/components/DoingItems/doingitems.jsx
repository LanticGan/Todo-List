import React, {Component} from 'react';
import './doingitems.scss';

class DoingItems extends Component {

	constructor(props) {
		super(props);
		this.deleteItem = this.deleteItem.bind(this);
	}

	deleteItem(e) {
		let itemId = Number(e.target.name);
		this.props.handleDeleteItem(itemId);
	}

	render() {
		let itemsContent = this.props.items;
		let items = [];
		if (itemsContent.length) {
			items = itemsContent.map((item, index) => {
			return (
				<div className="item" key={index}>
					<div className="done-box">
					</div>
					<div className="item-content">
						{item}
					</div>
					<div className="cancel" onClick={this.deleteItem}>
						<img src="assets/cancel.png" name={index} />
					</div>
				</div>);
			});
		}

		return (
			<div className="doing-items">
				{items}
			</div>
		);
	}
}

export default DoingItems