import React, {Component} from 'react';
import './doneitems.scss';

class DoneItems extends Component {

	constructor(props) {
		super(props);
		this.deleteItem = this.deleteItem.bind(this);
	}

	deleteItem(e) {
		let itemId = Number(e.target.name);
		this.props.handleDeleteItem(itemId, 1);
	}

	render() {
		let itemsContent = this.props.items;
		let items = [];
		if (itemsContent.length) {
			items = itemsContent.map((item, index) => {
			return (
				<div className="item" key={index}>
					<div className="done-box">
						<img src="assets/done.png"/>
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
			<div className="done-items">
				{items}
			</div>
		);
	}
}

export default DoneItems