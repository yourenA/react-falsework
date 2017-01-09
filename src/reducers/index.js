/**
 * Created by Administrator on 2016/9/28.
 */
import {DECREMENT_COUNTER,INCREMENT_COUNTER,UNDO_COUNTER,REDO_COUNTER}from './../actions/counter'
import {combineReducers} from 'redux'
import undoable,{includeAction} from 'redux-undo'
import {reducerCreator} from 'redux-amrc'
import counter from './Coutner-Reducer';
const RootReducer=combineReducers({
    async:reducerCreator(),
    counter:counter
    /*undoable(counter,{
        filter:includeAction([INCREMENT_COUNTER,DECREMENT_COUNTER]),
        limit:10,
        debug:true,
        undoType:UNDO_COUNTER,
        redoType:REDO_COUNTER
    })*/
});

export default  RootReducer;