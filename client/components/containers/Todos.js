import React from 'react';
import {connect} from 'react-redux';

/* Import Actions */
import {addTodo} from './../../actions/TodoActions';

class Todos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {newTask:''};
		
	}
	componentDidMount() {
	
	}
	renderTodos(){
		return this.props.todo.items.map((todo,index)=>{
			return <li key={index}>{todo.task}</li>;
		});
	}
	onNewTaskChange(e){

		this.setState({newTask:e.target.value});

	}
	addTodo(){
		let todo = {task:this.state.newTask,completed:false};
		if(this.state.newTask){
			this.props.addTodo(todo);
			this.setState({newTask:''});
		}
		else{
			alert('Please enter a task');
		}
		
	}
	removeTodo(todo){
		this.props.removeTodo();
	}
	render(){
		return(
			<div>
				<h1>Todos Page</h1>
				<ul>
				{this.renderTodos()}
				</ul>
				<div>
				<input type="text" onChange={this.onNewTaskChange.bind(this)} value={this.state.newTask}/>
					<button onClick={this.addTodo.bind(this)}>Add</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){

	return {
		todo:state.todo
	}

}

function mapDispatchToProps(dispatch){
	return {
		addTodo(todo){
			dispatch(addTodo(todo));
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Todos);