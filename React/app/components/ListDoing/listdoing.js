import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DoingItems from '../DoingItems/doingitems.js';
import './listdoing.scss';

@observer
class ListDoing extends Component {

	constructor(props) {
		super(props);
	}

	changeSortTypeToCT = () => {
		this.props.store.changeOrdering('create_time');
	}

	changeSortTypeToPR = () => {
		this.props.store.changeOrdering('priority');
	}

	changeSortTypeToDD = () => {
		this.props.store.changeOrdering('expire_date');
	}

	render() {
		const { store } = this.props;
		let doingItemsLength = store.doingItems.length,
			sortType = store.ordering,
		    listDoingSortBar = null;

		if (doingItemsLength) {
			listDoingSortBar = 
			<div className="list-doing-sort">
				<div className="create-time-sort" onClick={this.changeSortTypeToCT}>
					<img src={sortType == 'create_time' ? "assets/time-active.png" : "assets/time-default.png"} />
				</div>
				<div className="priority-sort" onClick={this.changeSortTypeToPR}>
					<img src={sortType == 'priority' ? "assets/hot-active.png" : "assets/hot-default.png"} />
				</div>
				<div className="priority-sort" onClick={this.changeSortTypeToDD}>
					<img src={sortType == 'expire_date' ? "assets/date-active.png" : "assets/date-default.png"} />
				</div>
			</div>
		}

		return (
			<div className="list-doing">
				<div className="list-doing-title">
					<label>正在进行</label>
					<div className="items-number">{doingItemsLength}</div>
				</div>
				{listDoingSortBar}
				<DoingItems 
					store={store}
					/>
			</div>
		);
	}
}

export default ListDoing