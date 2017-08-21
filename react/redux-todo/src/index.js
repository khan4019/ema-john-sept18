import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import reducer from './reducers';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer); // pass reducer

ReactDOM.render(
<MuiThemeProvider>
    <Provider store={store}>
        <App />
    </Provider>
</MuiThemeProvider>
, document.getElementById('root'));
registerServiceWorker();
