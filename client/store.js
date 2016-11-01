
import {createStore} from 'redux';
const defaultState = {
	todo:{
		items:[{task:'Goto store',completed:false}]
	}
}

/* Todo reducer */

function todo(state,action){

	switch(action.type){
		case 'ADD_TODO' : 
			var newState = Object.assign({},state);
			newState.todo.items.push({task:'Go to Store',completed:false});
			return newState;
		default:
		return state;
	}

}



/* Create Store */

export default createStore(todo,defaultState);
