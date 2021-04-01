import { UPDATE_SCORE } from "../types"

const initialScore = {
    score: 0,
    record: localStorage.getItem('record'),
}

export const scoreReducer = (state = initialScore, action) => {
    switch(action.type) {
        case UPDATE_SCORE:
            return action.payload
        default:
            return state
    }
}