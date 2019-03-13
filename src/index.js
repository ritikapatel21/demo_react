import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';

import store from './store/configureStore'
import App from 'containers/Login/Login.js';

ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <Switch>                               
                <Route path="/" name="Home" component={App} />
            </Switch>
        </HashRouter>
    </Provider>
), document.getElementById('root'));
