/* Todo reducer */

export default function todoReducer(state=[],action){

	switch(action.type){
		case 'ADD_TODO' : 
			var newState = Object.assign({},state);
			newState.items.unshift(action.payload);
			return newState;
		default:
		return state;
	}

}
