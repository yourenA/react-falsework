/**
 * Created by Administrator on 2016/9/28.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router';
import getRoutes from './Routes';
const routes=getRoutes()
import {Provider} from 'react-redux'
import configureStore from './store/configureSote';
const initialState = window.__INITIAL_STATE__;
console.log('initialState',initialState);
const store = configureStore(initialState);
const rootEl = document.getElementById('app');
/*
 onIncrement={() => store.dispatch({ type: 'INCREMENT' })}发出不同的action,将store的不同情况发送给子组件
 onDecrement={() => store.dispatch({ type: 'DECREMENT' })}将store的不同情况发送给子组件
 */
console.log("store",store)
ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>
    ,
    rootEl
);
