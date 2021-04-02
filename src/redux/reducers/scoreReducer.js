import { UPDATE_SCORE, CLEAR_SCORE } from "../types"

const initialScore = {
    score: 0,
    record: localStorage.getItem('record') ? localStorage.getItem('record') : 0,
}

export const scoreReducer = (state = initialScore, action) => {
    switch(action.type) {
        case UPDATE_SCORE:
            return action.payload
        case CLEAR_SCORE:
            return initialScore
        default:
            return state
    }
}