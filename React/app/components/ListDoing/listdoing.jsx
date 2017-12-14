import React, {Component} from 'react';
import DoingItems from '../DoingItems/doingitems.jsx';
import './listdoing.scss';

class ListDoing extends Component {
	constructor(props) {
		super(props);

	}
	render() {
		return(
			<div className="list-doing">
				<div className="list-doing-title">
					<label>正在进行</label>
					<div className="items-number">{this.props.doingItemsNumber}</div>
				</div>
				<DoingItems 
					items={this.props.items} 
					handleDeleteItem={this.props.handleDeleteItem} 
					handleCompleteItem={this.props.handleCompleteItem}
					handleEditItem={this.props.handleEditItem}
					/>
			</div>
		);
	}
}

export default ListDoing