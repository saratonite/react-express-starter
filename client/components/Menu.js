import React from 'react';
import {Link} from 'react-router';

export default class Menu extends React.Component {
	render(){
		return(
			<nav>
				<ul >
					<li><Link to={'/'} >Home</Link></li>
					<li><Link to={'/todos'} >Todos</Link></li>
				</ul>
			</nav>
		);
	}
}