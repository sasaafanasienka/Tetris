import { CLEAR_LEVEL, COUNT_ROWS } from "../types"

const initialLevel = {
    rows: 0,
    level: 1,
    speed: 800
}

export const levelReducer = (state = initialLevel, action) => {
    switch(action.type) {
        case COUNT_ROWS:
            return action.payload
        case CLEAR_LEVEL:
            return initialLevel
        default:
            return state
    }
}