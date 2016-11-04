import React from 'react';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import store from './store';
import App from './components/App';
import Home from './components/containers/Home';
import Todos from './components/containers/Todos';
import NotFound from './components/NotFound';

 const routes = () => {
	return (
		<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={Home}></IndexRoute>
				<Route path='/todos' component={Todos}></Route>
				<Route path='*' component={NotFound} ></Route>
			</Route>
		</Router>
		</Provider>
		);
}

export default routes;