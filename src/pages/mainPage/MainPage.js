import React from "react";
import { useDispatch, useSelector } from "react-redux";

function MainPage() {
    const number = useSelector(state => state.count);

    const dispatch = useDispatch();

    const increment = () => {
        dispatch({
            type: 'INCREMENT'
        })
    }

    const decrement = () => {
        dispatch({
            type: 'DECREMENT'
        })
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default MainPage;