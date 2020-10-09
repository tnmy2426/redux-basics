import {increament_value, decreament_value} from '../types' 

const initialState = {
    count:0
}

export default function(state=initialState, action){
    switch(action.type){
        case increament_value:
            return {
                ...state,
                count: state.count + 1
            }
        case decreament_value:
            return{
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}