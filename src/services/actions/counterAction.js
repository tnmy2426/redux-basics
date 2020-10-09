import {increament_value, decreament_value} from '../types'

export const increament = () => {
    return {
        type: increament_value
    }
}

export const decreament = () => {
    return {
        type: decreament_value
    }
}