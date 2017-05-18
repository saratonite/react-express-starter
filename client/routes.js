import React from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './store';
import App from './components/App';
import Home from './components/containers/Home';
import Todos from './components/containers/Todos';
import NotFound from './components/NotFound';
import Menu from './components/Menu';

export default function(){
	return (
		<Provider store={store}>
			<Router >
				<div>
				<Menu/>
				<Route path='/' exact component={Home}></Route>
				<Route path='/todos' component={Todos}></Route>
				</div>
			</Router>
		</Provider>
		);
}