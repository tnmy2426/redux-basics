import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increament, decreament} from '../services/actions/counterAction'

const CounterTwo = () => {

    const count = useSelector(state => state.counterReducer.count)
    const dispatch = useDispatch()
    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={()=>dispatch(increament())}>Increament</button>
            <button onClick={()=>dispatch(decreament())}>Decreament</button>
        </div>
    )
}

export default CounterTwo
