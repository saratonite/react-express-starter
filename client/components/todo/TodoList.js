import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {

	constructor(props) {
		super(props);
		
	}
	renderTodos(){

		if(!this.props.todos.length){
			return(<div>Nothing to do :(</div>);
		}
		return this.props.todos.map((todo,index)=>{
			return <TodoItem key={index} todo={todo}></TodoItem>;
		});
	}

	render(){

		return(
			<div className="todo-list">
				<h2>Todo List</h2>
				{this.renderTodos()}
			</div>
		);

	}
}