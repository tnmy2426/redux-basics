import React from 'react'
import {connect} from 'react-redux'
import {increament, decreament} from '../services/actions/counterAction'

const Counter = ({ increament, decreament, count}) => {
    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={()=>increament()}>Increament</button>
            <button onClick={()=>decreament()}>Decreament</button>
        </div>
    )
}

const mapStateToProps = (state) =>({
    count: state.counterReducer.count
})

export default connect(mapStateToProps, {increament, decreament})(Counter)
