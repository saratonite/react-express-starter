import React from 'react';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import store from './store';
import App from './components/App';
import Home from './components/containers/Home';
import Todos from './components/containers/Todos';

export default function(){
	return (
		<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={Home}></IndexRoute>
				<Route path='/todos' component={Todos}></Route>
			</Route>
		</Router>
		</Provider>
		);
}