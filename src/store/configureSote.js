/**
 * Created by Administrator on 2017/1/3.
 */
import { createStore, applyMiddleware } from 'redux';
import {asyncMiddleware} from 'redux-amrc'
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(
    thunk,
    asyncMiddleware,
    loggerMiddleware
)(createStore);

export default function configureStore(initialState,devToolsExtension){
    const store = createStoreWithMiddleware(rootReducer,initialState,devToolsExtension);

    if(module.hot){
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer)
        });
    }

    return store;
}
