/**
 * Created by Administrator on 2016/9/28.
 */
import {DECREMENT_COUNTER,INCREMENT_COUNTER,UNDO_COUNTER,REDO_COUNTER}from './../actions/counter'
export default function counter(state = 0, action)  {//将初始化的state设为0，action为{ type: 'INCREMENT' }或{ type: 'DECREMENT' }】
    switch (action.type) {
        case INCREMENT_COUNTER:/*代表不同的方法*/
            return state + 1/*返回不同state*/
        case DECREMENT_COUNTER:
            return state - 1
        default:
            return state
    }
}