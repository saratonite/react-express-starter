import React from 'react';
import {render} from 'react-dom';
import routes from './routes';

var styles = require('./styles/app.scss');

render(routes(),document.getElementById('app'));
