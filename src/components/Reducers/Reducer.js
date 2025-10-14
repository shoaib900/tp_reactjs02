import React, { useReducer, useState } from 'react'

const initialState = 0

const reducer = (state, action) => {
    if (action.type === "increment") {
        return state + 1;
    } else if (action.type === "decrement") {
        if (state === 0) {
            return state
        } else {
            return state - 1;
        }
    } else {
        return state
    }

}

const Reducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>

            <h1> hello value is : {state} </h1>
            <br />
            <button onClick={() => dispatch({ type: "increment" })}>increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>

        </div>
    )
}

export default Reducer
