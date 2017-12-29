import React from 'react';
import { observer } from 'mobx-react';
import './doingitems.scss';

@observer
class DoingItems extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			editingItemIndex: -1,
			editingItem: ''
		}
	}

	deleteItem = (e) => {
		let itemId = e.target.name;
		this.props.store.deleteItem(0, itemId);
	}

	completeItem = (e) => {
		let itemId = Number(e.target.getAttribute('name'));
		this.props.store.completeItem(itemId);
	}

	editItem = (e) => {
		this.setState({
			editingItem: e.target.value
		})
	}

	submitNewItem = (e) => {
		e.preventDefault();
		let [itemIndex, newItemContent] = [
			Number(e.target.getAttribute('itemindex')), 
			e.target.newitem.value
		];
		this.setState({
			editingItemIndex: -1
		})
		this.props.store.editItem(itemIndex, newItemContent);
	}

	showEdit = (e) => {
		let text = e.target.textContent;
		let itemID = e.target.getAttribute('itemID');
		this.setState({
			editingItem: text,
			editingItemIndex: itemID
		})
	}

	render() {
		const { store } = this.props;
		let itemsContent = store.doingItems,
			items = [];
		let isEditing = this.state.isEditing,
			editingItemIndex = Number(this.state.editingItemIndex);
		if (itemsContent.length) {
			items = itemsContent.map((item, index) => {
				let itemPrioriyClass = `priority-${item.priority}`
				return (
					<div className="item" key={index}>
						<div  className={`${itemPrioriyClass} done-box`} name={index} onClick={this.completeItem}>
						</div>
						{
							(editingItemIndex != index) &&
							<div className="item-content" onClick={this.showEdit} itemID={index}>
								{item.content}
							</div>
						}	
						{
							(editingItemIndex == index) &&
							<div className="edit-item">
								<form onSubmit={this.submitNewItem} itemindex={index}>
										<input className="item-input" type="text" name="newitem" 
											value={this.state.editingItem} onChange={this.editItem} 
											autoFocus
										/>
										<input type="submit" style={{display:'none'}} />
								</form>
							</div>
						}
							<div className="expire-date">
								{item.expireDate.format("MM/DD/YYYY")}
							</div>
							<div className="cancel" onClick={this.deleteItem}>
								<img src="assets/cancel.png" name={index} />
							</div>
					</div>
				);
			});
		}
		return (
			<div className="doing-items">
				{items}
			</div>
		);
	}
}

export default DoingItems;