import React from 'react';
import {render} from 'react-dom';
import routes from './routes';
import { AppContainer } from 'react-hot-loader'
import App from './components/App';

var styles = require('./styles/app.scss');


//render(<App/>,document.getElementById('app'));

//TODO: Hot module reloading functionality

//FIXME: React component not reloading properly

const newrender = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )
}

newrender(App);

if(module.hot) {

    const NextApp = require('./components/App').default;
    module.hot.accept('./components/App', () => { newrender(App) })
}
