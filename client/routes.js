import React from 'react';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import App from './components/App';
import Home from './components/containers/Home';
import Todos from './components/containers/Todos';
export default function(){
	return (
		<Router history={browserHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={Home}></IndexRoute>
				<Route path='/todos' component={Todos}></Route>
			</Route>
		</Router>
		);
}