
import {createStore,combineReducers} from 'redux';
import {routerReducer } from 'react-router-redux'
const defaultState = {
	todo:{
		items:[]
	}
}


import rootReducer  from './reducers/index';


/* Create Store */

export default createStore(rootReducer,defaultState);
