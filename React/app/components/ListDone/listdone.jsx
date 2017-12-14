import React, {Component} from 'react';
import './listdone.scss';

class ListDone extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="list-done">
				<div className="list-done-title">
					<label>已完成</label>
					<div className="items-number">{this.props.doneItemsNumber}</div>
				</div>
			</div>
		);
	}
}

export default ListDone