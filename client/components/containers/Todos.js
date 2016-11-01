import React from 'react';
import {connect} from 'react-redux';

class Todos extends React.Component {
	componentDidMount() {
		console.log(this.props);
	}
	renderTodos(){
		return this.props.todo.items.map((todo,index)=>{
			return <p key={index}>{todo.task}</p>;
		});
	}
	render(){
		return(
			<div>
				<h1>Todos Page</h1>
				{this.renderTodos()}
			</div>
		);
	}
}

function mapStateToProps(state){

	return {
		todo:state.todo
	}

}

export default connect(mapStateToProps)(Todos);