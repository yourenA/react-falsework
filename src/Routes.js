/**
 * Created by Administrator on 2017/1/4.
 */
import React from 'react';
import {Router, Route, IndexRoute ,browserHistory } from 'react-router';
import Counter from './containers/Counter';
import Main from './containers/Main';
import Home from './containers/Home';

export default () => (
<Router history={browserHistory}>
    <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="counter" component={Counter} />
    </Route>
</Router>

);