import React from 'react';
import {render} from 'react-dom';
import routes from './routes';

import App from './components/App';

var styles = require('./styles/app.scss');

render(<App/>,document.getElementById('app'));
