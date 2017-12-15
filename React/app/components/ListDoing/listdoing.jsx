import React, {Component} from 'react';
import DoingItems from '../DoingItems/doingitems.jsx';
import './listdoing.scss';

class ListDoing extends Component {

	constructor(props) {
		super(props);
		this.changeSortTypeToCT = this.changeSortTypeToCT.bind(this);
		this.changeSortTypeToPR = this.changeSortTypeToPR.bind(this);
	}

	changeSortTypeToCT() {
		this.props.handleSortTypeChange('create_time');
	}

	changeSortTypeToPR() {
		this.props.handleSortTypeChange('priority');
	}

	render() {
		let listDoingSortBar = null;
		let sortType = this.props.sortType;
		if (this.props.items.length) {
			listDoingSortBar = 
			<div className="list-doing-sort">
				<div className="create-time-sort" onClick={this.changeSortTypeToCT}>
					<img src={sortType == 'create_time' ? "assets/time-active.png" : "assets/time-default.png"} />
				</div>
				<div className="priority-sort" onClick={this.changeSortTypeToPR}>
					<img src={sortType == 'priority' ? "assets/hot-active.png" : "assets/hot-default.png"} />
				</div>
			</div>
		}
		return(
			<div className="list-doing">
				<div className="list-doing-title">
					<label>正在进行</label>
					<div className="items-number">{this.props.doingItemsNumber}</div>
				</div>
				{listDoingSortBar}
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