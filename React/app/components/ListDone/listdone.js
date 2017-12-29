import React, {Component} from 'react';
import { observer } from 'mobx-react';
import DoneItems from '../DoneItems/doneitems.js';
import './listdone.scss';

@observer 
class ListDone extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let { store } = this.props;
		let doneItemsLength = store.doneItems.length;
		return(
			<div className="list-done">
				<div className="list-done-title">
					<label>已完成</label>
					<div className="items-number">{doneItemsLength}</div>
				</div>
				<DoneItems 
					store={store} />
			</div>
		);
	}
}

export default ListDone;