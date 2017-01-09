/**
 * Created by Administrator on 2017/1/3.
 */
import 'isomorphic-fetch';
export const INCREMENT_COUNTER='INCREMENT_COUNTER';
export const DECREMENT_COUNTER='DECREMENT_COUNTER';
export const UNDO_COUNTER='UNDO_COUNTER';
export const REDO_COUNTER='REDO_COUNTER';
export  function increment() {
    return {type:INCREMENT_COUNTER}
}
export function decrement() {
    return {type:DECREMENT_COUNTER}
}
export function undo() {
    return {type:UNDO_COUNTER}
}
export function redo() {
    return {type:REDO_COUNTER}
}
export  function incrementIfOdd () {
    return(dispatch ,getState)=>{
        const value=getState().counter;
        console.log(value);
        if(value % 2 ===0){
            return
        }
        dispatch(increment())
    }
}

export  function incrementIfAsync (delay = 1000) {
    return(dispatch ,getState)=>{
        setTimeout(()=>{
            dispatch(increment())
        },delay)

    }
}
