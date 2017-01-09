import React, { Component, PropTypes } from 'react'
class Counter extends Component {
    render() {
        const {counter, increment, decrement, incrementIfOdd, incrementIfAsync,undo,redo} = this.props;

        return (
            <p>
                Clicked: {counter} times
                {'123 '}
                <button onClick={increment}>
                    +
                </button>
                {' '}
                <button onClick={decrement}>
                    -
                </button>
                {' '}
                <button onClick={incrementIfOdd}>
                    Increment if odd
                </button>
                {' '}
                <button onClick={()=>incrementIfAsync()}>
                    Increment async
                </button>
                {' '}
                <button onClick={undo}>
                    undo
                </button>
                {' '}
                <button onClick={redo}>
                    redo
                </button>
            </p>
        )
    }
}


module.exports= Counter;