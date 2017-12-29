import React from 'react';
import ReactDOM from 'react-dom';
import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';

class TodoList {
    @observable todos = [];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
    @action addTask(item) {
    	this.todos.push(item);
    }
}

@observer
class TodoListView extends React.Component {

	click = () => {
		this.props.todoList.addTask({id:2, finished: false, title:'test'})
	}
    render() {

        return <div>
        	<div onClick={this.click}>add</div>
            <ul>
                {this.props.todoList.todos.map(todo =>
                    <TodoView todo={todo} key={todo.id} click={this.click}/>
                )}
            </ul>
        </div>
    }
}


@observer
class TodoView extends React.Component {
	render() {
		console.log(1);
		let { todo } = this.props;
		return (
			<li>
			<div onClick={this.props.click}>666</div>
        <input
            type="checkbox"
            checked={todo.finished}
            onClick={() => todo.finished = !todo.finished}
        />{todo.title}
    </li>
		);
	}
}

const store = new TodoList();
store.addTask({id:1, finished: false, title:'test'})
ReactDOM.render(<TodoListView todoList={store} />, document.getElementById('root'));
