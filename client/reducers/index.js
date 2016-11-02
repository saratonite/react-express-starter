import {combineReducers} from 'redux';
import {routerReducer } from 'react-router-redux'

import todoReducer from './TodoReducer';

export default combineReducers({todo:todoReducer,routing: routerReducer});
