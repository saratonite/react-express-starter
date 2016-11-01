
import {createStore,combineReducers} from 'redux';
import {routerReducer } from 'react-router-redux'
const defaultState = {
	todo:{
		items:[{task:'Goto store',completed:false}]
	}
}

/* Todo reducer */

function todoReducer(state=[],action){
	console.info('Todo Reducer');
	console.log(state);

	switch(action.type){
		case 'ADD_TODO' : 
			console.log('Payload',action.payload);
			var newState = Object.assign({},state);
			newState.items.push(action.payload);
			return newState;
		default:
		return state;
	}

}

var rootReducer = combineReducers({todo:todoReducer,routing: routerReducer});


/* Create Store */

export default createStore(rootReducer,defaultState);
