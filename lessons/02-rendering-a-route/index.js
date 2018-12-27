import React from 'react';
import { render } from 'react-dom';
import App from './modules/App';
import About from './modules/About';
import Repos from './modules/Repos';
import {Route, Router, hashHistroy} from 'react-router';

render(
    <Router history={hashHistroy}>
        <Route path="/" component={App}></Route>
        <Route path="/repos" component={Repos}></Route>
        <Route path="/about" component={About}></Route>
    </Router>, document.getElementById('app')
)
